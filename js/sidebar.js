var cities = require('./cities.json');
var $ = require('jquery');


var listTag = ".nav";
var payrollTag = "#totalPayroll";
var budgetWeeksTag = "#budgetedWeeks";
var locationTag = "#locations";
var payrollforModuleTag = "#costPerMonth";
var activeClass = "active";
var activeTag = "." + activeClass;



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


/*
*   General Game properties
*/
function setPayroll(cost){
	$(payrollTag).html("$" + cost);
}

function setBudgetedWeeks(weekCount){
	$(budgetWeeksTag).html(weekCount.toFixed(1) + " weeks");
}



/*
*  Game Module properties 
*/
function setPayrollforModule(cost){
	$(payrollforModuleTag).html("$" + cost);
}

 
function setLocations(teams,selectedCode){

  $(locationTag).html("");

  for(var key in teams){

  	var location = $("<li></li>");
  	location.append(cities.names[key]);
  	location.append($("<div></div>").addClass("teamMultiplier").html("x" +teams[key]));
    
    if (key === selectedCode) {
    	location.append($("<div></div>").addClass("teamMultiplierFade").html("+1"));
    }

    $(locationTag).append(location);
   }
}




module.exports = {
    setList: setList ,
    setBudgetedWeeks:setBudgetedWeeks,
    setPayroll:setPayroll,
    setLocations:setLocations,
    setPayrollforModule:setPayrollforModule,
    setListItemActive:setListItemActive,
    getActiveListItem:getActiveListItem,
};