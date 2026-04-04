@echo off
setlocal
set PYTHONIOENCODING=utf-8
chcp 65001 >nul
cd /d C:\code\HardHits
set "CLOUDFLARED=C:\Users\eavh2\AppData\Local\Microsoft\WinGet\Packages\Cloudflare.cloudflared_Microsoft.Winget.Source_8wekyb3d8bbwe\cloudflared.exe"
if not exist "%CLOUDFLARED%" set "CLOUDFLARED=cloudflared"
echo Starting public tunnel for HardHits stable on http://localhost:8000 ...
echo If this is the first run, complete the one-time Cloudflare login first.
"%CLOUDFLARED%" tunnel --url http://localhost:8000 --no-autoupdate
endlocal
