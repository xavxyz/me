cd elm
elm-app build
cd ..
git commit -am "build & deploy 🚀"
git checkout -B gh-pages
git add -f elm/dist
git commit -am "⚗"
git filter-branch -f --prune-empty --subdirectory-filter elm/dist
git push -f origin gh-pages
git checkout -