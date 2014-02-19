var pt = (function() {
  'use strict';
  // constructor
  var pt = function() {};
  // prototype
  pt.prototype = {
    constructor: pt
  };
  var map;
  
  // we need to get the status values from some sort of variable.
  var data = 10;

  // this file will export all of the functions in this Module var below.
  var Module = {
    makemap: function() {
      this.resizemap();
      // This is a jvectormap object, which has terrible docs.
      // nearly all settings were inferred from the examples @ http://jvectormap.com/examples/regions-selection/
      map = new jvm.WorldMap({
        width: 720,
        heigth: 300,
        container: $('#map'),
        map: 'world_mill_en',
        regionStyle: {
          initial: {
            fill: '#586e75' //base01
          },
          selected: {
            fill: '#2aa198' //base1
          }
        },
        regionsSelectable: true,
        backgroundColor: 'transparent',
        onRegionSelected: function() {
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
        },
        onRegionLabelShow: function(e,label,code){
          label.html(
            label.html()+'<br/>'+
            'Morale: '+           data+'%<br/>'+
            'Productivity: '+     data+'%<br/>'+
            'Cost per cycle: '+   data+'%<br/>'+
            'Unemployment rate: '+data+'%'
          );
        }
      });
      // this gets persistent data of the selected regions, and puts them on the map at page load.
      map.setSelectedRegions(JSON.parse(window.localStorage.getItem('jvectormap-selected-regions') || '[]'));
    },
    resizemap: function(s) {
      s = s || 100;
      document.getElementById('map').style.height = (document.documentElement.clientHeight * s / 100) + 'px';
    },
    region: function(item) {
      item = item || 'jvectormap-selected-regions';
      var regions = window.localStorage.getItem(item);
      return regions;
    },
    displayregion: function() {
      var regions = this.region();
      var r = 'Regions selected: ' + regions;
      document.getElementById('regions').innerHTML = r;
    },
    selectRegions: function() {
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
  };
  return Module;
})();