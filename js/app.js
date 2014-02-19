var pt = (function() {
  'use strict';
  // constructor
  var pt = function() {};
  // prototype
  pt.prototype = {
    constructor: pt
  };
  var map,cities;
  var buildmap = function(){
    resizemap();
    // This is a jvectormap object, which has terrible docs, but good examples
    // nearly all settings were inferred from the examples @ http://jvectormap.com/examples/regions-selection/
    $('#map').vectorMap({
      map: 'world_mill_en',
      markers: cities.metro.coords,
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
  };
  var displayregion = function() {
    var regions = this.region();
    var r = 'Regions selected: ' + regions;
    document.getElementById('regions').innerHTML = r;
  };
  var makemap = function() {
    $.getJSON('/js/cities.json', function(data){
      cities=data;
      buildmap();
    });
  };
  var onlabelShow = function(e,label,code){
    label.html(
      cities.metro.names[code]+'<br/>'+
      'Morale: '+            cities.metro.unemployment[2009][code] +'%<br/>'+
      'Productivity: '+      cities.metro.unemployment[2009][code] +'%<br/>'+
      'Cost per cycle: '+    cities.metro.unemployment[2009][code] +'%<br/>'+
      'Unemployment rate: '+ cities.metro.unemployment[2009][code] +'%'
    );
  };
  var region = function(item) {
    item = item || 'jvectormap-selected-regions';
    var regions = window.localStorage.getItem(item);
    return regions;
  };
  var regionSelect = function() {
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
  };
  var resizemap = function(s) {
    s = s || 100;
    document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
  };
  var selectRegions = function() {
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
  };
  // this file will export all of the functions in this Module var below.
  var Module = {
    buildmap: buildmap,
    displayregion: displayregion,
    makemap: makemap,
    onlabelShow: onlabelShow,
    region: region,
    regionSelect: regionSelect,
    resizemap: resizemap,
    selectRegions: selectRegions
  };
  return Module;
})();