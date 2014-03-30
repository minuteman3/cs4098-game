var $          = require('jquery');
var cities     = require('./../config/cities.json');
var maps       = require('./maps.js');
var modal      = require('./modal.js');
var Module     = require('./Module.js');
var City       = require('./city.js');
var ProcessSim = require('./ProcessSimulator.js');
var proj       = require('./../config/projects.json');
var client     = require('./../config/client-config.json');
var sidebar    = require('./sidebar.js');
var utils      = require('./utils.js');
var events     = require("../config/events.json");

var projects = proj.projects;
var selectedProject;

var teamsSelected = {};
var selectedTeams = {};


var weeksTilDueDate = 0;
var projectBudget = 0;
var totalPayRoll = 0;


var modules = [];
var moduleProgressOverTime = [[]];
var currentWeek = 0;

var GameStates = {
      START:0,
      SELECT_TEAMS:1,
      PROGRESS:2,
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
    // fixoverlap code is broken
    label.html(
      "You can receive an indepth <br/> report on the progress of <br/> this team for $500"
    );
  }
  maps.fixOverLap(code,label);
}



function selectCity(e,  code,  isSelected,  selectedMarkers) {
  if(curGameState === GameStates.PROGRESS){
    ProcessSim.pause();
    modal.dialog("This team is doing very well");
    sidebar.setCash(projectBudget);
    projectBudget -= 500;
  } else {
    //update general information
    teamsSelected[code] = (teamsSelected[code] || 0)+1;
    totalPayRoll += cities[code].costPerWeek;

    sidebar.setPayroll(totalPayRoll);
    sidebar.setBudgetedWeeks(selectedProject.budget/totalPayRoll);

    // update information about this module
    sidebar.setPayrollforModule(calculatePayrollforMod(teamsSelected));
    sidebar.setLocations(teamsSelected,code);

  }
}


function selectModule(cityName,nextIndex) {
 
  var index = sidebar.getActiveListItem();


  if(Object.keys(teamsSelected).length !== 0){
    selectedTeams[selectedProject.modules[index].name] = teamsSelected;
  }

  teamsSelected = selectedTeams[cityName]?selectedTeams[cityName]:{};
  var payroll = calculatePayrollforMod(teamsSelected);
  
  sidebar.setPayrollforModule(payroll);
  sidebar.setLocations(teamsSelected);
  sidebar.setListItemActive( nextIndex);

}

function startSimulation(){
  var curModuleIndex = sidebar.getActiveListItem();
  var curModuleName = selectedProject.modules[curModuleIndex].name;
  selectModule(curModuleName,curModuleIndex);

  if(Object.keys(selectedTeams).length !== selectedProject.modules.length){
    modal.dialog("There needs to be at least one team for every module");
    return;
  }


  //console.log(selectedTeams);
  curGameState = GameStates.PROGRESS;
  
  sidebar.setList([],[]);
  sidebar.showSelectTeams(false);
  sidebar.setTitle("Game is Running");

  sidebar.showProgressState(true);
  maps.runState();
  startLoop();
}

function calculatePayrollforMod(teams){
  payroll = 0;
  for(var key in teams){
    payroll += cities[key].costPerWeek *  teams[key];
  }
  return payroll;
}

function selectProject(){
  $('#startScreen').hide();

  var html = "<h1> Select A Project</h1>";
  html += modal.makeChoices(projects,
    '<div id="project-budget" class="project"></div>'+
    '<div id="project-duration" class="project"></div>'+
    '<div id="project-revenue" class="project"></div>'+
    '<div id="project-description" class="project"></div>',
    'btn-projects',true);

  modal.showmodal(html);
}

function projectdescription(a){
  $('#project-budget').html("Initial Budget: € "+utils.commafy(projects[a].budget));
  $('#project-revenue').html("Predicted Revenue: € "+utils.commafy(projects[a].revenue.amount*projects[a].revenue.months));
  $('#project-duration').html("Due in: "+projects[a].duration+ " weeks");
  $('#project-description').html(projects[a].dialog);
}

function startGame(a){
  a = a || 0;
  selectedProject = projects[a];
  selectedProject.cost = utils.calculateCost(selectedProject);
  modal.hidemodal();

  $('#btn-options').show();
  $('#map').show();
  $('#map').empty();
  $('#jvectormap-label').empty();

  maps.buildmap();

  curGameState = GameStates.SELECT_TEAMS;

  sidebar.show();
  sidebar.setButtonText("Start");
  sidebar.setBudget(selectedProject.budget);
  sidebar.setDueDate(selectedProject.duration);
  sidebar.setList(
    selectedProject.modules.map(function(a){
      var obj = {};
      obj.name = a.name;
      obj.cost = (100*a.cost/selectedProject.cost);
      return obj;
    }));
  sidebar.setListItemActive(0);
  if( localStorage.getItem("firstTimeModals") === null ){
    modal.dialog(client.information+"<br/>Access this Information at any time from the Options Menu."); //removed information from startup
    localStorage.setItem("firstTimeModals",1);
  }
  moduleProgressOverTime = selectedProject.modules.map(function(){return [0];});
  moduleProgressOverTime.push([0]);
}

