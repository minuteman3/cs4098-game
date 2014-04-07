
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
  var effects = utils.objectadd(cev.effects, cev.actions[actionNumber].effects);
  var city = cev.city;
  var module = cev.module;
  var target = cev.target;


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
      cev.module.stall(effects.stall);
    }
  }

  if(effects.money){
    gamedata.projectBudget += effects.money;
  }

}


module.exports = {
    //events
    setEventAction: setEventAction,
    getEvents: getEvents,
    trackEvent:trackEvent,
    doEvent:doEvent,
};