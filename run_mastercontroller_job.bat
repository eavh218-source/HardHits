@echo off
set PYTHONIOENCODING=utf-8
chcp 65001 >nul
cd /d C:\code\HardHits
"C:\Users\eavh2\AppData\Local\Microsoft\WindowsApps\python3.12.exe" "C:\code\HardHits\MasterController.py" >> "C:\code\HardHits\logs\mastercontroller_job.log" 2>&1
