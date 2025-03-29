#!/bin/bash

# Find and replace all instances of denverpost.com with thedenverpost.org in index.html
sed -i '' 's/denverpost\.com/thedenverpost.org/g' index.html

echo "Replaced all instances of denverpost.com with thedenverpost.org in index.html" 