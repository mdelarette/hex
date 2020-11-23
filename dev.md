install yarn

npm install -g yarn

Documentation on [yarn](https://classic.yarnpkg.com/en/docs/cli/)

yarn deploy

npm install → yarn

npm install --save <name> → yarn add <name>

    <!-- https://www.html5canvastutorials.com/ -->
    <!-- https://www.html5rocks.com/en/tutorials/canvas/performance/ -->
    <!-- https://www.redblobgames.com/grids/hexagons/ -->

    https://thenounproject.com/term/meeple/1269/
    http://professorcloud.com/svg-to-canvas/

## VERSIONNING

use : yarn version --patch | --minor | --major
yarn release-patch

to test :
https://developers.google.com/web/tools/chrome-devtools/remote-debugging?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3

## SECURITY

Regularly lauch : npm audit
Then npm audit fix if needed
Commit with tag "npm audit fix"

## Security

yarn audit

No [yarn audit fix](https://javascriptbit.com/yarn-audit-fix-security-issues/)

    npm i --package-lock-only
    npm audit fix
    rm package-lock.json

yarn outdated

ie
yarn upgrade react [--latest]

Cannot add property noFallthroughCasesInSwitch, object is not extensible
https://github.com/facebook/create-react-app/issues/9429
