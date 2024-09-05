#!/bin/bash
file_path="$1"
file_dir=$(dirname "$file_path")
if [[ "$file_dir" == "/Users/001/Library/Mobile Documents/iCloud~com~nssurge~inc/Documents/Script" ]]; then
    /Applications/Surge.app/Contents/Applications/surge-cli script evaluate "$file_path" cron 5
else
    node "$file_path"
fi