function revenue(time, project){
  var base = project.revenue.amount*project.revenue.months,
      wobble = time;
  console.log("base revenue");
  console.log(base);
  console.log("time remaining");
  console.log(wobble);
  console.log("revenue ± time remaining");
  console.log(base + (project.revenue.amount*wobble) );

  return base + (project.revenue.amount*wobble);
}

function commafy(x){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

module.exports = {
    revenue: revenue,
    commafy: commafy
};
