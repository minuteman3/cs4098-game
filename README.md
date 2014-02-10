cs4098-game
===========

[![Build Status](https://travis-ci.org/minuteman3/cs4098-game.png?branch=master)](https://travis-ci.org/minuteman3/cs4098-game)

A game based on software engineering for the Trinity College Dublin 4th year CS4098 Programming Group Project module.

## Installation and Running

From root of project:

* Run `npm install` in root directory to fetch dependencies
* Run `npm test` in root directory to run unit tests if desired.
* Run `node ./index.js` in root directory to launch web server.

## Features

* ### Config Loading
    Configuration is loaded from a `config.json` file in the application root. All values contained in this file are made available to any application component that imports it using the config loader. Individual flags can be specified (or overriden) on the command line, for example: `node index.js --test=50` would set a config variable named "test" to the value 50, or override the variable "test" if it already existed in `config.json`.
* Event Generator
	* Generates events based on fuzzy logic. Each variable is divided into a list of options so for example the money variable is divided into small,medium,large so when money is $10,000 it will be 60% small and 30% medium and 0% large. We then use these rules to determine which event should fire. So a rule then specifies which option(s) it chooses for each variable so eg when money=medium then fire rule 2. We then generate a weight for this rule based on which option is applied the lest. We use this value to make a weighted list of all possible rules we can fire. We then execute one of the rules based on a random number. 
## Test Coverage

To see the code coverage of the current test suite an external tool, `covert`, can be installed using `npm install -g covert` (may require sudo).

With covert, simply run `covert ./tests/*.js` to see percentage code coverage for the full suite, or specify a specific file or files for narrower results.
