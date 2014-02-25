var cities = require('./cities.json');
var sidebar = require('./sidebar.js');
var proj = require('./projects.json');

var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;

var teamsSelected = {};
var totalPayRoll = 0;
var budget = 20000;
var projects = proj.projects;
var projectsDescription = proj.description;
var selectedProject;

var menu=false;
var modal=false;
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

function resizemap (s) {
  s = s || 95;
  document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
}

function displayregion () {
  var regions = region();
  var r = 'Regions selected: ' + regions;
  document.getElementById('regions').innerHTML = r;
}
function region (item) {
  item = item || 'jvectormap-selected-regions';
  var regions = window.localStorage.getItem(item);
  return regions;
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

// future work for modals: add new modals to a queue
// so many can stack up. remove from queue when dealt with
function showmodal (input, escable) {
  escable = escable || false;
  if(!modal){
    modal=true;
    menu = escable;//this is so we can show "tutorial" modals, which are skippable with [esc]
    input = input || "Pause Menu";
    $('#content').html('<div id="modal"><div class="modal-content">' + input + '</div></div>');
  }
}

function hidemodal () {
  modal = false;
  menu = false;
  $('#modal').empty();
  $('#modal').hide();
}

function makeChoices(a,b,c){
  a = a || ["Option 1"];
  b = b || "";
  c = c || "btn-action";

  var ret = '<p>';

  // this should be a description of the event, indicating/hinting at the correct answer
  ret+= b;
  ret+= '</p><div class="modal-options">';

  a.forEach(function(b,i,arr) {
    b.funct = b.funct || "startGame("+i+")";
    ret += '<button class="'+c+'" onclick="pt.'+b.funct+'">' + b.name + '</button>';
  });
  ret += '</div>';

  return ret;
}

function dialog(a){
  a = a || "";
  var html = "<h1>Information</h1><p>";
  html += a;

  html += '</p><div class="modal-options">';
  html += '<button class="btn-action" onclick="pt.hidemodal()"> Continue </button>';
  html += '</div>';

  showmodal(html, true);
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
function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([{"name":"Restart","funct":"initialiseGame()"},
                              {"name":"Quit","funct":"initialiseGame()"}],
                              "Press [esc] to return to the game");
    showmodal(pausemenu,true);
  }else if(modal && menu){
    hidemodal();
  }
}

function selectProject(){
  $('#startScreen').hide();
  menu = false;
  modal = false;

  var html = "<h1> Select A Project</h1>";
  html += makeChoices(projects,projectsDescription,"btn-projects");

  showmodal (html);
}

function startGame(a){
  a = a || 0;
  selectedProject = a;
  hidemodal();
  $('#sidebar').show();
  $('#btn-options').show();
  $('#map').show();
  buildmap();
  dialog(projects[a].dialog);
}

function deleteDB(){
  window.localStorage.clear();
}

function initialiseGame(){
  $('#sidebar').hide();
  $('#btn-options').hide();
  $('#map').empty();//deletes the map
  //reset all localStorage values;
  deleteDB();
  hidemodal();
  map=null;
  $('#startScreen').show();
}

module.exports = {
    initialiseGame: initialiseGame, // first thing that happens. shows start screen
    selectProject: selectProject,   // select which project to do
    startGame: startGame,           // goes into "game mode", after placing teams
    showmodal: showmodal,           // shows a modal window
    hidemodal: hidemodal,           // hides a modal window
    pause: pause,                    // toggles the pause menu
    selectTeams: selectTeamsForModule,
    region: region
};