function showEvent(ev){
  ProcessSim.pause();
  modal.showEvent(ev,currentWeek);
}

function getRandomModule()
{
   return modules[Math.floor(Math.random()*modules.length)];
}

function startLoop(){
  projectBudget = selectedProject.budget;
  weeksTilDueDate = selectedProject.duration;

  sidebar.setCash(projectBudget);
  sidebar.setWeeks(weeksTilDueDate);
  sidebar.setProgress(0);

  modules = [];
  selectedProject.modules.forEach(function(i){
     var moduleDevelopes = {};
       // move along the markers
    Object.keys(selectedTeams[i.name]).forEach(function(key) {
      moduleDevelopes[cities[key].name] = selectedTeams[i.name][key];
    });

    modules.push(
      new Module( 
        moduleDevelopes,i.cost
      )
    );
  });
 
  var citiesState = {};
  cities.forEach(function(c){
      citiesState[c.name] = new City(c.name,c.costPerWeek,c.productivity);
  });

  var eventRate = selectedProject.eventRate || client.eventRate;


  ProcessSim.start(modules,citiesState,simulationUpdate,simulationComplete,
    showEvent,getRandomModule,events,eventRate);
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

  modules.forEach(function(module) {

      totalCost += module.getCost(citiesState);
      modulesProgree = module.getPercentComplete();
 
      if(moduleProgressOverTime[i][moduleProgressOverTime[i].length -1] < 100)
        moduleProgressOverTime[i].push(modulesProgree);
      i += 1;

      percentComplete += modulesProgree;
  });

  weeksTilDueDate--;
  projectBudget -= totalCost;
  sidebar.setCash(projectBudget);
  sidebar.setWeeks(weeksTilDueDate);
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
  modal.endGame(currentWeek, projectBudget, selectedProject, moduleProgressOverTime);
}

function deleteDB(){
  teamsSelected = {};
  selectedTeams = {};
  totalPayRoll  = 0;
}

function initialiseGame(){
  sidebar.init(function(name,index){
    selectModule(name,index);
  });
  sidebar.hide();

  modal.hidemodal();
  maps.map=null;
  modules = [];
  moduleProgressOverTime = [[]];
  currentWeek = 0;

  ProcessSim.stop();

  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  deleteDB();//reset all localStorage values;

  $('#startScreen').show();
}

function pause(){
  modal.pause();
  ProcessSim.pause();
  $('#btn-options').show();
}

function evt(actionNumber){
  modal.setEventAction(actionNumber);
  var ev = modal.getEvents();
  var cev = ev[ev.length-1];
  var effects = utils.objectadd(cev.effects, cev.actions[actionNumber].effects);
  var city = ProcessSim.getCity(cev.city);
  if(effects.money){
    projectBudget += effects.money;
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
    city.setMorale(effects.morale);
    // setTimeout(function(){
    //   city.setMorale(0-effects.morale);
    // },5000);
  }
  if(effects.progress)
  {
      cev.module.setPercentageComplete(effects.progress);
  }
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
  });
  document.onkeydown = function (evt) {
    if (evt.keyCode == 27) {
      // this is the escape key [esc]
      pt.pause();
      evt.preventDefault();
    }
  };
  window.addEventListener('resize', function(event){
    pt.resizemap(95);
  });
  
  //Fire it when the page first loads:
  setBodyScale();

  $('#map').bind('markerSelected.jvectormap', selectCity);
  $('#map').bind('markerLabelShow.jvectormap', onlabelShow);

  ProcessSim.stop();
});


module.exports = {
  initialiseGame: initialiseGame,            // first thing that happens. shows start screen
  selectProject: selectProject,              // select which project to do
  startGame: startGame,                      // goes into "game mode", after placing teams
  endGame: endGame,                          // displays end-game stats

  startSimulation: startSimulation,
  projectdescription: projectdescription,
  // Modal
  hidemodal: modal.hidemodal,                // hides a modal window
  pause: pause,                              // toggles the pause menu
  evt: evt,
  //Maps
  resizemap: maps.resizemap,
  unpause:ProcessSim.unpause,
  //Charts
  generateCharts: modal.generateCharts,
  addChartContainer: modal.addChartContainer
};
