PANIC TYCOON
============

[![Front-End Build Status](https://ci.testling.com/Panic-Tycoons/panic-tycoon.png)](https://ci.testling.com/Panic-Tycoons/panic-tycoon)  
[![Back-End Build Status](https://travis-ci.org/Panic-Tycoons/panic-tycoon.png?branch=master)](https://travis-ci.org/Panic-Tycoons/panic-tycoon)

A game based on software engineering for the Trinity College Dublin 4th year CS4098 Programming Group Project module.

## Installation and Running

From root of project:

* Run `npm install` in root directory to fetch dependencies
* Run `npm test` in root directory to run unit tests if desired.
* Run `node ./index.js` in root directory to launch web server.

## Features

* Config Loading
	* Configuration is loaded from a `config.json` file in the application root. All values contained in this file are made available to any application component that imports it using the config loader. Individual flags can be specified (or overriden) on the command line, for example: `node index.js --test=50` would set a config variable named "test" to the value 50, or override the variable "test" if it already existed in `config.json`.
* Clickable Maps
	* A world map is loaded from the jvectormap library. It has selectable regions and offers a list of all the regions which have been selected. It is accessible from `index.html` in the root directory.
	

## Tests

This project uses [travis](http://travis-ci.org) and [testling](http://ci.testling.com) to automate testing and ensure front-end compatibility and positive build-state on the backend.

### Test Coverage

To see the code coverage of the current test suite an external tool, `covert`, can be installed using `npm install -g covert` (may require sudo).

With covert, simply run `covert ./tests/*.js` to see percentage code coverage for the full suite, or specify a specific file or files for narrower results.
