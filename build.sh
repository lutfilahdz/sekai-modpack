#!/usr/bin/env bash

set -e

PACKWIZ_TMP="$(mktemp -d)"
trap 'rm -rf "$PACKWIZ_TMP"' EXIT

if [ -z "$SITE_URL" ] && [ -n "$VERCEL_URL" ]; then
	SITE_URL="https://$VERCEL_URL"
fi
SITE_URL="${SITE_URL%/}"

# Download packwiz
if ! curl -fsSL \
	"https://nightly.link/packwiz/packwiz/workflows/go/main/Linux%2064-bit%20x86.zip" \
	-o "$PACKWIZ_TMP/packwiz.zip"; then
	echo "Latest Packwiz artifact unavailable, using fallback run 34043101039..."

	curl -fsSL \
		"https://nightly.link/packwiz/packwiz/actions/runs/34043101039/Linux%2064-bit%20x86.zip" \
		-o "$PACKWIZ_TMP/packwiz.zip"
fi

unzip -q "$PACKWIZ_TMP/packwiz.zip" -d "$PACKWIZ_TMP"
chmod +x "$PACKWIZ_TMP/packwiz"

rm -rf public
mkdir -p public
cp -r pack/. public/

if [ -n "$SITE_URL" ]; then
	echo "Rewriting sekai.lutfilahdz.com URLs to $SITE_URL"
	find public -name '*.pw.toml' -exec \
		sed -i -E "s#^([[:space:]]*url[[:space:]]*=[[:space:]]*\")https?://sekai\.lutfilahdz\.com#\1${SITE_URL}#" {} +
else
	echo "SITE_URL not set, keeping URLs as committed"
fi

(cd public && "$PACKWIZ_TMP/packwiz" refresh --build)
(cd archive && zip -r ../public/modpack.zip .)
