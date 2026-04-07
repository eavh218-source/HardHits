@echo off
set PYTHONIOENCODING=utf-8
chcp 65001 >nul
cd /d C:\code\HardHits
set HARDHITS_SQL_SERVER=localhost\SQLEXPRESS
set HARDHITS_SQL_DATABASE=HardHits
set HARDHITS_SQL_DRIVER=ODBC Driver 18 for SQL Server
set HARDHITS_SQL_TRUSTED_CONNECTION=1
set HARDHITS_API_HOST=127.0.0.1
set HARDHITS_API_PORT=8000
echo [HardHits] Starting local API at http://127.0.0.1:8000/docs
"C:\Users\eavh2\AppData\Local\Microsoft\WindowsApps\python3.12.exe" "C:\code\HardHits\python\hardhits_api.py"
