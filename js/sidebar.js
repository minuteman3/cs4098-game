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
  setTitle("Add Developers");
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
function setListAllocation(elements,nonselectable,selectteams){
  nonselectable = nonselectable || false;
  selectteams = selectteams || false;
  $(listTag).empty();

  for(var i =0;i< elements.length;i++)
  {
    var item = elements[i];
    var html = item.name + "<br/><span class='modulecost'>Estimated "+item.EstimatedCost.toFixed(0)+" man hrs</span><br/>";
    html += "<span class='modulecost' data-allocated-city='"+item.name+"' >Allocated "+item.AlloatedCost+" man hrs</span>";
    $(listTag).append($("<li></li>").html(html).attr("date-name",item.name));
  }
  if (nonselectable){
    setListListner(itemSelectionFunc);
  }
}

function setListProgress(modules,nonselectable,selectteams){
  nonselectable = nonselectable || false;
  selectteams = selectteams || false;
  $(listTag).empty();

  for(var i =0;i< modules.length;i++)
  {
    var moduleCities = modules[i].developersPerCity;
    var html = modules[i].name + "<br/>";
  
    Object.keys(moduleCities).forEach(function(city) {
            html += "<span class='modulecost' >" + city+ "</span></br>";
    });

    $(listTag).append($("<li></li>").html(html));
  }

}



function setModuleManHours(module,manHours){

  $(".modulecost[data-allocated-city='"+module+"']").html("Allocated " + manHours + " man hrs per week ");
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

function setLocations(teams){

  $(locationTag).html("");

  for(var key in teams){
    var city = cities[key];
    var location = $("<li>");
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
    location.append($("<div>").addClass("teamMultiplier").html(teams[key] + " devs"));

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
    setModuleManHours:setModuleManHours,

    setListAllocation:setListAllocation,
    setListProgress:setListProgress,
};
