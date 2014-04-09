var $            = require('jquery');
var cities       = require('./../config/cities.json');
var City         = require('./city.js');
var client       = require('./../config/client-config.json');
var deepcopy     = require('deepcopy');
var eventData    = require("../config/events.json");
var events       = require("./events.js");
var interventions= require("../config/interventions.json");
var maps         = require('./maps.js');
var modal        = require('./modal.js');
var Module       = require('./Module.js');
var ProcessSim   = require('./ProcessSimulator.js');
var proj         = require('./../config/projects.json');
var sidebar      = require('./sidebar.js');
var teamPicker   = require('./teamPicker.js');
var utils        = require('./utils.js');

var projects = proj.projects;
var selectedProject;

var isWaterFall = false;

var gameData = {
    homeCity:"",
    weeksTilDueDate:0,
    projectBudget:0,
    totalPayRoll:0,
    citiesState: {}
};

var modules = [];
var moduleProgressOverTime = [[]];
var currentWeek = 0;

var GameStates = {
      START:0,
      SELECT_HOME:1,
      SELECT_TEAMS:2,
      PROGRESS:3,
};
var curGameState = GameStates.START;

function onlabelShow(e,label,code){
  label.css('visibility','visible');
    
  var hoverCity  = cities[code];
  if(curGameState === GameStates.SELECT_TEAMS){
    label.html(
      '<strong>'+              hoverCity.name         +'</strong><br/>'+
      'Morale: '+          hoverCity.morale       +'%<br/>'+
      'Productivity: '+    hoverCity.productivity +'%<br/>'+
      'Cost per week: $'+ hoverCity.costPerWeek +'<br/>'
    );
  }else if(curGameState === GameStates.PROGRESS){
    var mods = [];
    modules.forEach(function(m){
      Object.keys(m.developersPerCity).forEach(function(mc){
        mods.push(mc);
      });
    });
    // only show tooltip if hoverCity in any of modules.developersPerCity
    if(utils.contains(mods, hoverCity.name)){
      label.html(
        "Make an inquiry<br />into "+hoverCity.name
      );
    }else{
      label.css('visibility','hidden');
    }
  }else if(curGameState === GameStates.SELECT_HOME){
    label.html(
      'Select <strong>'+              hoverCity.name         +'</strong><br/>'+
      'as your Home City '
    );
  }

  maps.fixOverLap(code,label);
}



function inquire(type,cityName){
  modal.hidemodal();
  if(curGameState === GameStates.PROGRESS){
    var city = gameData.citiesState[cityName];
      modal.dialog(city.inquire(type));
  }
}


function selectCity(e,  code,  isSelected,  selectedMarkers) {
  if(curGameState === GameStates.PROGRESS){
    var mods = [];
    modules.forEach(function(m){
      Object.keys(m.developersPerCity).forEach(function(mc){
        mods.push(mc);
      });
    });
    // only show tooltip if hoverCity in any of modules.developersPerCity
    if(utils.contains(mods, cities[code].name)){
      var hoverCity  = cities[code];
        
        ProcessSim.pause();
        
        modal.showInquire(hoverCity.name,[
          "Send \"are you on schedule?\" email",
          "Send \"please report status of modules\" email",
          "Send \"please list completed tasks\" email",
          "Hold video conference",
          "Make site visit",
          ]);
 
    }
    // insert inquiry interface here

  } else if(curGameState === GameStates.SELECT_TEAMS){
    teamPicker.addExtraDeveloperToCity(code,gameData);
  } else if(curGameState === GameStates.SELECT_HOME){
    sidebar.setListAllocation(
      selectedProject.modules.map(function(a){
        var obj = {};
        obj.name = a.name;
        obj.cost = (100*a.cost/selectedProject.cost);
        obj.estimatedCost = a.cost;
        obj.allocatedCost = 0;
        return obj;
      }),
    true);
    sidebar.setHomeCity(cities[code].name);
    gameData.homeCity = cities[code];
    maps.makeHomeCity(code);
    sidebar.setListItemActive(0);
    curGameState = GameStates.SELECT_TEAMS;
  }
}

