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

function objectadd(a,b){
  Object.keys(b).forEach(function(k){a[k]=b[k];});
  return a;
}

function randomCity(m,mod){
  var c = Object.keys(mod[m].developersPerCity);
  return c[Math.floor(Math.random()*c.length)];
}

function calculateCost(selectedProject){
  var cost = 0;
  cost = selectedProject.modules.reduce(function(cost, a){
    return cost + a.cost;
  },0);
  return cost;
}

module.exports = {
  getActiveCities: getActiveCities,
  contains: contains,
  revenue: revenue,
  objectadd: objectadd,
  randomCity: randomCity,
  calculateCost: calculateCost,
  commafy: commafy
};