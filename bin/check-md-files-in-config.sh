#!/bin/sh

find ./src -type f -name '*.md' | wc -l | xargs echo "Number of markdown files in src:"
grep '.md' ./.vitepress/config.mts | wc -l | xargs echo "Number of markdown files in config:"

echo "=============================="
echo "Files in src but not in config:"
comm -23 <(find ./src -type f -name '*.md' | sed 's/.\/src//g' | sort) <(find ./src -type f -name '*.md' | sed 's/.\/src//g' | xargs -I {} grep -o {} ./.vitepress/config.mts | sort)
echo "=============================="
