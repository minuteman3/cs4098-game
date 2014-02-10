var pt = (function () {
  // constructor
  var pt = function () {};

  // prototype
  pt.prototype = {
      constructor: pt
  };

  return { 
    makemap: function() {
      var map;
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
        // zoomOnScroll: false,
        regionsSelectable: true,
        backgroundColor: "transparent",
        onRegionSelected: function(){
          if (window.localStorage) {
            window.localStorage.setItem(
              'jvectormap-selected-regions',
              JSON.stringify(map.getSelectedRegions().sort())
            );
            console.log(0);
          }else{
            console.log("localStorage not available")
          }
        }
      });
      map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
      map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );
    },

    region: function(){
      var regions = window.localStorage.getItem('jvectormap-selected-regions');
      document.getElementById('regions').innerHTML= "Regions selected: "+regions;
    }
  };
})();