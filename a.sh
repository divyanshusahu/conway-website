#!/bin/sh
npm run build --nomaps 
find build -iname "*.map" -type f  |xargs rm -rf {} 
sed -i '' "s#/Users/harshjain/crypto/conway-website##g" build/static/js/*.chunk.js
sed -i '' "s#harshjain##g" build/static/js/*.chunk.js
sed -i '' "s#/Users/harshjain/crypto/conway-website##g" build/static/css/*.chunk.css
sed -i '' "s#harshjain##g" build/static/css/*.chunk.css
