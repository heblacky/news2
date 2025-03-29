#!/bin/bash

# Find and replace all instances of thedenverpost.org with the Vercel deployment URL
sed -i '' 's|thedenverpost\.org|news2-git-main-heblacky21s-projects.vercel.app|g' index.html

# Find and replace any remaining instances of denverpost.com with the Vercel deployment URL
sed -i '' 's|denverpost\.com|news2-git-main-heblacky21s-projects.vercel.app|g' index.html

echo "Updated all links to use the Vercel deployment URL: news2-git-main-heblacky21s-projects.vercel.app" 