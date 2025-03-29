#!/bin/bash

# Find and replace all instances of the Vercel URL with thedenverpost.org
sed -i '' 's|news2-git-main-heblacky21s-projects.vercel.app|thedenverpost.org|g' index.html

echo "Reverted all links back to thedenverpost.org" 