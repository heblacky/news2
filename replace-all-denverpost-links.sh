#!/bin/bash

# Replace all variations of denverpost.com with thedenverpost.org in all HTML files

# Main index.html
echo "Updating index.html..."
sed -i '' 's|denverpost\.com|thedenverpost.org|g' index.html
# Also update image filenames
sed -i '' 's|cropped-DP_bug_denverpost|cropped-DP_bug_thedenverpost|g' index.html
sed -i '' 's|/denverpost.jpg|/thedenverpost.jpg|g' index.html

# Post page
echo "Updating post/index.html..."
sed -i '' 's|denverpost\.com|thedenverpost.org|g' post/index.html
# Also update image filenames
sed -i '' 's|cropped-DP_bug_denverpost|cropped-DP_bug_thedenverpost|g' post/index.html
sed -i '' 's|/denverpost.jpg|/thedenverpost.jpg|g' post/index.html

# Update Twitter account reference
echo "Updating Twitter references..."
sed -i '' 's|@denverpost|@thedenverpost|g' index.html
sed -i '' 's|@denverpost|@thedenverpost|g' post/index.html

echo "All denverpost references have been replaced with thedenverpost" 