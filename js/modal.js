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
  a = a || [{"name":"Option 1","funct":""}];// the names to use for each button
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
      d = 'onmouseover="'+'pt.projectdescription('+i+')" ';
      d += 'ontouchstart="'+'pt.projectdescription('+i+')" ';
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
  ev.week = currentWeek;
  var html = "<h1>Information</h1><p>";
  html +=  '<p>' + ev.message.replace("$site", ev.city.name).replace("$module", ev.module.name);
  html += '</p><div class="modal-options">';
  ev.actions.forEach(function(action, index){
      html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause();pt.evt('+index+')">' + action.message + '</button>';
  });

  if(ev.actions.length === 0){
      html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause()"> Continue </button>';
  }
  html += '</div>';

  events.push(ev);
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
            content = "<div class='ttip'>"+e.entries[0].dataSeries.name +" <strong>" + e.entries[0].dataPoint.y.toFixed(1) + " % </strong></div>";
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
  s = s || 50;
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
  var html = "<h1>"+project.name+" - Project Simulation Complete</h1>";
  html += '<div id="chartcontainer"></div>';
  html += '<div id="results">';
    html += '<p>The Project deadline was '+project.duration+' weeks and took <span id="res-time">'+time+'</span> weeks</p>';
    html += '<p>You have € <span id="res-balance">'+utils.commafy(budget,0)+'</span> in the bank</p>';
    html += '<p>You spent <span id="res-budget">'+(100*(project.budget-budget)/project.budget).toFixed(1)+'</span>% of your budget</p>';
    html += '<p>Your revenue is € <span id="res-revenue">'+utils.commafy(revenue,0)+'</span></p>';
    html += '<p>You earned <span id="res-revenuepc">'+(revenue*100/(project.revenue.amount*project.revenue.months)).toFixed(1)+'</span>% of the expected revenue</p>';
    html += '<p id="final-result">Your earnings are: € <span id="res-earnings">'+utils.commafy(revenue+budget,0)+'</span></p>';
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

  rg("#res-time",time-project.duration,true);
  // rg("#res-balance",budget);
  rg("#res-budget",((project.budget-budget)/project.budget)-1,true);
  // rg("#res-revenue",revenue);
  rg("#res-revenuepc",revenue*100/project.revenue.amount*project.revenue.months);
  // rg("#res-earnings",revenue+budget);
}

function rg(tag,num,rev){
  rev = rev || false;
  var o = 0;
  if(rev){o=num;num=0;}
  if(num < o){
    $(tag).css('color','#dc322f');//solarized @red
  } else {
    $(tag).css('color','#859900');//solarized @green
  }
}

function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([
                              {"name":"Continue","funct":"pause()"},
                              {"name":"Restart","funct":"initialiseGame()"},
                              {"name":"Quit","funct":"endGame()"}
                              ],
                              client.information);
    showmodal(pausemenu,true);
  }else if(modal && menu){
    hidemodal();
  }
}



module.exports = {
    showmodal: showmodal,           // shows a modal window
    hidemodal: hidemodal,           // hides a modal window
    dialog: dialog,
    pause: pause,                   // toggles the pause menu
    makeChoices: makeChoices,
    endGame: endGame,
    //charts
    generateCharts: generateCharts,
    addChartContainer: addChartContainer,
    //events
    setEventAction: setEventAction,
    getEvents: getEvents,
    showEvent: showEvent
};
