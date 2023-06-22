#!/bin/bash -e
HUGO_ENV=production hugo --minify
pushd .
cd public
rm -rf .git
git init
git checkout -b gh-pages
git add .
git commit -m "update personal page"
git remote add origin git@github.com:fuyu0425/personal_page.git
git push --force origin gh-pages
popd
