var cities = require('./cities.json');
var proj   = require('./projects.json');
var sidebar= require('./sidebar.js');
var modal = require('./modal.js');

var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;

var teamsSelected = {};
var totalPayRoll = 0;
var budget = 20000;
var projects = proj.projects;
var selectedProject;

var isMakerSelectable = true;




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
        attribute: 'fill',
        scale: ['#A50F15', '#FEE5D9'],
        values: cities.productivity
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
    label.html(
      cities.names[code]+'<br/>'+
      'Morale: '+            cities.morale[code] +'%<br/>'+
      'Productivity: '+      cities.productivity[code] +'%<br/>'+
      'Monthly cost: $'+    cities.costPerCycle[code] +'<br/>'+
      'Unemployment rate: '+ 0 +'%'
    );

    // check to make sure the label doesnt overlap with the sidebar
    if(cities.coords[code][1] < -100){
      var newPos = label.width() + 25;
      //change the margin-left property as left is assigned after this function is called
      label.css('margin-left',newPos);
    }else{
      label.css('margin-left',"");
    }
}

function teamSelected (e,  code,  isSelected,  selectedMarkers) {
  // hack hack 
  if(!isMakerSelectable)return;
 
  //update general information
  teamsSelected[code] = (teamsSelected[code] || 0)+1;
  totalPayRoll += cities.costPerCycle[code];

  sidebar.setPayroll(totalPayRoll);
  sidebar.setBudgetedWeeks(budget/totalPayRoll);

  // update information about this module
  sidebar.setPayrollforModule(caculatePayrollforMod());
  sidebar.setLocations(teamsSelected,code);
}

function selectTeamsForModule () {
  // ignore the select teams button when no teams have been selected
  payroll = caculatePayrollforMod();
  if(payroll===0)return;

  // reset everything for the next module
  clearMapMarkers();
  teamsSelected = {};
  sidebar.setLocations([]);

  // move along the markers
  var index = sidebar.getActiveListItem();
  if (index === 2) {
    console.log('done');
  } else {
    sidebar.setListItemActive( index+1);
  }
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
  html += modal.makeChoices(projects,'<div id="project-description"></div>','btn-projects',true);

  modal.showmodal (html);
}
function projectdescription(a){
  $('#project-description').html(projects[a].dialog);
}
function startGame(a){
  a = a || 0;
  selectedProject = a;
  modal.hidemodal();
  $('#sidebar').show();
  $('#btn-options').show();
  $('#map').show();
  $('#map').empty();
  buildmap();
  modal.dialog(projects[a].dialog);
}

function deleteDB(){
  window.localStorage.clear();
}

function initialiseGame(){
  $('#sidebar').hide();
  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  $('body').append('<canvas id="gameover" width="600px;" height="400px;" style="display:none;"> </canvas>');
  deleteDB();//reset all localStorage values;
  modal.hidemodal();
  map=null;
  $('#startScreen').show();
}
function endGame(){
  modal.endGame();
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
    endGame: endGame,
    projectdescription: projectdescription
};
