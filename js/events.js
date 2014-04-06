var eventData = require("../config/events.json");
var utils     = require('./utils.js');
var dc        = require('deepcopy');

var events = [];

function setEventAction(num){
  events[events.length-1].mitigation = dc(events[events.length-1].actions[num]);
}

function trackEvent(ev){
	events.push(ev);
}

function doEvent(actionNumber,gamedata){
  setEventAction(actionNumber);

  var ev = events;
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
  if(effects.progress){
      cev.module.setPercentageComplete(effects.progress);
  }
}

module.exports = {
    //events
    trackEvent:trackEvent,
    doEvent:doEvent,
};