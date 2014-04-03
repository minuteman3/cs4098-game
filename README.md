PANIC TYCOON
============

[![Front-End Build Status](https://ci.testling.com/Panic-Tycoons/panic-tycoon.png)](https://ci.testling.com/Panic-Tycoons/panic-tycoon)  
[![Back-End Build Status](https://travis-ci.org/Panic-Tycoons/panic-tycoon.png?branch=master)](https://travis-ci.org/Panic-Tycoons/panic-tycoon)  

A game based on software engineering for the Trinity College Dublin 4th year CS4098 Programming Group Project module.

## Prerequisites 

* [node.js 0.10+](http://nodejs.org/download/) must be installed 
* A browser which shows green in the testling image above

### Installing Node.js 0.10

* Clone the latest version of the node version manager (`nvm`) from https://github.com/creationix/nvm using:

	```
	git clone https://github.com/creationix/nvm ~/.nvm
	```

* Source the nvm.sh script using

	```
	source ~/.nvm/nvm.sh
	```

* Optionally: Add `source ~/.nvm/nvm.sh` to the file `~/.bash_profile` to repeat this step when creating new shells (otherwise this will require a manual intervention)

* Switch to node 0.10 using `nvm install 0.10`

## Installation and Running

From root of project:

* Run `npm install` in root directory to fetch dependencies
* Run `npm test` in root directory to run unit tests if desired.
* Run `npm start` in root directory to launch web server.

### Installation Problems

If you experience installation problems, a goof plan is to remove the `node_modules` directory and do `npm install` again.


## Features

* Config Loading
	* Configuration is loaded from a `config.json` file in the application root. All values contained in this file are made available to any application component that imports it using the config loader. Individual flags can be specified (or overriden) on the command line, for example: `node index.js --test=50` would set a config variable named "test" to the value 50, or override the variable "test" if it already existed in `config.json`.
* Clickable Maps
	* A world map is loaded from the jvectormap library. It has selectable regions and offers a list of all the regions which have been selected. It is accessible from `index.html` in the root directory.
	* Each zone has a status display, which details the status as a percentage. It is viewable by hovering over an area.
* Inquiry Interface
	* Click on a City to get a report on how well it is doing.
* End of Game Report
	* Shows Graphs of how you have progressed throughout the game.
	* Compares data from beginning to end of project life-cycle.
* Process Simulator 
	* Simulates advancement of modules in individual chunks, scaled by number of developers.
* Event Generator
	* Generates events based on fuzzy logic. Each variable is divided into a list of options so for example the money variable is divided into small,medium,large so when money is $10,000 it will be 60% small and 30% medium and 0% large. We then use rules to determine which event should fire. So a rule then specifies which option(s) it chooses for each variable so eg when money=medium then fire rule 2. We then generate a weight for this rule based on which option is applied the lest. We use this value to make a weighted list of all possible rules we can fire. We then execute one of the rules based on a random number. 
	* Loads events from JSON files.


## Config File Specifications

*Note: All config files are available in the `config` folder.   
All JSON key's should be in `"lowerCamelCase"`*

### cities.json

Specifies the cities that can have developers allocated to them during the simulation.

* Object must contain a field "cities", which is a list of objects of the form

```
	{
		"coords": [Number, Number],
		"name": String,
		"morale": Number,
		"productivity": Number,
		"costPerWeek": Number
	}
```

* `coords` is a latitude/longitude pair that describes the position of the city on the in game map.
* `name` is the name of the city to display on tooltips, etc.
* `productivity` represents the number of points of progress a developer at the given site will
  accomplish per in game tick.
* `costPerWeek` represents the quantity of cash that will be deducted per in game tick per
  developer at this site.
* `morale` is not yet used but will be displayed on the city tooltip when choosing to allocate
  developers to sites.

### client-config.json

Specifies constants that control client behaviour during the simulation.

```
{
	"information": String,
	"eventRate": Number,
    "timerDuration": Number
    "moraleFuzzification":[
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    ],
    "completionFuzzification":[
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    ],
    "payFuzzification":[
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    	{
    		"option":string,
    		"values":[Number,Number,Number]
    	},
    ],

}
```

* `information`: Instructions shown on first launch in a browser. Accessible in pause menu.
* `eventRate`: The percentage rate of fire for events.
* `timerDuration`: The amount of time in milliseconds between updates in the game.
 `moraleFuzzification`: The fuzzyfied values to be used in the event generator. Here you can defiine
 every option you want to use in the conditions variable in events.json. 
* 'option' * is just a name to use to identify which values you want to use in events.json
* 'values' * is the triangular membership value you want to use for that option. So you first specifiy what the cut off point for the lowest possible value to be considered that option, the second value specifies what number would be considered '100%' for that option and then thrid option is the highest possible value you could have before you would not consider it to be that option. It's easier to reason about if you consider an options like low, medium and high.

### events.json

Specifies events which can be fired depending on `eventRate` and fuzzy logic engine.

* Array of event objects of the form:

```
[
	{
		"conditions": {
			"morale": [
				String,
				String
			],
			"pay": [
				String
			]
		},
		"message": String,
		"effects": {
			"money": Number,
			"stall": Number,
			"morale": Number,
			"productivity": Number
		},
		"actions": [
			{
				"message": String,
				"effects": {
					"money": Number,
					"stall": Number,
					"morale": Number,
					"productivity": Number,
				}
			}
		]
	}
]
```

* `conditions`: A list of conditions for the fuzzy logic engine, which must be satisfied in order for the event to fire. Can be empty {}.
* *(optional)* `morale`: The fuzzy logic parameter conditions for morale
* *(optional)* `pay`: The fuzzy logic parameter conditions for pay
* `message`: The text describing the event which occurred.
* `effects`: An object of repercussions common to all actions. Can currently be one of {money, stall,morale,productivity}. Can be empty {}.
* *(optional)* `money`: A change in overall bank balance.
* *(optional)* `stall`: A halt in production for Number weeks.
* *(optional)* `morale`: A change in morale.
* *(optional)* `productivity`: A change in productivity.
* `actions`: An array of resolutions each with a message and effects.
* `message`: The text describing the resolution.
* `effects`: An object of repercussions for this action. Can currently be one of {money, stall,morale,productivity}. Can be empty {}.



### projects.json

Specifies projects that can be chosen including modules, costs, etc.

* Object must contain a field "projects", which is a list of objects of the form:

```
{
	"name": String,
	"budget": Number,
	"eventRate`: Number,
	"duration": Number,
	"revenue": {
		"months": Number,
		"amount": Number
	},
	"modules": [
		{
			"name": String,
			"cost": Number
		}, ...
	],
	"dialog": String
}
```

* `name`: Project name displayed on the project selection dialog
* `budget`: The amount of money available in the project
* `eventRate`: The percentage rate of fire for events. *Overrides default*
* `duration`: Time until project is due
* `revenue`: Named pair of
	* `months`: The number of months of revenue added to the end game score of a project completed on time
	* `amount`: The amount of revenue per month
* `modules`: A list of named pairs of
	* `name`: The module name to display on in game dialogs
	* `cost`: The "productivity cost" required to complete the module
* `dialog`: The text to display on the project selection screen when viewing this project

### server-config.json

Specifies constants that control server behavior.

* `port`: The port to listen for incoming connections on


## Tests

This project uses [travis](http://travis-ci.org) and [testling](http://ci.testling.com) to automate testing and ensure front-end compatibility and positive build-state on the backend.

To run manual tests run `npm test` from the project root directory.

To run maunal front-end specific tests, an external tool [`testling`](http://ci.testling.com) can be installed using `npm install -g testling` (may require sudo). The testling tests can be run as follows:
* `testling -u` in the project's root directory. 
* It will give out a localhost URL.
	* copy the url and load it in a webpage using any browser
* Back in the console the tests will be run.

### Test Coverage

To see the code coverage of the current test suite an external tool, `covert`, can be installed using `npm install -g covert` (may require sudo).

With covert, simply run `covert ./tests/*.js` to see percentage code coverage for the full suite, or specify a specific file or files for narrower results.
