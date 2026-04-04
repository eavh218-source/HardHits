@echo off
setlocal
set PYTHONIOENCODING=utf-8
chcp 65001 >nul
cd /d C:\code\HardHits
echo Starting temporary public tunnel for HardHits stable on http://localhost:8000 ...
npx --yes localtunnel --port 8000
endlocal