function startSimulation(){
  if( curGameState === GameStates.SELECT_TEAMS){
    var curModuleIndex = sidebar.getActiveListItem();
    var curModuleName = selectedProject.modules[curModuleIndex].name;
    teamPicker.selectModule(curModuleName,curModuleIndex);

    if(!teamPicker.allModulesHaveTeams()){
      modal.dialog("There needs to be at least one team for every module");
      return;
    }
    curGameState = GameStates.PROGRESS;
    
    sidebar.setListAllocation([],false);
    sidebar.showSelectTeams(false);
    sidebar.setTitle(selectedProject.name);

    sidebar.showProgressState(true);
    maps.runState();
    startLoop();

    sidebar.setButtonText("Interventions");
  } else if (curGameState === GameStates.PROGRESS){
    var i = deepcopy(interventions);
    i.city = {name:""};
    i.module = {name:""};
    showEvent(i);
  }
}

function selectProject(){
  $('#startScreen').hide();

  var html = "<h1> Select A Project</h1>";
  html += modal.makeChoices(projects,
    '<div id="project-budget" class="project"></div>'+
    '<div id="project-duration" class="project"></div>'+
    '<div id="project-revenue" class="project"></div>'+
    '<div id="project-description" class="project"></div>',
    'btn-projects',
  true);

  modal.showmodal(html);
}

function projectdescription(a){
  $('#project-budget').html("Initial Budget: € "+utils.commafy(projects[a].budget));
  $('#project-revenue').html("Predicted Revenue: € "+utils.commafy(projects[a].revenue.amount*projects[a].revenue.months));
  $('#project-duration').html("Due in: "+projects[a].duration+ " weeks");
  $('#project-description').html(projects[a].dialog);
}

function selectType(a){
  modal.hidemodal();
  a = a || 0;
  modal.makeTypeChoice(a,["agile","waterfall"]);    
}

function startGame(a,type){
  a = a || 0;
  modal.hidemodal();

  isWaterFall = type === "waterfall";
  selectedProject = projects[a];
  selectedProject.cost = utils.calculateCost(selectedProject);

  $('#btn-options').show();
  $('#map').show();
  $('#map').empty();
  $('#jvectormap-label').empty();

  maps.buildmap();

  curGameState = GameStates.SELECT_HOME;

  teamPicker.init(gameData,cities,selectedProject.modules,selectedProject.budget);
  sidebar.show();
  sidebar.setButtonText("Start");
  sidebar.setBudget(selectedProject.budget);
  sidebar.setDueDate(selectedProject.duration);
  sidebar.setListAllocation(
    selectedProject.modules.map(function(a){
      var obj = {};
      obj.name = a.name;
      obj.estimatedCost = a.cost;
      obj.allocatedCost = 0;
      return obj;
    }),
  false);

  if( localStorage.getItem("firstTimeModals") === null ){
    modal.dialog(client.information+"<br/>Access this Information at any time from the Options Menu."); //removed information from startup
    localStorage.setItem("firstTimeModals",1);
  }
  moduleProgressOverTime = selectedProject.modules.map(function(){return [0];});
  moduleProgressOverTime.push([0]);
}

function showEvent(ev){
  if(localStorage.getItem("audioEnabled")){
    $('#event').get(0).load();
    $('#event').get(0).play();
    $('#eventmusic').get(0).load();
    $('#eventmusic').get(0).play();
    $('#music').get(0).pause();
  }
  ProcessSim.pause();
  events.trackEvent(ev);
  modal.showEvent(ev,currentWeek);
}

