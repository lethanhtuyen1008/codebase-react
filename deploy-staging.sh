CURRENT_DATETIME="$(date +'%Y%m%d.%H%M')"

git checkout release/staging
git pull
git pull origin develop
git tag -a release/staging/${CURRENT_DATETIME} -m "Deploy staging"
git push --follow-tags