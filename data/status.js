const siteStatus = {
  "site": "stable",
  "repo_root": "C:\\code\\HardHits",
  "homepage": "site/HardHits.html",
  "generated_at_utc": "2026-04-05T10:36:39Z",
  "status": "healthy",
  "jobs": {
    "mastercontroller": {
      "label": "Full dashboard refresh",
      "success": true,
      "detail": "All stable dashboard refresh scripts completed successfully.",
      "last_run_utc": "2026-04-05T10:36:39Z",
      "log_file": "logs/mastercontroller_job.log"
    },
    "hr_engine_job": {
      "label": "Live HR + lineups refresh",
      "success": null,
      "detail": "Pending first run",
      "last_run_utc": null,
      "log_file": "logs/hr_engine_job.log"
    }
  }
};
window.siteStatus = siteStatus;
