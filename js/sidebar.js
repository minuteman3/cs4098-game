var cities = require('./../config/cities.json');
var $ = require('jquery');
var utils      = require('./utils.js');

var listTag = ".nav";
var itemsTag = listTag + " li";
var payrollTag = "#totalPayroll";
var budgetWeeksTag = "#budgetedWeeks";
var locationTag = "#locations";
var payrollforModuleTag = "#costPerMonth";
var activeClass = "active";
var activeTag = "." + activeClass;
var gamePropertiesTag = ".gameProperties";
var selectTeamTag = ".select-teams";
var budgetTag = "#budget";
var dueDateTag = "#duedate";
var titleTag = "#sidebar-title";
var sidebarTag = '#sidebar';
var cashTag = "#cash";
var progressTag = "#progress";
var weeksTag = "#weeks";
var progressStateTag = ".progess-state";
var buttonTag = "#btn-region";

var itemSelectionFunc;

function init(itemSelection){
  showProgressState(false);
  showSelectTeams(true);
  setTitle("Select Teams");
  setPayroll(0);
  setBudgetedWeeks(0);
  setPayrollforModule(0);
  setLocations([]);

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
function setList(elements){
	$(listTag).empty();

	for(var i =0;i< elements.length;i++)
	{
    var item = elements[i];
    var html = item.name + "<br/><span class='modulecost'>Cost "+item.cost.toFixed(0)+"%</span>";
		$(listTag).append($("<li></li>").html(html).attr("date-name",item.name));
    
	}
  setListListner(itemSelectionFunc);
}

function setListListner(func){
  $(itemsTag).click(function(){
    var name = $(this).attr("date-name");
    console.log(name);
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
  }
}
function setProgress(progress){
  $(progressTag).html(progress.toFixed(0) + "%");
}
function setWeeks(weeks){
  $(weeksTag).html(weeks.toFixed(0) + " weeks");
  if(weeks < 0){
    $(weeksTag).css('color','#dc322f');//solarized @red
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
    var city = cities.cities[key];
    var location = $("<li></li>");
    location.append(city.name);
    location.append($("<div></div>").addClass("teamMultiplier").html("x" +teams[key]));
    
    if (city.name === selectedCity) {
      location.append($("<div></div>").addClass("teamMultiplierFade").html("+1"));
    }

    $(locationTag).append(location);
   }
}

function showSelectTeams(visible){
  $(selectTeamTag).css('display',visible?"block":"none");
}

function showProgressState(visible){
  $(progressStateTag).css('display',visible?"block":"none");
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
    setButtonText:setButtonText,
    init:init,
    setListListner:setListListner,
};