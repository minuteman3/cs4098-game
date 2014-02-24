var cities = require('./cities.json');
var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;
var menu=false;

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
function showmodal (input) {
  input = input || "Options Menu";
  $('#content').append('<div id="modal"><div class="modal-content">' + input + '</div></div>');
}
function hidemodal () {
  $('#modal').remove();
}
function options () {
  if (menu===false){
    var optionsmenu = "<h1>Options</h1>";
    showmodal(optionsmenu);
    menu=true;
  }else{
    hidemodal();
    menu=false;
  }
}

module.exports = {
    makemap: buildmap,
    selectRegions: selectRegions,
    showmodal: showmodal,
    hidemodal: hidemodal,
    options: options,
    region: region
};