function startLoop(){
  gameData.projectBudget = Number(selectedProject.budget);

  gameData.weeksTilDueDate = selectedProject.duration;

  sidebar.setCash(gameData.projectBudget);
  sidebar.setWeeks(gameData.weeksTilDueDate);
  sidebar.setProgress(0);


  modules = selectedProject.modules.map(function(i){
      return new Module( 
        teamPicker.getDevelopers(i.name), i.cost, i.name
      );
  });
 
  gameData.citiesState = {};
  cities.forEach(function(c){
      var cityMods = modules.filter(function(module){return module.hasCity(c.name);});
      gameData.citiesState[c.name] = new City(c,gameData.homeCity,cityMods);
  });

  var eventRate = selectedProject.eventRate || client.eventRate;

  sidebar.setListProgress(modules,true);

  ProcessSim.start(
    modules,
    gameData.citiesState,
    simulationUpdate,
    simulationComplete,
    showEvent,
    eventData,
    eventRate,
    isWaterFall
  );
}

function simulationUpdate(modules,citiesState){
  var states = [];

  cities.forEach(function(c){
      if(utils.contains(Object.keys(citiesState),c.name)){
        states.push(citiesState[c.name].status());
      } else {
        states.push(0);
      }
  });
  maps.runState(states);

  var totalCost = 0;
  var percentComplete = 0;

  currentWeek += 1;
  moduleProgressOverTime[0].push(currentWeek);
  var  i =1;
 //var sidebarmodules = [];
  modules.forEach(function(module, index) {
      totalCost += module.getCost(citiesState);
      modulesProgree = module.getPercentComplete();
      // update the sidebar
      if(moduleProgressOverTime[i][moduleProgressOverTime[i].length -1] < 100)
        moduleProgressOverTime[i].push(modulesProgree);
      i += 1;
     // sidebarmodules.push(modu);

      percentComplete += modulesProgree;
  }); 
  gameData.weeksTilDueDate--;
  
  gameData.projectBudget -= totalCost;


  sidebar.setCash(gameData.projectBudget);
  sidebar.setWeeks(gameData.weeksTilDueDate);
  sidebar.setProgress(percentComplete/modules.length);
  
}

function simulationComplete (modules) {
  var done = true;
  modules.forEach(function(module) {
      done = done && module.done();
  });
  if(done){// game over 
    endGame();
  } else {
    console.log("ERR: modules are not finished");
  }
}

function endGame(){
  ProcessSim.stop();
  modal.endGame(
    currentWeek, 
    gameData.projectBudget, 
    selectedProject, 
    moduleProgressOverTime);
  if(localStorage.getItem("audioEnabled")){
    $('#music-end').get(0).load();
    $('#music-end').get(0).play();
  }
}

function initialiseGame(){
  sidebar.init(function(name,index){
    teamPicker.selectModule(name,index);
  },
  teamPicker.addExtraDeveloperToCity,
  teamPicker.deductDeverloperFromCity
  );
  sidebar.hide();

  modal.hidemodal();
  maps.map=null;
  modules = [];
  moduleProgressOverTime = [[]];
  currentWeek = 0;

  ProcessSim.stop();

  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  gameData.totalPayRoll  = 0;

  $('#startScreen').show();
  if(localStorage.getItem("audioEnabled")){
    $('#music').get(0).load();
    $('#music').get(0).play();
  }
}

function pause(){
  modal.pause();
  if(curGameState === GameStates.PROGRESS){
    ProcessSim.pause();
  }
  $('#btn-options').show();
}

