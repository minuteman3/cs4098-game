var config = require('./../config/client-config.json');
var Module = require('./Module.js');
var EventGenerator = require('./EventGenerator/EventGenerator.js');
var utils = require("./utils.js");

var modules = null;
var cities = null;
var doneFunc = null;
var updateFunc = null;
var intervalID = null;
var gen = null;
var eventFunc = null;
var getRandomModule = null;
var paused = false;

function timerLoop(){
    var done = true;

    modules.forEach(function(module) {
        
        module.advance(cities);
        done = done && module.done();
    });
    updateFunc(modules,cities);

    var module = getRandomModule();
    var city = utils.randomCity(module);
    
    var ev = gen.getEvent([city.morale, city.costPerDeveloper, module.getPercentComplete()]);
    if(ev){
        ev.module = module;
        ev.city = city;
        eventFunc(ev);
    }

    if(done){
        if(doneFunc){
            doneFunc(modules);
        }
        stop();
    }
}

function start(_modules,_cities, _updateFunc, _doneFunc, _eventFunc, _getRandomModule, events, eventRate){
    modules = _modules;
    cities = _cities;
    updateFunc = _updateFunc;
    doneFunc = _doneFunc;
    eventFunc = _eventFunc;
    getRandomModule = _getRandomModule;
    intervalID = setInterval(timerLoop, config.timerDuration);
    gen = new EventGenerator(events,eventRate);
    return intervalID;
}

function getCity(name){
    return cities[name];
}

function setCity(name,city){
    cities[name] = city;
}

function unpause(){
    if (paused && modules && cities && updateFunc && doneFunc) {
        paused = false;
        intervalID = setInterval(timerLoop, config.timerDuration);
    }
}

function pause(){
    if(paused){
        unpause();
    } else {
        paused = true;
        clearInterval(intervalID);
    }
}

function stop(){
    clearInterval(intervalID);
    modules = null;
    cities = null;
    doneFunc = null;
    updateFunc = null;
    intervalID = null;
    paused = false;
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop,
    getCity: getCity,
    setCity: setCity,
    unpause:unpause,
};
