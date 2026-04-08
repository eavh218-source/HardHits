const siteStatus = {
  "site": "stable",
  "repo_root": "C:\\code\\HardHits",
  "homepage": "site/HardHits.html",
  "generated_at_utc": "2026-04-08T15:37:22Z",
  "status": "degraded",
  "jobs": {
    "mastercontroller": {
      "label": "Full dashboard refresh",
      "success": false,
      "detail": "Stable refresh scripts completed, but the SQL sync step failed. Check logs for details.",
      "last_run_utc": "2026-04-08T10:42:17Z",
      "log_file": "logs/mastercontroller_job.log"
    },
    "hr_engine_job": {
      "label": "Live HR + lineups refresh",
      "success": true,
      "detail": "Live HR results, starting lineups, and SQL refresh completed successfully.",
      "last_run_utc": "2026-04-08T15:37:22Z",
      "log_file": "logs/hr_engine_job.log"
    }
  }
};
window.siteStatus = siteStatus;
