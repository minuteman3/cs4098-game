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

  var moneyEffect = 0;

  if(effects.money){
    gamedata.projectBudget += effects.money;
    if(effects.money<0){
      city.stall();
    }
  }
  if(effects.stall){
    cev.module.stall(effects.stall);
    city.stall();
  }
  if(effects.morale){
    // set city morale to effects.morale
    city.stall();
    city.modifyMorale(effects.morale);
    // setTimeout(function(){
    //   city.setMorale(0-effects.morale);
    // },5000);
  }
  if(effects.progress)
  {
      cev.module.setPercentageComplete(effects.progress);
  }
}

module.exports = {
    //events
    setEventAction: setEventAction,
    getEvents: getEvents,
    trackEvent:trackEvent,
    doEvent:doEvent,
};