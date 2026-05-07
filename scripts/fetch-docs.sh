#!/bin/bash
set -e

DOCS_DIR="app/v1/content/docs"
BASE_URL="https://raw.githubusercontent.com/ClawixAI/clawix/main/docs"

mkdir -p "$DOCS_DIR"

docs="GET_STARTED.md CONFIG.md PROVIDERS.md AGENTS.md SKILLS.md MEMORY.md GOVERNANCE.md SECURITY.md MULTI-USERS.md SPEC.md"

for file in $docs; do
  echo "Fetching $file..."
  curl -fsSL --retry 3 --retry-delay 2 "$BASE_URL/$file" -o "$DOCS_DIR/$file"
done

echo "All docs fetched to $DOCS_DIR"
ls -la "$DOCS_DIR"
