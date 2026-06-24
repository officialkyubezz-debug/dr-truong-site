#!/usr/bin/env bash
# Small helper to create a repo (using gh) and push the site
# Usage: ./publish.sh <github-username> <repo-name>

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <github-username> <repo-name>"
  exit 1
fi

USER="$1"
REPO="$2"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI not found. Please install GitHub CLI or push manually using git."
  exit 1
fi

echo "Creating GitHub repo $USER/$REPO and pushing..."
gh repo create "$USER/$REPO" --public --source=. --remote=origin --push
echo "If Pages aren't active, run: gh pages set-up --branch main --path /"
echo "Done. Your site will be available at https://$USER.github.io/$REPO/"
