var cities = require('./cities.json');
var proj = require('./projects.json');
var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;
var projects = proj.projects;
var projectsDescription = proj.description;
var selectedProject;
var menu=false;
var modal=false;

function buildmap (){
  resizemap();
  // This is a jvectormap object, which has terrible docs, but good examples
  // nearly all settings were inferred from the examples @ http://jvectormap.com/examples/regions-selection/
  map = new jvm.WorldMap({
    map: 'world_mill_en',
    markers: cities.metro.coords,
    container: $('#map'),
    regionStyle: {
      initial: {
        fill: '#2aa198' //cyan
      }
    },
    series:{
      markers: [{
        attribute: 'fill',
        scale: ['#A50F15', '#FEE5D9'],
        values: cities.metro.unemployment[2009]
      }]
    },
    backgroundColor: 'transparent',
    onRegionSelected: regionSelect,
    onMarkerLabelShow: onlabelShow,
    markersSelectable: true
  });
  // this gets persistent data of the selected regions, and puts them on the map at page load.
  // map.setSelectedMarkers();
}

function displayregion () {
  var regions = region();
  var r = 'Regions selected: ' + regions;
  document.getElementById('regions').innerHTML = r;
}

function onlabelShow (e,label,code){
    label.html(
      cities.metro.names[code]+'<br/>'+
      'Morale: '+            cities.metro.unemployment[2009][code] +'%<br/>'+
      'Productivity: '+      cities.metro.unemployment[2009][code] +'%<br/>'+
      'Cost per cycle: '+    cities.metro.unemployment[2009][code] +'%<br/>'+
      'Unemployment rate: '+ cities.metro.unemployment[2009][code] +'%'
    );
}

function region (item) {
  item = item || 'jvectormap-selected-regions';
  var regions = window.localStorage.getItem(item);
  return regions;
}

function regionSelect () {
  // this enables persistent data of the selected regions
  // it gets called each time a region is selected.
  if (window.localStorage) {
    window.localStorage.setItem('jvectormap-selected-regions', JSON.stringify(map.getSelectedRegions().sort()));
  }
  var regionsHtml = '';
  $.each(map.getSelectedRegions().sort(), function(a, b) {
    regionsHtml += '<li>' + b + '</li>';
  });
  $('#locations').html(regionsHtml);
}

function resizemap (s) {
  s = s || 95;
  document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
}

function selectRegions () {
  map.clearSelectedRegions();
  window.localStorage.setItem('jvectormap-selected-regions', []);
  var index = $('.active').index('li');
  $('#locations').html('');
  if (index === 6) {
    console.log('done');
  } else {
    index += 2;
    $('.active').removeClass('active');
    $('.nav li:nth-child(' + index + ')').addClass('active');
  }
}
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
  modal=menu=false;
  $('#modal').remove();
}
function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([{"name":"Restart","funct":"initialiseGame"},
                              {"name":"Quit","funct":"initialiseGame"}],
                              "Press [esc] to return to the game");
    showmodal(pausemenu,true);
  }else if(modal && menu){
    hidemodal();
  }
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
  var html = "<h1>Information</h1>";
  html += a;
  html += '<button class="btn-action" onclick="pt.hidemodal()"> Continue </button>';
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
  buildmap();
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
    selectRegions: selectRegions,   // required for allocating teams to cities
    showmodal: showmodal,           // shows a modal window
    hidemodal: hidemodal,           // hides a modal window
    pause: pause                    // toggles the pause menu
};
