# HardHits stable public hosting

## Current verified local state

The stable site is currently verified locally from `c:\code\HardHits`.

- Homepage: `http://localhost:8000/`
- Status endpoint: `http://localhost:8000/status`
- Starter script: `run_public_site.bat`
- Tunnel script: `run_public_tunnel.bat`

## Primary stable public URL

- GitHub Pages: `https://eavh218-source.github.io/HardHits/`

## Internet exposure path

### Working temporary public path (available now)

1. Start the local stable site server:
   ```bat
   cd /d C:\code\HardHits
   run_public_site.bat
   ```
2. Start the temporary public tunnel:
   ```bat
   cd /d C:\code\HardHits
   run_public_tunnel_temp.bat
   ```
3. Share the generated `https://*.loca.lt` URL while that terminal remains open.

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

- The site is static and should continue to be served from the stable repo only.
- `MasterController.py` and `python/hr_engine_job.py` now update `data/status.json` and `data/status.js` after their runs.
- `site/HardHits.html` reads the status artifact and shows a refresh-health banner.
- GitHub Pages is now the preferred stable public endpoint and should remain the public stable URL unless explicitly changed.
- For alternate hosting, a named Cloudflare Tunnel or Caddy/IIS + custom domain can still be used as fallback infrastructure.
