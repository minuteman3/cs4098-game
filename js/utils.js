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

function commafy(num){ /*
  var parts = (''+num).split("."), s=parts[0], i=L=s.length, o='';
  while(i--){ o = (i===0?'':((L-i)%3?'':','))+ 
                  s.charAt(i) +o ;}
  return o + (parts[1] ? '.' + parts[1] : ''); */
  return num.toLocaleString();
}

module.exports = {
    revenue: revenue,
    commafy: commafy
};