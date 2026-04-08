# HardHits stable public hosting

## Current verified local state

The stable site is currently verified locally from `c:\code\HardHits`.

- Homepage: `http://localhost:8000/`
- Status endpoint: `http://localhost:8000/status`
- API proxy: `http://localhost:8000/api/*` → local HardHits API on `127.0.0.1:8010`
- Site starter script: `run_public_site.bat`
- API starter script: `run_hardhits_api.bat`
- Tunnel script: `run_public_tunnel.bat`

## Primary stable public URL

- GitHub Pages: `https://eavh218-source.github.io/HardHits/`

## Internet exposure path

### Working temporary public path (available now)

1. Start the local HardHits API:
   ```bat
   cd /d C:\code\HardHits
   run_hardhits_api.bat
   ```
2. Start the local stable site server:
   ```bat
   cd /d C:\code\HardHits
   run_public_site.bat
   ```
3. Start the temporary public tunnel:
   ```bat
   cd /d C:\code\HardHits
   run_public_tunnel_temp.bat
   ```
4. Share the generated `https://*.loca.lt` URL while that terminal remains open. The tunneled site now serves `/api/*` through the local proxy, so weather and model data stay API-backed.

### Longer-term Cloudflare path

1. Complete the one-time Cloudflare authentication:
   ```powershell
   & "C:\Users\eavh2\AppData\Local\Microsoft\WinGet\Packages\Cloudflare.cloudflared_Microsoft.Winget.Source_8wekyb3d8bbwe\cloudflared.exe" tunnel login
   ```
2. If the browser downloads `cert.pem`, place it at:
   ```text
   C:\Users\eavh2\.cloudflared\cert.pem
   ```
3. Start the Cloudflare tunnel:
   ```bat
   cd /d C:\code\HardHits
   run_public_tunnel.bat
   ```
4. Share the generated public URL or map a custom domain later.

## Notes

- The public site continues to serve from the stable repo, but `/api/*` is now proxied to the local FastAPI backend so the tunnel/live URL can use dynamic weather and model data.
- GitHub Pages remains a static host; to point the Pages URL at a public API directly, use `?api=https://your-public-api-host` or set `window.HARDHITS_API_BASE_URL`.
- `MasterController.py` and `python/hr_engine_job.py` now update `data/status.json` and `data/status.js` after their runs.
- `site/HardHits.html` reads the status artifact and shows a refresh-health banner.
- GitHub Pages is now the preferred stable public endpoint and should remain the public stable URL unless explicitly changed.
- For alternate hosting, a named Cloudflare Tunnel or Caddy/IIS + custom domain can still be used as fallback infrastructure.
