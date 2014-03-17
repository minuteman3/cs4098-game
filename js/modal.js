var $ = require('jquery');
var Chart = require('../lib/chart.js');
var utils      = require('./utils.js');

var menu=false;
var modal=false;

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

function showEvent(ev)
{
    var html = ev.message;
    html += '</p><div class="modal-options">';
    ev.actions.forEach(function(action)
    {
        html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause()">' + action.message + '</button>';
    });

    if(ev.actions.length == 0)
        html += '<button class="btn-action" onclick="pt.hidemodal();pt.unpause()"> Continue </button>';

    html += '</div>';

    showmodal(html, false);
}

function generateCharts(loc, chartData){
  loc = loc || "gameover";
  var ctx, chart;

  var data = {
    labels : [],
    datasets : []
  };

  data.labels = chartData[0];
  
  for(var i = 1;i < chartData.length;i++){
    var obj = {};
    obj.data =  chartData[i];
    data.datasets.push(obj);
  }
   
  var options = {
    //Boolean - If we show the scale above the chart data
    scaleOverlay : true,
    //String - Colour of the scale line
    scaleLineColor : "rgba(0,0,0,0.1)",
    //Number - Pixel width of the scale line
    scaleLineWidth : 2,
    //Boolean - Whether to show labels on the scale
    scaleShowLabels : true,
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Helvetica Neue'",
    //Number - Scale label font size in pixels
    scaleFontSize : 12,
    //String - Scale label font weight style
    scaleFontStyle : "normal",
    //String - Scale label font colour
    scaleFontColor : "#666",
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.1)",
    //Number - Width of the grid lines
    scaleGridLineWidth : 1,
    //Boolean - Whether the line is curved between points
    bezierCurve : false,
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    //Number - Radius of each point dot in pixels
    pointDotRadius : 5,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 4,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : false,
    //Boolean - Whether to animate the chart
    animation : true,
    //Number - Number of animation steps
    animationSteps : 90,
    //String - Animation easing effect
    animationEasing : "easeOutQuart",
    //Function - Fires when the animation is complete
    onAnimationComplete : null
  };
  if (!chart){
    ctx = document.getElementById(loc).getContext("2d");
    chart = new Chart(ctx).Line(data,options);
  }
  return chart;
}
function addChartContainer(s){
  if($('#gameover')){
    $('#gameover').remove();
  }
  var w,h;
  s = s || 30;
  h = (document.documentElement.clientHeight * s / 100) + 'px;';
  w = (document.documentElement.clientWidth  * s / 100) + 'px;';
  $('body').append('<canvas id="gameover" width="'+w+'" height="'+h+'" style="display:none;"> </canvas>');
}
function endGame(time,budget,project, moduleProgressOverTime){
  addChartContainer();
  hidemodal ();
  console.log(project);
  var revenue = utils.revenue(time,project);
  var html = "<h1>Game Over</h1>";
  html += '<div id="chartcontainer"> <p id="chart-caption">module completion over time</p></div>';
  html += '<p>The Project took  '+(time)+' weeks</p>';
  html += '<p>You have €'+utils.commafy(budget)+' money in the bank</p>';
  html += '<p>Your revenue is €'+utils.commafy(revenue)+'</p>';
  html += '<p>Your earnings are: €'+utils.commafy(revenue+budget)+'</p>';
  html += '<div class="modal-options">';
  html += '<button class="btn-action" onclick="pt.initialiseGame()"> Quit to Menu </button>';
  html += '</div>';

  showmodal(html, false);

  $('#gameover').empty();
  generateCharts("gameover",moduleProgressOverTime);
  $('#gameover').detach().prependTo('#chartcontainer');
  $('#gameover').show();
}

function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([{"name":"Restart","funct":"initialiseGame()"},
                              {"name":"Quit","funct":"endGame()"}],
                              "Press [esc] to return to the game");
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
    showEvent: showEvent
};
