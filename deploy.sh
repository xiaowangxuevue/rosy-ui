#!/bin/bash
set -x
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&

git commit -m "update" &&
git branch -M master &&
git remote add origin https://github.com/xiaowangxuevue/rosy-ui-website.git&&
git push -f -u origin master &&
cd -
echo    https://xiaowangxuevue.github.io/rosy-ui-website/