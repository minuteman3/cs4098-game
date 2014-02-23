var cities = require('./cities.json');
var $ = require('jquery');
var jvm = require('jvm');
var jvm_map = require('../lib/jquery-jvectormap-world-mill-en.js')();
var map;

var teamsSelected = {};
var totalPayRoll = 0;
var budget = 20000;

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


function displayregion () {
  var regions = region();
  var r = 'Regions selected: ' + regions;
  document.getElementById('regions').innerHTML = r;
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

function region (item) {
  item = item || 'jvectormap-selected-regions';
  var regions = window.localStorage.getItem(item);
  return regions;
}

function teamSelected (e,  code,  isSelected,  selectedMarkers) {
  if(!isMakerSelectable)return;
 
  if(!(code in teamsSelected))
    teamsSelected[code] = 1;
  else 
    teamsSelected[code] += 1; 

  totalPayRoll += cities.costPerCycle[code];

  $("#totalPayroll").html("$" + totalPayRoll);
  $("#budgetedWeeks").html((budget/totalPayRoll).toFixed(1) + " weeks");

  //selectedMarkers.map(function(i){return cities.names[i];});
  // this enables persistent data of the selected regions
  // it gets called each time a region is selected.
  if (window.localStorage) {
    window.localStorage.setItem('jvectormap-selected-regions', JSON.stringify(teamsSelected));
  }
  var regionsHtml = '';
  var cost = 0;
  for(var key in teamsSelected){
    regionsHtml += '<li>';
    regionsHtml += cities.names[key];
    regionsHtml += "<div class='teamMultiplier'>x" + teamsSelected[key] + "</div>";
    if (key === code) regionsHtml += "<div class='teamMultiplierFade'>+</div>";
    regionsHtml += '</li>';
    cost += cities.costPerCycle[key] *  teamsSelected[key];
  }
  teamCost = cost;
  $('#locations').html(regionsHtml);
  $('#costPerMonth').html("$" + cost);
}

function resizemap (s) {
  s = s || 100;
  document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
}

function selectTeams () {

  payroll = 0;
  for(var key in teamsSelected){
    payroll += cities.costPerCycle[key] *  teamsSelected[key];
  }

  // ignore the select teams button when no teams have been selected
  if(payroll===0)return;


  //map clear selected markers for some reason calls teamSelected so we need to call it
  // before we set it to empty but also after we figure out how much the payroll is for the current
  //module
  isMakerSelectable = false;
  map.clearSelectedMarkers();
  isMakerSelectable = true;
  teamsSelected = {};

  window.localStorage.setItem('jvectormap-selected-regions', []);
  var index = $('.active').index('li');
  $('#locations').html('');
  if (index === 2) {
    console.log('done');
  } else {
    index += 2;
    $('.active').removeClass('active');
    $('.nav li:nth-child(' + index + ')').addClass('active');

    $('.nav li:nth-child(' + (index-1) + ')').html($('.nav li:nth-child(' + (index-1) + ')').html() + "- $"+payroll);
    teamCost = 0;
    $('#costPerMonth').html("$0");
  }
}

module.exports = {
    makemap: buildmap,
    selectTeams: selectTeams,
    region: region
};
