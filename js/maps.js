var $       = require('jquery');
var jvm     = require('jvm');
var cities  = require('./../config/cities.json');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;

function buildmap (){
  resizemap();
  // This is a jvectormap object, which has terrible docs, but good examples
  // nearly all settings were inferred from the examples @ http://jvectormap.com/examples/regions-selection/
  map = new jvm.WorldMap({
    map: 'world_mill_en',
    markers: cities.map(function(city){return city.coords;}),
    container: $('#map'),
    series:{
      markers: [{
        attribute: 'r',
        scale: [8, 12],
        values: cities.map(function(city){return city.productivity;})
      },{
        attribute: 'state',
      }]
    },
    backgroundColor: 'transparent',
    markersSelectable: true,
    onRegionLabelShow: regionLabelShow
  });
}

function resizemap (s) {
  s = s || 95;
  if(document.getElementById('map')){
    document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
  }
}

function regionLabelShow(e,label,code){ 
  label.css('visibility','hidden');
}

function fixOverLap(code,label){
    // check to make sure the label doesnt overlap with the sidebar
    var newPos = label.width() + 25;
    if(cities[code].coords[1] < -100){
      //change the margin-left property as left is assigned after this function is called
      label.css('margin-left',newPos);
    }else{
      // fix glitching on edge of label
      label.css('margin-left',-10);
    }
}

function runState(states){
  map.series.markers[1].setValues(states);
}

function clearMapMarkers(){
  //map clear selected markers for some reason calls teamSelected so we need to call it
  // before we set it to empty but also after we figure out how much the payroll is for the current
  //module
  isMakerSelectable = false;
  map.clearSelectedMarkers();
  isMakerSelectable = true;
}

module.exports = {
	clearMapMarkers: clearMapMarkers,
	fixOverLap: fixOverLap,
	buildmap: buildmap,
	resizemap: resizemap,
	runState: runState,
	map: map
};