var $          = require('jquery');
var cities     = require('./../config/cities.json');
var maps       = require('./maps.js');
var modal      = require('./modal.js');
var Module     = require('./Module.js');
var City       = require('./city.js');
var ProcessSim = require('./ProcessSimulator.js');
var proj       = require('./../config/projects.json');
var sidebar    = require('./sidebar.js');
var utils      = require('./utils.js');

var projects = proj.projects;
var selectedProject;

var teamsSelected = {};
var totalPayRoll = 0;
var selectedTeams = {};

var weeksTilDueDate = 0;
var projectBudget = 0;

var isMakerSelectable = true;

var modules = [];
var moduleProgressOverTime = [[]];
var currentWeek = 0;

var GameStates = {
      START:0,
      SELECT_TEAMS:1,
      PROGRESS:2,
};
var curGameState = GameStates.START;

function teamSelected(e,  code,  isSelected,  selectedMarkers) {
  if(!isMakerSelectable)return;
 
  if(curGameState === GameStates.PROGRESS){
    ProcessSim.pause();
    modal.dialog("This team is doing very well");
    sidebar.setCash(projectBudget);
    projectBudget -= 500;
  } else {
    //update general information
    teamsSelected[code] = (teamsSelected[code] || 0)+1;
    totalPayRoll += cities.cities[code].costPerCycle;

    sidebar.setPayroll(totalPayRoll);
    sidebar.setBudgetedWeeks(selectedProject.budget/totalPayRoll);

    // update information about this module
    sidebar.setPayrollforModule(calculatePayrollforMod());
    sidebar.setLocations(teamsSelected,code);
  }
}

function onlabelShow(e,label,code){
  label.css('visibility','visible');
    
  var hoverCity  = cities.cities[code];
  if(curGameState === GameStates.SELECT_TEAMS){
    label.html(
      '<strong>'+              hoverCity.name         +'</strong><br/>'+
      'Morale: '+          hoverCity.morale       +'%<br/>'+
      'Productivity: '+    hoverCity.productivity +'%<br/>'+
      'Cost per week: $'+ hoverCity.costPerCycle +'<br/>'
    );
  }else if(curGameState === GameStates.PROGRESS){
    // fixoverlap code is broken
    label.html(
      "You can receive an indepth <br/> report on the progress of <br/> this team for $500"
    );
  }
  maps.fixOverLap(code,label);
}

function selectTeamsForModule () {
  var moduleDevelopes = {};
  var index = sidebar.getActiveListItem();

  // ignore the select teams button when no teams have been selected
  payroll = calculatePayrollforMod();
  if(payroll===0)return;

  // move along the markers
  Object.keys(teamsSelected).forEach(function(key) {
    moduleDevelopes[cities.cities[key].name] = teamsSelected[key];
  });

  selectedTeams[selectedProject.modules[index].name] = moduleDevelopes;

  // reset everything for the next module
  maps.clearMapMarkers();
  teamsSelected = {};
  sidebar.setPayrollforModule(0);
  sidebar.setLocations([]);

  if (index >= selectedProject.modules.length -1 ) {
    setUpProgressSidebar();
  } else {
    if(index == selectedProject.modules.length -2)
      sidebar.setButtonText("Start");
    sidebar.setListItemActive( index+1);
  }
}

function setUpProgressSidebar(){
  //console.log(selectedTeams);
  curGameState = GameStates.PROGRESS;
  
  sidebar.setList([]);
  sidebar.showSelectTeams(false);
  sidebar.setTitle("Game is running");

  sidebar.showProgressState(true);
  maps.runState();
  startLoop();
}

function calculatePayrollforMod(){
  payroll = 0;
  for(var key in teamsSelected){
    payroll += cities.cities[key].costPerCycle *  teamsSelected[key];
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
  modal.hidemodal();

  $('#btn-options').show();
  $('#map').show();
  $('#map').empty();
  $('#jvectormap-label').empty();

  maps.buildmap();

  curGameState = GameStates.SELECT_TEAMS;

  sidebar.show();
  sidebar.setButtonText(selectedProject.modules.length==1?"Start":"Select Teams");
  sidebar.setBudget(selectedProject.budget);
  sidebar.setDueDate(selectedProject.duration);
  sidebar.setList(selectedProject.modules.map(function(a){return a.name;}));
  sidebar.setListItemActive(0);

  modal.dialog(selectedProject.dialog);


  moduleProgressOverTime = selectedProject.modules.map(function(){return [0]});
  moduleProgressOverTime.push([0]);
}


function startLoop(){
  projectBudget = selectedProject.budget;
  weeksTilDueDate = selectedProject.duration;

  sidebar.setCash(projectBudget);
  sidebar.setWeeks(weeksTilDueDate);
  sidebar.setProgress(0);

  modules = [];
  selectedProject.modules.forEach(function(i){
    modules.push(
      new Module( 
        selectedTeams[i.name],i.cost
      )
    );
  });
  var active = utils.getActiveCities(selectedTeams);

  var citiesState = {};
  cities.cities.forEach(function(c){
    // here we only create cities where we have selected teams
    if(utils.contains(active,c.name)){
      citiesState[c.name] = new City(c.name,c.costPerCycle,c.productivity);
    }
  });
  console.log(citiesState);
  ProcessSim.start(modules,citiesState,simulationUpdate,simulationComplete);
}

function simulationUpdate(modules,citiesState){
  var states = [];

  cities.cities.forEach(function(c){
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
  modal.endGame(currentWeek, projectBudget, selectedProject, moduleProgressOverTime);
  ProcessSim.stop();
}

function deleteDB(){
  window.localStorage.clear();
  teamsSelected = {};
  selectedTeams = {};
  totalPayRoll  = 0;
}

function initialiseGame(){
  sidebar.init();
  sidebar.hide();
  modal.hidemodal();
  maps.map=null;

  ProcessSim.stop();

  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  deleteDB();//reset all localStorage values;

  $('#startScreen').show();
}

function pause(){
  modal.pause();
  ProcessSim.pause();
  $('#btn-options').toggle();
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

  $('#map').bind('markerSelected.jvectormap', teamSelected);
  $('#map').bind('markerLabelShow.jvectormap', onlabelShow);

  ProcessSim.stop();
});


module.exports = {
  initialiseGame: initialiseGame,            // first thing that happens. shows start screen
  selectProject: selectProject,              // select which project to do
  startGame: startGame,                      // goes into "game mode", after placing teams
  endGame: endGame,                          // displays end-game stats

  selectTeams: selectTeamsForModule,
  projectdescription: projectdescription,
  // Modal
  hidemodal: modal.hidemodal,                // hides a modal window
  pause: pause,                              // toggles the pause menu
  //Maps
  resizemap: maps.resizemap,
  unpause:ProcessSim.unpause,
  //Charts
  generateCharts: modal.generateCharts,
  addChartContainer: modal.addChartContainer
};
