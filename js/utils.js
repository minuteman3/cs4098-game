function revenue(time, project) {
  var base = project.revenue.amount * project.revenue.months,
      wobble = time/project.duration;
  // console.log("base revenue");
  // console.log(base);
  // console.log("time remaining");
  // console.log(wobble);
  // console.log("revenue ± time remaining");
  // console.log(base + (project.revenue.amount * wobble));

  return (base + (project.revenue.amount * wobble));
}

function commafy(x,y) {
  y = y || 0;
  x = x.toFixed(y);
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function getActiveCities(teams) {
  var ret = [];
  Object.keys(teams).forEach(function(t) {
    Object.keys(teams[t]).forEach(function(t) {
      if (!contains(ret, t)) {
        ret.push(t);
      }
    });
  });
  return ret;
}

function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

function pruneChartData(chartData, project, time){
  var expectedTime = project.duration;
  var actualTime = time;
  var d = [];
  var ratio = actualTime/expectedTime + 1;
  if (ratio < 2.25 || time < 20){
    ratio = 1;
  }
  console.log(ratio);
  d = [];
  for (var i = 0; i < chartData.length; i++) {
    d.push([]);
    for (var j = 0; j < chartData[i].length; j+=ratio) {
      // we also floor the data to get nicer output
      d[i].push(Math.floor(chartData[i][Math.floor(j)]));
    }
    // always push the last one
    if(d[i][d[i].length-1] != chartData[i][chartData[i].length-1]){
      d[i].push(chartData[i][chartData[i].length-1]);
    }
  }
  return d;
}

module.exports = {
  getActiveCities: getActiveCities,
  contains: contains,
  revenue: revenue,
  pruneChartData: pruneChartData,
  commafy: commafy
};