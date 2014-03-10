var $          = require('jquery');
var cities     = require('./cities.json');
var maps       = require('./maps.js');
var modal      = require('./modal.js');
var Module     = require('./Module.js');
var City     = require('./city.js');
var ProcessSim = require('./ProcessSimulator.js');
var proj       = require('./projects.json');
var sidebar    = require('./sidebar.js');
//var utils      = require('./utils.js');

var projects = proj.projects;
var selectedProject;

var teamsSelected = {};
var totalPayRoll = 0;
var selectedTeams = {};

var isMakerSelectable = true;

var modules = [];

var GameStates = {
      START:0,
      SELECT_TEAMS:1,
      PROGRESS:2,
};
var curGameState = GameStates.START;


function debounce(func, wait, immediate) {
  // this is hi-jacked directly from underscore.js
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = _.now() - timestamp;
    if (last < wait) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };
  return function() {
    context = this;
    args = arguments;
    timestamp = _.now();
    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}




function teamSelected(e,  code,  isSelected,  selectedMarkers) {
  if(!isMakerSelectable)return;
 
  if(curGameState === GameStates.PROGRESS){
    modal.dialog("This team is doing very well");
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
      hoverCity.names+'<br/>'+
      'Morale: '+            hoverCity.morale +'%<br/>'+
      'Productivity: '+      hoverCity.productivity +'%<br/>'+
      'Cost per cycle: $'+    hoverCity.costPerCycle +'<br/>'
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
  sidebar.setLocations([]);

  if (index >= selectedProject.modules.length -1 ) {
    setUpProgressSidebar();
  } else {
    sidebar.setListItemActive( index+1);
  }
}

function setUpProgressSidebar(){
  //console.log(selectedTeams);
  curGameState = GameStates.PROGRESS;
  
  sidebar.setList([]);
  sidebar.showSelectTeams(false);
  sidebar.setTitle("Game is running");

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
  html += modal.makeChoices(projects,'<div id="project-description"></div>','btn-projects',true);

  modal.showmodal(html);
}

function projectdescription(a){
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
  $('#map').bind('markerSelected.jvectormap', teamSelected);
  $('#map').bind('markerLabelShow.jvectormap', onlabelShow);

  curGameState = GameStates.SELECT_TEAMS;

  sidebar.show();
  sidebar.setBudget(selectedProject.budget);
  sidebar.setDueDate(selectedProject.duration);
  sidebar.setList(selectedProject.modules.map(function(a){return a.name;}));
  sidebar.setListItemActive(0);

  modal.dialog(selectedProject.dialog);
}

function countDevelopersPerModule(mod){
  var result = 0;
  cities.names.forEach(function(c){
    if(mod[c]){
      result += mod[c];
    }
  });
  return result;
}

function startLoop(){
    modules = [];
    selectedProject.modules.forEach(function(i){
      modules.push(
        new Module( 
          selectedTeams[i.name],i.cost
        )
      );
    });

    var citiesState = {};
    cities.cities.forEach(function(c){
      citiesState[c.name] = new City(c.name,c.costPerCycle,c.productivity);
    });

    ProcessSim.start(modules,citiesState, function(modules,citiesState){
        var states = [];
        console.log(citiesState);
        cities.cities.forEach(function(c){
            states.push(citiesState[c.name].status());
        });

        maps.runState(states);
      
    },function() {
        var done = true;
        modules.forEach(function(module) {
            done = done && module.done();
        });
        if(done){// game over 
          endGame();
        } else {
          console.log("ERR: modules are not finished");
        }
    });
}

function deleteDB(){
  window.localStorage.clear();
  teamsSelected = {};
  selectedTeams = {};
  totalPayRoll  = 0;
}

function initialiseGame(){
  sidebar.hide();
  sidebar.init();
  modal.hidemodal();
  maps.map=null;

  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  deleteDB();//reset all localStorage values;

  $('#startScreen').show();
}

function endGame(){
  modal.endGame();
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
        pt.pause();
      evt.preventDefault();
    }
  };
  window.addEventListener('resize', function(event){
    pt.debounce(pt.resizemap(95),500);
  });
  
  //Fire it when the page first loads:
  setBodyScale();
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
    debounce: debounce,
};
