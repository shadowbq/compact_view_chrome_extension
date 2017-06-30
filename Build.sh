#!/bin/bash
EXT_VER="`jq -r '.["version"]' ./extension/manifest.json`"
git tag -a $EXT_VER -m 'building release $EXT_VER'
git push origin $EXT_VER
zip  ./pkg/extension.$EXT_VER.zip -o -r ./extension
echo "proceed to https://chrome.google.com/webstore/developer/edit/npdfmcdicjcimlknokcglcobjbckkmkh"
echo "upload updated package pkg/extension.$EXT_VER.zip"
echo "click: publish changes"
