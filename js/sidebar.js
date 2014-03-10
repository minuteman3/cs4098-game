var cities = require('./cities.json');
var $ = require('jquery');


var listTag = ".nav";
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

function init(){
  showSelectTeams(true);
  setTitle("Select Teams");
  setPayroll(0);
  setBudgetedWeeks(0);
  setPayrollforModule(0);
  setLocations([]);
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
		$(listTag).append($("<li></li>").html(elements[i]));
	}
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

/*
*   General Game properties
*/
function setBudget(budget){
// toLocaleString formats the number to use commas
  $(budgetTag).html("$" + budget.toLocaleString());
}

function setDueDate(weeks){
  $(dueDateTag).html(weeks.toFixed(0) + " weeks");
}

function setPayroll(cost){
  // toLocaleString formats the number to use commas
	$(payrollTag).html("$" + cost.toLocaleString());
}

function setBudgetedWeeks(weekCount){
	$(budgetWeeksTag).html(weekCount.toFixed(1) + " weeks");
}

/*
*  Game Module properties 
*/
function setPayrollforModule(cost){
	$(payrollforModuleTag).html("$" + cost.toLocaleString());
}

function setLocations(teams,selectedCode){

  $(locationTag).html("");

  for(var key in teams){
    var city = cities.cities[key];
    var location = $("<li></li>");
    location.append(city.name);
    location.append($("<div></div>").addClass("teamMultiplier").html("x" +teams[key]));
    
    if (key === selectedCode) {
      location.append($("<div></div>").addClass("teamMultiplierFade").html("+1"));
    }

    $(locationTag).append(location);
   }
}

function showSelectTeams(visible){
  $(selectTeamTag).css('visibility',visible?"visible":"hidden");
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
    show:show,
    hide:hide,
    init:init
};