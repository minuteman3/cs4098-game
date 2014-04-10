var sidebar = require("../../js/sidebar.js");
var test = require('tape');
var $ = require('jquery');
var teamPicker = require("../../js/teamPicker.js");

test('teamPicker:', function(t) {
    t.plan(10);


    $("<div>", {
        id: "sidebar"
    }).appendTo("body");

    var str = '<div id="sidebar-title">Select Teams</div>' +
      '<p id="homecityHeader" >Home City</p>' +
      '<p id="homecity" >Choose a city</p>' +
      '<ul class="nav">' +
        '<li class="active">Interface</li>' +
        '<li>Game Engine </li>' +
        '<li>Physics Engine</li>' +
      '</ul>' +
      
      '<div class="gameProperties progess-state">Cash<div id="cash" ></div></div>' +
      '<div class="gameProperties progess-state">Progress<div id="progress" ></div></div>' +
      '<div class="gameProperties progess-state">Weeks<div id="weeks" ></div></div>' +

      '<div class="gameProperties select-teams">Total Budget<div id="budget" >$20,000</div></div>' +
      '<div class="gameProperties select-teams">Weekly Payroll<div id="totalPayroll">$0</div></div>' +
      '<div class="gameProperties select-teams">Due Date<div id="duedate" >20 weeks</div></div>' +
      '<div class="gameProperties select-teams">Budgeted Weeks<div id="budgetedWeeks">0 weeks</div></div>' +
      '<div class="location-header select-teams">Module Cost<div id="costPerMonth">$0</div></div>' +
      '<ul id="locations" class="select-teams" ></ul>' +
      '<button  class="select-teams" id="btn-region">Select Teams</button>'; 
    
    $("#sidebar").html(str);
    $("#sidebar").hide();
    sidebar.init();

    var gameData = {
        homeCity:"San Francisco",
        weeksTilDueDate:10,
        projectBudget:12,
        totalPayRoll:50,
    };

    var cities = [
    {
        "coords": [
            37.6788056,
            -122.2880726
        ],
        "name": "San Francisco",
        "morale": 100,
        "productivity": 200,
        "costPerWeek": 12000,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    },
    {
        "coords": [
            40.43,
            -74
        ],
        "name": "New York",
        "morale": 100,
        "productivity": 125,
        "costPerWeek": 7500,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    }];

    var modules = [
     {
        "name": "AI Engine",
        "cost": 600
    },
    {
        "name": "Real-time Physics",
        "cost": 600
    }];

    teamsSelected ={
        0:3
    };

    t.doesNotThrow(function(){
        teamPicker.init(gameData,cities,modules,10000);
    },'init');

    t.doesNotThrow(function(){
        teamPicker.selectModule("AI Engine",0);
    },'selectModule');

    t.doesNotThrow(function(){
        teamPicker.addExtraDeveloperToCity(0);
    },'addExtraDeveloperToCity');

    t.doesNotThrow(function(){
         teamPicker.selectModule("Real-time Physics",1);
    },'selectModule');
  
    t.doesNotThrow(function(){
        teamPicker.addExtraDeveloperToCity(0);
    },'addExtraDeveloperToCity');

    t.equal(teamPicker.allModulesHaveTeams(),true,'allModulesHaveTeams');
   
   // make sure deduct is working
    t.doesNotThrow(function(){
        teamPicker.deductDeverloperFromCity(0);
    },'deductDeverloperFromCity');
    t.equal(teamPicker.allModulesHaveTeams(),false,'deductDeverloperFromCity');
    
    teamPicker.addExtraDeveloperToCity(0);
    teamPicker.allModulesHaveTeams();

    t.doesNotThrow(function(){
        teamPicker.calculatePayrollforMod({
            0:1,
            1:2});
    },'calculatePayrollforMod');


    t.doesNotThrow(function(){
        teamPicker.getDevelopers("AI Engine");
    },'getDevelopers');

    $("#sidebar").remove();
});