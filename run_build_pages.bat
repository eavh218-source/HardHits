@echo off
set PYTHONIOENCODING=utf-8
chcp 65001 >nul
cd /d C:\code\HardHits
set HARDHITS_PAGES_USE_SQL=1
set HARDHITS_SQL_SERVER=localhost\SQLEXPRESS
set HARDHITS_SQL_DATABASE=HardHits
set HARDHITS_SQL_DRIVER=ODBC Driver 18 for SQL Server
set HARDHITS_SQL_TRUSTED_CONNECTION=1
echo [HardHits] Building and publishing the stable site from SQL-backed exports...
"C:\Users\eavh2\AppData\Local\Microsoft\WindowsApps\python3.12.exe" "C:\code\HardHits\python\publish_github_pages.py" %*
