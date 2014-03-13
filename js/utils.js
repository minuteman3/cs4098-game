function debounce(func, wait, immediate) {
  // this is hi-jacked directly from underscore.js
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = _.now() - timestamp;
    if (last < wait) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };
  return function() {
    context = this;
    args = arguments;
    timestamp = _.now();
    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

function revenue(time, project){
  console.log("base revenue");
  console.log(project.revenue.amount*project.revenue.months);
  console.log("time remaining");
  console.log(project.duration - time/4);
  console.log("revenue ± time remaining");
  console.log(project.revenue.amount * (project.revenue.months + ((project.duration - time)/4)));

  return project.revenue.amount * (project.revenue.months + (project.duration - time/4));
}

module.exports = {
    revenue: revenue,
    debounce: debounce
};