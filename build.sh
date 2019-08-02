#!/usr/bin/env bash
ng build --prod --aot --build-optimizer
mv dist/assets/manifest.webapp dist/
# cp -r dist/* /opt/dhis/config/apps/wisnpoa/
cd dist/hrhis-user-app/
#Compress the file
echo "Compressing the file..."
zip -r -D users.zip .
# echo "Installing the app into wisnpoa.interactiveapps.org/dev..."
# curl -X POST -u admin:district -F file=@wisnpoa.zip https://wisnpoa.interactiveapps.org/dev/api/apps
# echo "Installing the app into wisnpoa.interactiveapps.org/test..."
# curl -X POST -u admin:district -F file=@wisnpoa.zip https://wisnpoa.interactiveapps.org/test/api/apps
# echo "Installing the app into wisnpoa.interactiveapps.org..."
# curl -X POST -u admin:district -F file=@wisnpoa.zip https://wisnpoa.interactiveapps.org/api/apps
echo "Successful installed the app"

