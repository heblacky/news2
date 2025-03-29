#!/bin/bash

# Update domain references in the post page to use thedenverpost.org
sed -i '' 's|www.denverpost.com|www.thedenverpost.org|g' post/index.html

echo "Updated domain references in the post page" 