var cities = require('./cities.json');
var map;

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
        fill: '#586e75' //base01
      }
    },
    series:{
      markers: [{
        attribute: 'fill',
        scale: ['#FEE5D9', '#A50F15'],
        values: cities.metro.unemployment[2009]
      }]
    },
    backgroundColor: 'transparent',
    onRegionSelected: regionSelect,
    onMarkerLabelShow: onlabelShow
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
  s = s || 100;
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

module.exports = {
    makemap: buildmap,
    selectRegions: selectRegions,
};
