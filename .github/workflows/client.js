# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: ReactClient CI

on:
  push:
    branches: [ dev ]

jobs:
  build:

    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [14.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm --prefix src/client install
    - run: npm --prefix src/client prod:build --if-present
    - run: npm --prefix src/client test:coverage
    - run: npm --prefic src/client prod:start --if-present
