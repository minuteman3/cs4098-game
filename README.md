cs4098-game
===========

[![Build Status](https://travis-ci.org/minuteman3/cs4098-game.png?branch=master)](https://travis-ci.org/minuteman3/cs4098-game)

A game based on software engineering for the Trinity College Dublin 4th year CS4098 Programming Group Project module.

## Features

* ### Config Loading
    Configuration is loaded from a `config.json` file in the application root. All values contained in this file are made available to any application component that imports it using the config loader. Individual flags can be specified (or overriden) on the command line, for example: `node index.js --test=50` would set a config variable named "test" to the value 50, or override the variable "test" if it already existed in `config.json`.
