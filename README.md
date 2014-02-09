PANIC TYCOON
============

[![Build Status](https://travis-ci.org/minuteman3/cs4098-game.png?branch=master)](https://travis-ci.org/minuteman3/cs4098-game)

A game based on software engineering for the Trinity College Dublin 4th year CS4098 Programming Group Project module.

## Installation and Running

From root of project:

* Run `npm install` in root directory to fetch dependencies
* Run `npm test` in root directory to run unit tests if desired.
* Run `node ./index.js` in root directory to launch web server.

## Features

* Configuration is loaded from a `config.json` file in the application root. All values contained in this file are made available to any application component that imports it using the config loader. Individual flags can be specified (or overriden) on the command line, for example: `node index.js --test=50` would set a config variable named "test" to the value 50, or override the variable "test" if it already existed in `config.json`.

## Test Coverage

To see the code coverage of the current test suite an external tool, `covert`, can be installed using `npm install -g covert` (may require sudo).

With covert, simply run `covert ./tests/*.js` to see percentage code coverage for the full suite, or specify a specific file or files for narrower results.
