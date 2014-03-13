function revenue(time, project){
  console.log("base revenue");
  console.log(project.revenue.amount*project.revenue.months);
  console.log("time remaining");
  console.log(project.duration - time/4);
  console.log("revenue ± time remaining");
  console.log(project.revenue.amount * (project.revenue.months + ((project.duration - time)/4)));

  return project.revenue.amount * (project.revenue.months + (project.duration - time/4));
}

function commafy(num){
  var parts = (''+num).split("."), s=parts[0], i=L=s.length, o='';
  while(i--){ o = (i===0?'':((L-i)%3?'':','))+ 
                  s.charAt(i) +o ;}
  return o + (parts[1] ? '.' + parts[1] : ''); 
}

module.exports = {
    revenue: revenue,
    commafy: commafy
};