var $ = require('jquery');
var Chart = require('../lib/canvasjs.js'); // adds 
var utils      = require('./utils.js');
var client     = require('./../config/client-config.json');

var menu=false;
var modal=false;
var events = [];

// future work for modals: add new modals to a queue
// so many can stack up. remove from queue when dealt with
function showmodal (input, escable) {
  escable = escable || false;
  if(!modal){
    modal=true;
    menu = escable;//this is so we can show "tutorial" modals, which are skippable with [esc]
    input = input || "Pause Menu";
    $('#content').html('<div id="modal"><div class="modal-content">' + input + '</div></div>');
  }
}

function hidemodal () {
  modal = false;
  menu = false;
  $('#modal').empty();
  $('#modal').hide();
}

function makeChoices(a,b,c,proj){
  a = a || ["Option 1"];// the names to use for each button
  b = b || "";// this should be a description of the event, indicating/hinting at the correct answer
  c = c || "btn-action";
  proj = proj || false;

  var ret = '<p>';
  var d="";
  ret+= b;
  ret+= '</p><div class="modal-options">';

  a.forEach(function(b,i,arr) {
    b.funct = b.funct || "startGame("+i+")";
    if (proj){
      d = 'onmouseover="'+'pt.projectdescription('+i+') "';
    }
    ret += '<button class="'+c+'" onclick="pt.'+b.funct+'" '+d+' >' + b.name + '</button>';
  });
  ret += '</div>';

  return ret;
}

function dialog(a){
  a = a || "";
  var html = "<h1>Information</h1><p>";
  html += a;

  html += '</p><div class="modal-options">';
  html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause()"> Continue </button>';
  html += '</div>';

  showmodal(html, true);
}

function setEventAction(num){
  events[events.length-1].mitigation = events[events.length-1].actions[num];
}

function getEvents(){
  return events;
}

function showEvent(ev,currentWeek){
  console.log(ev);
  ev.message = ev.message.replace("$site", ev.city);
  ev.week = currentWeek;
  events.push(ev);
  var html = "<h1>Information</h1><p>";
  html +=  '<p>' + ev.message;
  html += '</p><div class="modal-options">';
  ev.actions.forEach(function(action, index){
      html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause();pt.evt('+index+')">' + action.message + '</button>';
  });

  if(ev.actions.length === 0){
      html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause()"> Continue </button>';
  }
  html += '</div>';

  showmodal(html, false);
}

function generateCharts(loc, chartData, project, time){
  loc = loc || "gameover";
  project = project || {"duration":chartData[0].length};
  time = time || project.duration;
  var ctx, chart = null;

  var datas = [];

  // data.labels = chartData[0];
  for(var i = 1;i < chartData.length;i++){
    var obj = {
      type: "line",
      showInLegend: true,
      name: project.modules[i-1].name,
      dataPoints: []
    };
    for(var j = 0;j < chartData[i].length;j++){
      var pt = {
        x:chartData[0][j],
        y:chartData[i][j]
      };
      obj.dataPoints.push(pt);
    }
    datas.push(obj);
  }
  // console.log(JSON.stringify(datas));
  chart = new CanvasJS.Chart(loc,
  {
    theme: "theme2",
    backgroundColor: "transparent", 
    legend:{
      fontSize: 16
    },
    axisX: {
        title: "Weeks",
        minimum: 0
    },
    axisY: {
        title: "% Module Completion",
        minimum: 0,
        maximum: 105
    },
    toolTip: {
        enabled: true, //disable here
        content: function (e) {
            var content;
            content = e.entries[0].dataSeries.name + " <strong>" + e.entries[0].dataPoint.y.toFixed(1) + " % </strong>";
            return content;
        },
        animationEnabled: true //disable here
    },
    data: datas
  });

  chart.render();
  
  return chart;
}

function addChartContainer(s){
  if($('#gameover')){
    $('#gameover').remove();
  }
  var w,h,ws;
  s = s || 40;
  ws = 4*s/5;
  h = (document.documentElement.clientHeight * s / 100) + 'px;';
  w = (document.documentElement.clientWidth  * ws / 100) + 'px;';
  d = document.createElement("div");
  d.id = "gameover";
  d.setAttribute("style","width:"+w+";height:"+h+";");
  $('body').append(d);
}
function endGame(time,budget,project, moduleProgressOverTime){
  addChartContainer();
  hidemodal ();
  var revenue = utils.revenue(time,project);
  var html = "<h1>Game Over</h1>";
  html += '<div id="chartcontainer"></div>';
  html += '<div id="results">';
    html += '<p>The Project deadline was '+project.duration+' weeks and took '+time+' weeks</p>';
    html += '<p>You have €'+utils.commafy(budget,0)+' in the bank</p>';
    html += '<p>You spent €'+utils.commafy(project.budget-budget,0)+'</p>';
    html += '<p>Your revenue is €'+utils.commafy(revenue,0)+'</p>';
    html += '<p>Expected revenue was €'+utils.commafy(project.revenue.amount*project.revenue.months,0)+'</p>';
    html += '<p>Your earnings are: €'+utils.commafy(revenue+budget,0)+'</p>';
    html += '</div>';
    html += '<div class="modal-options">';
      html += '<button class="btn-action" onclick="pt.initialiseGame()"> Quit to Menu </button>';
    html += '</div>';

  showmodal(html, false);

  $('#gameover').empty();
  $('#gameover').show();
  generateCharts("gameover",moduleProgressOverTime, project, time);
  $('#gameover').detach().prependTo('#chartcontainer');
  $('#gameover').show();
}

function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([{"name":"Restart","funct":"initialiseGame()"},
                              {"name":"Quit","funct":"endGame()"}],
                              client.information);
    showmodal(pausemenu,true);
  }else if(modal && menu){
    hidemodal();
  }
}



module.exports = {
    showmodal: showmodal,           // shows a modal window
    hidemodal: hidemodal,           // hides a modal window
    pause: pause,                   // toggles the pause menu
    makeChoices: makeChoices,
    endGame: endGame,
    generateCharts: generateCharts,
    addChartContainer: addChartContainer,
    dialog: dialog,
    //events
    setEventAction: setEventAction,
    getEvents: getEvents,
    showEvent: showEvent
};
