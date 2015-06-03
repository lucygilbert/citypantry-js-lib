citypantry-js-lib
=================

Developing
----------

    git clone (the upstream or your fork)
    npm run install-pre-commit

When you make a change to implementation code, to re-compile your changes and run the tests:

    npm run build-test

When you change test code, to run the tests (without re-compiling the implementation code):

    npm run test

Distributing
------------

Update the version in `package.json`, and run:

    npm publish

Using in another project
------------------------

To install:

    npm install citypantry-js-lib

The installed directory, in `node_modules/citypantry-js-lib`, will contain three main files:

    dist/lib-es5-with-browser-polyfill.js
    dist/lib-es5-without-browser-polyfill.js
    dist/lib-es6.js
