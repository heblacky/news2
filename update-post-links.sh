#!/bin/bash

# Update links in the main index.html to point to the local post page
sed -i '' 's|https://www.thedenverpost.org/2025/03/29/king-soopers-strike-employment-counts-colorado-job-losses/|/post/|g' index.html

echo "Updated links to point to the local post page" 