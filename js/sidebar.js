var cities = require('./../config/cities.json');
var $ = require('jquery');
var utils      = require('./utils.js');

var activeClass = "active";
var activeTag = "." + activeClass;
var budgetTag = "#budget";
var budgetWeeksTag = "#budgetedWeeks";
var buttonTag = "#btn-region";
var cashTag = "#cash";
var dueDateTag = "#duedate";
var gamePropertiesTag = ".gameProperties";
var listTag = ".nav";
var itemsTag = listTag + " li";
var locationTag = "#locations";
var payrollTag = "#totalPayroll";
var payrollforModuleTag = "#costPerMonth";
var progressStateTag = ".progess-state";
var progressTag = "#progress";
var selectTeamTag = ".select-teams";
var selectTeamTagstatus = ".select-teams-status";
var sidebarTag = '#HUD';
var titleTag = "#sidebar-title";
var weeksTag = "#weeks";
var homeCityTag = "#homecity";
var homeCityHeaderTag = "#homecityHeader";


var itemSelectionFunc;
var upLocationFuction;
var downLocationFunction;

function init(itemSelection,_upLocationFuction,_downLocationFunction){
  showProgressState(false);
  showSelectTeams(true);
  setTitle("Select Teams");
  setPayroll(0);
  setBudgetedWeeks(0);
  setPayrollforModule(0);
  setLocations([]);
upLocationFuction =_upLocationFuction;
downLocationFunction = _downLocationFunction;
  itemSelectionFunc = itemSelection;
}


function show(){
    $(sidebarTag).show();
}

function hide(){
    $(sidebarTag).hide();
}

/*
*   List functions
*/ 
function setList(elements,nonselectable){
  nonselectable = nonselectable || false;
  $(listTag).empty();
  var e = "Effort ";
  if (nonselectable){
    e = "Progress ";
  }

  for(var i =0;i< elements.length;i++)
  {
    var item = elements[i];
    var html = item.name + "<br/><span class='modulecost'>"+e+item.cost.toFixed(0)+"%</span>";
    $(listTag).append($("<li></li>").html(html).attr("date-name",item.name));
  }
  if (nonselectable){
    setListListner(itemSelectionFunc);
  }
}

function setListListner(func){
  $(itemsTag).click(function(){
    var name = $(this).attr("date-name");
    var index = $(this).index("li");
    func(name,index);
  });
}

function getActiveListItem(){
	return $(activeTag).index('li');
}

function setListItemActive(i){
	$(activeTag).removeClass(activeClass);
	// jqeury doesnt start from 0
    $(listTag+' li:nth-child(' + (i+1)+ ')').addClass(activeClass);
}

function setTitle(title){
  $(titleTag).html(title);
}

function setButtonText(text){
  $(buttonTag).html(text);
}

/*
*   General Game properties
*/
function setBudget(budget){
  $(budgetTag).html("$ " + utils.commafy(budget));
}

function setDueDate(weeks){
  $(dueDateTag).html(weeks.toFixed(0) + " weeks");
}

function setPayroll(cost){
	$(payrollTag).html("$ " + utils.commafy(cost));
}

function setBudgetedWeeks(weekCount){
	$(budgetWeeksTag).html(weekCount.toFixed(0) + " weeks");
}


function setCash(cash){
  $(cashTag).html("$" + utils.commafy(cash));
  if(cash < 0){
    $(cashTag).css('color','#dc322f');//solarized @red
  } else {
    $(cashTag).css('color','#859900');//solarized @green
  }
}
function setProgress(progress){
  $(progressTag).html(progress.toFixed(0) + "%");
}
function setWeeks(weeks){
  $(weeksTag).html(weeks.toFixed(0) + " weeks");
  if(weeks < 0){
    $(weeksTag).css('color','#dc322f');//solarized @red
  } else {
    $(weeksTag).css('color','#859900');//solarized @green
  }
}
/*
*  Game Module properties 
*/
function setPayrollforModule(cost){
	$(payrollforModuleTag).html("$" + utils.commafy(cost));
}

function setLocations(teams,selectedCity){

  $(locationTag).html("");

  for(var key in teams){
    var city = cities[key];
    var location = $("<li></li>");
    location.append(city.name);
    
    var upIcon = $("<i></i>").attr("date-code",key).addClass("fa fa-chevron-up ticker tickerUp").click(function(){
      var code = $(this).attr("date-code");
      upLocationFuction(code);
    });
    var downIcon =   $("<i></i>").attr("date-code",key).addClass("fa fa-chevron-down ticker tickerDown").click(function(){
      var code = $(this).attr("date-code");
      downLocationFunction(code);
    });


    location.append($("<div></div>").addClass("tickerBox").html(upIcon).append(downIcon));
    location.append($("<div></div>").addClass("teamMultiplier").html("x" +teams[key]));

    if (city.name === selectedCity) {
      location.append($("<div></div>").addClass("teamMultiplierFade").html("+1"));
    }



    $(locationTag).append(location);
   }
}

function showSelectTeams(visible){
  $(selectTeamTagstatus).css('display',visible?"block":"none");
  $(selectTeamTag).css('display',visible?"block":"none");
}

function showProgressState(visible){
  $(progressStateTag).css('display',visible?"block":"none");
}

function setHomeCity(city){
 $(homeCityHeaderTag).css('color', '#93a1a1');
 $(homeCityTag).html(city);
}

module.exports = {
    setList: setList ,
    setBudgetedWeeks:setBudgetedWeeks,
    setPayroll:setPayroll,
    setLocations:setLocations,
    setPayrollforModule:setPayrollforModule,
    setListItemActive:setListItemActive,
    getActiveListItem:getActiveListItem,
    showSelectTeams:showSelectTeams,
    setBudget:setBudget,
    setDueDate:setDueDate,
    setTitle:setTitle,
    setCash:setCash,
    setProgress:setProgress,
    setWeeks:setWeeks,
    showProgressState:showProgressState,
    show:show,
    hide:hide,
    setHomeCity:setHomeCity,
    setButtonText:setButtonText,
    init:init,
    setListListner:setListListner,
};