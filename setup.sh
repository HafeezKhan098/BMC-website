#!/usr/bin/env bash
# Usage: ./setup.sh clinicdomain.com [whatsapp-number-digits]
# Example: ./setup.sh berlinmedicalcentre.ae 971501234567
set -e
D="$1"; W="$2"
[ -z "$D" ] && { echo "Usage: ./setup.sh domain.com [whatsapp-digits]"; exit 1; }
sed -i.bak "s/YOURDOMAIN.com/$D/g" index.html robots.txt sitemap.xml
[ -n "$W" ] && sed -i.bak "s/whatsapp: \"\"/whatsapp: \"$W\"/" js/main.js
echo "$D" > CNAME
rm -f *.bak js/*.bak
echo "Done. Commit, push, then enable GitHub Pages and point DNS to GitHub."
