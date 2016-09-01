git commit -am "deploy 🚀"
git checkout -B gh-pages
git add -f build
git commit -am "🛠"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -