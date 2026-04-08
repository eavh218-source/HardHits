"""Serve the stable HardHits site over HTTP from the repo root.

This keeps the existing relative paths working while limiting public access to
static site content only.

Usage:
    python python/serve_public_site.py --host 0.0.0.0 --port 8000
"""

from __future__ import annotations

import argparse
import os
import posixpath
import urllib.error
import urllib.request
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent
ALLOWED_PREFIXES = ("/site/", "/assets/", "/data/")
ALLOWED_FILES = {"/favicon.ico", "/robots.txt"}
API_PROXY_BASE = os.getenv("HARDHITS_API_PROXY_BASE", "http://127.0.0.1:8010").rstrip("/")


class HardHitsPublicHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str | None = None, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        request_path = parsed.path or "/"

        if request_path.startswith("/api/"):
            self._proxy_api_request(parsed)
            return

        if request_path == "/":
            self.send_response(HTTPStatus.FOUND)
            self.send_header("Location", "/site/HardHits.html")
            self.end_headers()
            return

        if request_path in {"/health", "/healthz", "/status"}:
            request_path = "/data/status.json"

        if not self._is_allowed(request_path):
            self.send_error(HTTPStatus.NOT_FOUND, "Path not available")
            return

        self.path = request_path
        super().do_GET()

    def do_OPTIONS(self) -> None:
        parsed = urlparse(self.path)
        if (parsed.path or "").startswith("/api/"):
            self.send_response(HTTPStatus.NO_CONTENT)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Accept, Content-Type")
            self.end_headers()
            return
        self.send_error(HTTPStatus.METHOD_NOT_ALLOWED, "Method not allowed")

    def _proxy_api_request(self, parsed) -> None:
        target = API_PROXY_BASE + (parsed.path or "/api")
        if parsed.query:
            target += "?" + parsed.query

        request = urllib.request.Request(
            target,
            headers={
                "Accept": self.headers.get("Accept", "application/json"),
                "User-Agent": "HardHitsPublicProxy/1.0",
            },
            method="GET",
        )

        try:
            with urllib.request.urlopen(request, timeout=15) as response:
                body = response.read()
                self.send_response(response.status)
                self.send_header("Content-Type", response.headers.get("Content-Type", "application/json; charset=utf-8"))
                self.send_header("Cache-Control", "no-store")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(body)
        except urllib.error.HTTPError as exc:
            body = exc.read()
            self.send_response(exc.code)
            self.send_header("Content-Type", exc.headers.get("Content-Type", "application/json; charset=utf-8"))
            self.send_header("Cache-Control", "no-store")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            if body:
                self.wfile.write(body)
        except urllib.error.URLError as exc:
            self.send_error(HTTPStatus.BAD_GATEWAY, f"API proxy unavailable: {exc.reason}")

    def list_directory(self, path):
        self.send_error(HTTPStatus.FORBIDDEN, "Directory listing is disabled")
        return None

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    @staticmethod
    def _is_allowed(request_path: str) -> bool:
        normalized = posixpath.normpath(unquote(request_path))
        if not normalized.startswith("/"):
            normalized = "/" + normalized
        if normalized in ALLOWED_FILES:
            return True
        return any(normalized.startswith(prefix) for prefix in ALLOWED_PREFIXES)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the stable HardHits site over HTTP.")
    parser.add_argument("--host", default="0.0.0.0", help="Host/interface to bind (default: 0.0.0.0).")
    parser.add_argument("--port", type=int, default=8000, help="Port to serve on (default: 8000).")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    with ThreadingHTTPServer((args.host, args.port), HardHitsPublicHandler) as server:
        print(f"[OK] Serving HardHits stable site from {ROOT}")
        print(f"[OK] Homepage: http://localhost:{args.port}/")
        print(f"[OK] Health:   http://localhost:{args.port}/status")
        print(f"[OK] API proxy: http://localhost:{args.port}/api/* -> {API_PROXY_BASE}/api/*")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\n[OK] Server stopped.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
