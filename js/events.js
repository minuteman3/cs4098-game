var eventData = require("../config/events.json");
var utils     = require('./utils.js');

var events = [];

function setEventAction(num){
  events[events.length-1].mitigation = events[events.length-1].actions[num];
}

function getEvents(){
  return events;
}

function trackEvent(ev){
	events.push(ev);
}

function doEvent(actionNumber,gamedata){
  setEventAction(actionNumber);

  var ev = getEvents();
  var cev = ev[ev.length-1];
  var effects = utils.objectadd(cev.effects||{}, cev.actions[actionNumber].effects||{});
  var city = cev.city;
  var module = cev.module;
  var target = cev.target;
  effects = effects || {};

  if(actionNumber > cev.actions.length)
    return false;

  if(target === "city"){
    if(effects.stall){
      city.stall(effects.stall);
    }
    if(effects.morale){
      city.modifyMorale(effects.morale);
    }
  }else if(target === "module"){
    if(effects.stall){
      module.stall(effects.stall);
    }
    if(effects.progress){
      module.setPercentComplete(effects.progress);
    }
  }else if(target === "cityModule"){
    if(effects.stall){
      module.stall(effects.stall);
      city.stall(effects.stall);
    }
  }else if (target === "intervention"){
    if(effects.stall){
    // "morale": 1,
      Object.keys(gamedata.citiesState).forEach(function(cname){
        var c = gamedata.citiesState[cname];
        c.stall(effects.stall);
      });
    }
    if(effects.morale){
    // "morale": -20,
      Object.keys(gamedata.citiesState).forEach(function(cname){
        var c = gamedata.citiesState[cname];
        c.modifyMorale(effects.morale);
      });
    }
    if(effects.distance){
    // "distance": -20,
      Object.keys(gamedata.citiesState).forEach(function(cname){
        var c = gamedata.citiesState[cname];
        c.geoDistance = c.geoDistance * (100+effects.distance)/100;
      });
    }
    if(effects.culture){
    // "culture": -20,
      Object.keys(gamedata.citiesState).forEach(function(cname){
        var c = gamedata.citiesState[cname];
        c.culturalDistance = c.culturalDistance * (100+ effects.culture)/100;
      });
    }
  }else if (target === "inquiry"){
    
  }

  if(effects.money){
    gamedata.projectBudget += effects.money;
  }
  return true;
}

module.exports = {
    //events
    setEventAction: setEventAction,
    getEvents: getEvents,
    trackEvent:trackEvent,
    doEvent:doEvent,
};