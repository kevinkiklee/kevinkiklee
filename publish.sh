read -p '*** Enter the commit message: ' commitMsg
echo Your commit message is: $commitMsg

echo '=== Removing /.cache'
rm -rf /.cache

echo '=== Removing /public'
rm -rf /public

# echo '=== Switching .gitignore'
# rm .gitignore
# cp .gitignore.prod .gitignore

echo '=== Building /public'
npm run deploy

git add .
echo $commitMsg | git commit -F -
git push origin gh-pages --force

echo Successfully published: $commitMsg
