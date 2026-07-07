#!/usr/bin/env bash
# Cache-busting: stamps every local .js/.css reference in *.html with ?v=<version>
# so browsers are forced to fetch the new files instead of serving a stale cache.
# Run this on every deploy AFTER editing site files, then commit.
#
#   scripts/bust-cache.sh            # stamp with current date-time (YYYYMMDDHHMM)
#   scripts/bust-cache.sh 20260707   # stamp with an explicit version
#
# Idempotent: re-running just replaces the existing ?v=... with the new one.
set -euo pipefail
cd "$(dirname "$0")/.."

STAMP="${1:-$(date +%Y%m%d%H%M)}"

for f in *.html; do
  [ -e "$f" ] || continue
  sed -E -i '' "s/(src|href)=\"([^\"]+\.(js|css))(\?v=[0-9]+)?\"/\1=\"\2?v=${STAMP}\"/g" "$f"
done

echo "Cache-busted local assets in *.html with ?v=${STAMP}"
