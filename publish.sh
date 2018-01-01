echo '=== Removing /.cache'
rm -rf /.cache

echo '=== Removing /public'
rm -rf /public

echo '=== Switching .gitignore'
rm .gitignore
mv .gitignore.prod .gitignore

echo '=== Building /public'
npm run deploy

read -p '*** Enter the commit message: ', commitMsg
echo Your commit message is: $commitMsg

git add .
git commit -m $commitMsg
git push gh-pages origin --force
