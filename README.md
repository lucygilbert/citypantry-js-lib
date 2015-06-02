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
