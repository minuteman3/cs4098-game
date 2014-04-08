var sidebar    = require('./sidebar.js');

var teamsSelected;
var selectedTeams;
var gameData;
var cities;
var budget;
var modules;

function init(_gameData,_cities,_modules,_budget){
  teamsSelected = {};
  selectedTeams = {};
  gameData = _gameData;
  cities = _cities;
  modules = _modules;
  budget = _budget;
}

function selectModule(cityName,nextIndex) {
  var index = sidebar.getActiveListItem();

  if(Object.keys(teamsSelected).length !== 0){
    selectedTeams[modules[index].name] = teamsSelected;
  }

  teamsSelected = selectedTeams[cityName]?selectedTeams[cityName]:{};
  var payroll = calculatePayrollforMod(teamsSelected);
  
  sidebar.setPayrollforModule(payroll);
  sidebar.setLocations(teamsSelected);
  sidebar.setListItemActive( nextIndex);

}


function addExtraDeveloperToCity(cityCode){
    teamsSelected[cityCode] = (teamsSelected[cityCode] || 0)+1;
    gameData.totalPayRoll += cities[cityCode].costPerWeek;

    sidebar.setPayroll(gameData.totalPayRoll);
    sidebar.setBudgetedWeeks(budget/gameData.totalPayRoll);

    // update information about this module
    sidebar.setPayrollforModule(calculatePayrollforMod(teamsSelected));
    sidebar.setLocations(teamsSelected,cityCode);
}

function deductDeverloperFromCity(cityCode){
    if(!teamsSelected[cityCode])
      return;
    teamsSelected[cityCode] = teamsSelected[cityCode] - 1;
    gameData.totalPayRoll += cities[cityCode].costPerWeek;

    sidebar.setPayroll(gameData.totalPayRoll);
    sidebar.setBudgetedWeeks(budget/gameData.totalPayRoll);

    // update information about this module
    sidebar.setPayrollforModule(calculatePayrollforMod(teamsSelected));
    sidebar.setLocations(teamsSelected,cityCode);
    if(teamsSelected[cityCode] === 0){
      delete teamsSelected[cityCode];
    }
}

function calculatePayrollforMod(teams){
  payroll = 0;
  for(var key in teams){
    payroll += cities[key].costPerWeek *  teams[key];
  }
  return payroll;
}

function allModulesHaveTeams(){
//add current module to the list
  var index = sidebar.getActiveListItem();
  if(Object.keys(teamsSelected).length === 0){
    delete selectedTeams[modules[index].name];
  }else{
    selectedTeams[modules[index].name] = teamsSelected;
  }
	return Object.keys(selectedTeams).length === modules.length;
}

function getDevelopers(module){
	var developers = {};
	Object.keys(selectedTeams[module]).forEach(function(key) {
      developers[cities[key].name] = selectedTeams[module][key];
  });

  return developers;
}

module.exports = {
init:init,
selectModule:selectModule,
addExtraDeveloperToCity:addExtraDeveloperToCity,
deductDeverloperFromCity:deductDeverloperFromCity,
calculatePayrollforMod:calculatePayrollforMod,
allModulesHaveTeams:allModulesHaveTeams,
getDevelopers:getDevelopers,
};
