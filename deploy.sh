#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run --prefix docs build

# navigate into the build output directory
# cd docs/src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git commit -m 'deploy site'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Plant-Dudes/plantaverse.git master:gh-pages

# cd -