$( document ).ready( function() {
  var $body = $('body'); //Cache this for performance
  
  var setBodyScale = function() {
    var scaleFactor = 0.35,
      scaleSource = $body.width(),
      minScale = 30;
    var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:
    if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums
    $('body').css('font-size', fontSize + '%');
  };
  $(window).resize(function(){
    setBodyScale();
    pt.resizemap(95);
  });
  document.onkeydown = function (evt) {
    if (evt.keyCode === 27) {
      // this is the escape key [esc]
      pt.pause();
      evt.preventDefault();
    }
    else if(evt.keyCode == 38){//up
      if(curGameState == GameStates.SELECT_TEAMS){
        var index = sidebar.getActiveListItem() - 1; 
        if(index >= 0){
          var moduleName = selectedProject.modules[index].name;
          teamPicker.selectModule(moduleName,index);
        }
      }
    }
    else if(evt.keyCode == 40){//down
      if(curGameState == GameStates.SELECT_TEAMS){
        var index2 = sidebar.getActiveListItem() + 1; 
        if(index2 < selectedProject.modules.length ){
          var moduleName2 = selectedProject.modules[index2].name;
          teamPicker.selectModule(moduleName2,index2);
        }
      }
    }
  };

  //Fire it when the page first loads:
  setBodyScale();
  initAudio();

  $('#map').bind('markerSelected.jvectormap', selectCity);
  $('#map').bind('markerLabelShow.jvectormap', onlabelShow);

  ProcessSim.stop();
  interventions.actions.forEach(function(a){
    var count = 0;
    var max = 2;
    if (a.effects){
      var m = a.message + " (";
      if(a.effects.stall && count < max){
        count++;
        m = m + " Stalls Production for "+ a.effects.stall+" Weeks,";
      }
      if(a.effects.morale && count < max){
        count++;
        var mor = a.effects.morale > 0 ? " Increases":" Decreases";
        m = m + mor + " Morale,";
      }
      if(a.effects.distance && count < max){
        count++;
        var dist = a.effects.distance > 0 ? " Increases":" Decreases";
        m = m + dist + " Geographic Distance,";
      }
      if(a.effects.culture && count < max){
        count++;
        var cult = a.effects.culture > 0 ? " Increases":" Decreases";
        m = m + cult + " Cultural Distance,";
      }
      if(a.effects.money){
        m = m + " $"+ utils.commafy(a.effects.money*-1) +",";
      }
      m = m.slice(0,m.length-1);//remove last comma
      m = m + " )";
      a.message = m;
    }
  });
});

function doEvent(actionNum){
  if(localStorage.getItem("audioEnabled")){
    $('#music').get(0).play();
    $('#eventmusic').get(0).pause();
  }
  if(events.doEvent(actionNum,gameData)){
    unpause();
  }
}

function creds(){
  var c = "<p>"+
  "Music by Matthew Pablo<br>www.matthewpablo.com"+
  "<br><br>Applause by Blender Foundation<br>apricot.blender.org"+
  "<br><br>Event Music by VWolfDog<br>opengameart.org/users/vwolfdog"+
  "</p>";
  modal.dialog(c);
}

function toggleAudio(){
  if(localStorage.getItem("audioEnabled")){
    $('#music').get(0).pause();
    $('#audio').removeClass("fa-volume-up").addClass("fa-volume-off");
    localStorage.removeItem("audioEnabled");
  } else {
    $('#music').get(0).load();
    $('#music').get(0).play();
    $('#audio').removeClass("fa-volume-off").addClass("fa-volume-up");
    localStorage.setItem("audioEnabled",1);
  }
}

function initAudio(){
  if(localStorage.getItem("audioEnabled")){
    $('#music').get(0).play();
    $('#audio').removeClass("fa-volume-off").addClass("fa-volume-up");
  } else {
    $('#audio').removeClass("fa-volume-up").addClass("fa-volume-off");
    localStorage.removeItem("audioEnabled");
  }
}

function unpause(){
  if(localStorage.getItem("audioEnabled")){
    $('#music').get(0).play();
    $('#eventmusic').get(0).pause();
  }
  ProcessSim.unpause();
  modal.hidemodal();
}

module.exports = {
  initialiseGame: initialiseGame,            // first thing that happens. shows start screen
  selectProject: selectProject,              // select which project to do
  startGame: startGame,                      // goes into "game mode", after placing teams
  endGame: endGame,                          // displays end-game stats
  selectType:selectType,
  startSimulation: startSimulation,
  projectdescription: projectdescription,
  inquire:inquire,
  // Modal
  pause: pause,                              // toggles the pause menu
  evt: doEvent,
  //Maps
  resizemap: maps.resizemap,
  unpause: unpause,
  //Credits
  creds:creds,
  //Audio
  toggleAudio: toggleAudio,
  //Charts
  generateCharts: modal.generateCharts,
  addChartContainer: modal.addChartContainer
};
