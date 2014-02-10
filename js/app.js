var pt = (function () {
  // constructor
  var pt = function () {};

  // prototype
  pt.prototype = {
      constructor: pt
  };

  var Module = { 
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
          }
        }
      });
      map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
    },

    region: function(item){
      item = item || 'jvectormap-selected-regions';
      var regions = window.localStorage.getItem(item);
      var r = "Regions selected: "+regions;
      document.getElementById("regions").innerHTML=r;
      return regions;
    }
  };

  return Module;
})();