var cities = require('./cities.json');
var proj   = require('./projects.json');
var sidebar= require('./sidebar.js');
var modal = require('./modal.js');

var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;



var projects = proj.projects;
var projectsDescription = proj.description;
var selectedProject;

var teamsSelected = {};
var totalPayRoll = 0;
var selectedTeams = {};


var isMakerSelectable = true;



var GameStates = {
      START:0,
      SELECT_TEAMS:1,
      PROGRESS:2,
}
var curGameState = GameStates.START;


function buildmap (){
  resizemap();
  // This is a jvectormap object, which has terrible docs, but good examples
  // nearly all settings were inferred from the examples @ http://jvectormap.com/examples/regions-selection/
  map = new jvm.WorldMap({
    map: 'world_mill_en',
    markers: cities.coords,
    container: $('#map'),
    series:{
      markers: [{
        attribute: 'r',
        scale: [6, 8],
        values: cities.productivity
      },{
        attribute: 'state',
      }]
    },
    backgroundColor: 'transparent',
    onMarkerSelected: teamSelected,
    onMarkerLabelShow: onlabelShow,
    markersSelectable: true,
    onRegionLabelShow:regionLabelShow,

  });
  // this gets persistent data of the selected regions, and puts them on the map at page load.
  // map.setSelectedMarkers();
}

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
      console.log("debounced");
    }

    return result;
  };
}

function resizemap (s) {
  // for some mysterious reason, this is no longer needed... and actually bugs out.
  s = s || 95;
  document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
  // $('#map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
}

function regionLabelShow(e,label,code){ 

  label.css('visibility','hidden');
}

function onlabelShow (e,label,code){
  label.css('visibility','visible');
    
  if(curGameState === GameStates.SELECT_TEAMS){
    label.html(
      cities.names[code]+'<br/>'+
      'Morale: '+            cities.morale[code] +'%<br/>'+
      'Productivity: '+      cities.productivity[code] +'%<br/>'+
      'Monthly cost: $'+    cities.costPerCycle[code] +'<br/>'+
      'Unemployment rate: '+ 0 +'%'
    );
  }else if(curGameState === GameStates.PROGRESS){
    // fixoverlap code is broken
    label.html(
      "You can receive an indepth <br/> report on the progress of <br/> this team for $500"
    );
  }

  fixOverLap(code,label);
}



function fixOverLap(code,label){
    // check to make sure the label doesnt overlap with the sidebar
    if(cities.coords[code][1] < -100){
      var newPos = label.width() + 25;
      //change the margin-left property as left is assigned after this function is called
      label.css('margin-left',newPos);
    }else{
      label.css('margin-left',"");
    }
}


function runState(){
  map.series.markers[1].setValues([1,2,2,3]);

}



function teamSelected (e,  code,  isSelected,  selectedMarkers) {
  // hack hack 
  if(!isMakerSelectable)return;
 

  if(curGameState === GameStates.PROGRESS){
    modal.showmodal("This team is doing very well",true);
    return;
  }
  //update general information
  teamsSelected[code] = (teamsSelected[code] || 0)+1;
  totalPayRoll += cities.costPerCycle[code];

  sidebar.setPayroll(totalPayRoll);
  sidebar.setBudgetedWeeks(selectedProject.budget/totalPayRoll);

  // update information about this module
  sidebar.setPayrollforModule(caculatePayrollforMod());
  sidebar.setLocations(teamsSelected,code);
}

function selectTeamsForModule () {
  // ignore the select teams button when no teams have been selected
  payroll = caculatePayrollforMod();
  if(payroll===0)return;

  // move along the markers
  var index = sidebar.getActiveListItem();

  var moduleDevelopes = {};
  Object.keys(teamsSelected).forEach(function(key) {
    moduleDevelopes[cities.names[key]] = teamsSelected[key];
  });

  selectedTeams[selectedProject.modules[index].name] = moduleDevelopes;

  // reset everything for the next module
  clearMapMarkers();
  teamsSelected = {};
  sidebar.setLocations([]);



  if (index >= selectedProject.modules.length -1 ) {
    setUpProgressSidebar();
  } else {
    sidebar.setListItemActive( index+1);
  }
}


function setUpProgressSidebar(){

  console.log(selectedTeams);

  curGameState = GameStates.PROGRESS;
  sidebar.setList([]);
  sidebar.showSelectTeams(false);

  sidebar.setTitle("Game is running");
  runState();
}



function clearMapMarkers(){
  //map clear selected markers for some reason calls teamSelected so we need to call it
  // before we set it to empty but also after we figure out how much the payroll is for the current
  //module
  isMakerSelectable = false;
  map.clearSelectedMarkers();
  isMakerSelectable = true;
}

function caculatePayrollforMod(){
  payroll = 0;
  for(var key in teamsSelected){
    payroll += cities.costPerCycle[key] *  teamsSelected[key];
  }
  return payroll;
}

function selectProject(){
  $('#startScreen').hide();

  var html = "<h1> Select A Project</h1>";
  html += modal.makeChoices(projects,projectsDescription,"btn-projects");

  modal.showmodal (html);
}

function startGame(a){
  a = a || 0;
  selectedProject = projects[a];
  modal.hidemodal();

  $('#btn-options').show();
  $('#map').show();
  $('#map').empty();

  buildmap();

  curGameState = GameStates.SELECT_TEAMS;
  totalPayRoll = 0;
  teamsSelected = {};
  selectedTeams = {};

  sidebar.show();
  sidebar.showSelectTeams(true);
  sidebar.setTitle("Select Teams");

  sidebar.setList(selectedProject.modules.map(function(a){return a.name;}));
  sidebar.setListItemActive(0);

  sidebar.setBudget(selectedProject.budget);
  sidebar.setDueDate(selectedProject.duration);

  sidebar.setPayroll(0);
  sidebar.setBudgetedWeeks(0);
  sidebar.setPayrollforModule(0);
  sidebar.setLocations([]);

  modal.dialog(selectedProject.dialog);

}

function deleteDB(){
  window.localStorage.clear();
}

function initialiseGame(){
  sidebar.hide();

  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  deleteDB();//reset all localStorage values;
  modal.hidemodal();
  map=null;
  $('#startScreen').show();
}





module.exports = {
    initialiseGame: initialiseGame, // first thing that happens. shows start screen
    selectProject: selectProject,   // select which project to do
    startGame: startGame,           // goes into "game mode", after placing teams
    showmodal: modal.showmodal,           // shows a modal window
    hidemodal: modal.hidemodal,           // hides a modal window
    pause: modal.pause,                    // toggles the pause menu
    resizemap: resizemap,
    debounce: debounce,
    selectTeams: selectTeamsForModule,
};
