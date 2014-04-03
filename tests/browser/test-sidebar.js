var sidebar = require("../../js/sidebar.js");
var test = require('tape');
var $ = require('jquery');

test('sidebar:', function(t){
    t.plan(18);

    $("<div>", {
        id: "sidebar"
    }).appendTo("body");

    var str = '<div id="sidebar-title">Select Teams</div>' +
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
    
    $("sidebar").html(str);

    
    t.doesNotThrow(function(){
        sidebar.init();
    },'init works');

    t.doesNotThrow(function(){
      sidebar.show();
    },'show works');

    t.doesNotThrow(function(){
        sidebar.hide();
    },'hide works');

    t.doesNotThrow(function(){
        sidebar.setList([
        {
          "name":"hi",
          "cost": 100
        },
        {
          "name":"there",
          "cost": 50
        }

        ]);
    },'setList works');

    t.equals(sidebar.getActiveListItem(),0,'getActiveListItem works');

    sidebar.setListItemActive(1);
    t.equals(sidebar.getActiveListItem(),1,'setActiveListItem works');

    sidebar.setBudget(1000000);
    t.equals($('#budget').html(),"$ 1,000,000",'setBudget');
    t.equals($('').html(),"$ 1,000,000",'setBudgetedWeeks');
    t.equals($('').html(),"$ 1,000,000",'setButtonText');
    t.equals($('').html(),"$ 1,000,000",'setCash');
    t.equals($('').html(),"$ 1,000,000",'setDueDate');
    t.equals($('').html(),"$ 1,000,000",'setPayroll');
    t.equals($('').html(),"$ 1,000,000",'setPayrollforModule');
    t.equals($('').html(),"$ 1,000,000",'setProgress');
    t.equals($('').html(),"$ 1,000,000",'setTitle');
    t.equals($('').html(),"$ 1,000,000",'setWeeks');
    t.equals($('').html(),"$ 1,000,000",'showProgressState');
    t.equals($('').html(),"$ 1,000,000",'showSelectTeams');

    $("#sidebar").remove();
});


