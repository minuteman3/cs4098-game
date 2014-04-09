var sidebar = require("../../js/sidebar.js");
var Module = require("../../js/Module.js");
var test = require('tape');
var $ = require('jquery');

test('sidebar:', function(t){
    t.plan(23);

    $("<div>", {
        id: "sidebar"
    }).appendTo("body");

    var str = '<div id="sidebar-title">Select Teams</div>' +
      '<p id="homecityHeader" >Home City</p>' +
      '<p id="homecity" >Choose a city</p>' +
      '<ul class="nav">' +
        '<li class="active">Interface</li>' +
        '<li>Game Engine</li>' +
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
    var modules = [new Module({"Dublin": 1, "Mumbai": 1}, 400, "test")];
        sidebar.setListProgress(modules);
    },'setListProgress works');

    t.doesNotThrow(function(){
        sidebar.setListAllocation([
        {
          "name":"hi",
          "estimatedCost": 100,
          "allocatedCost": 1000
        },
        {
          "name":"there",
          "estimatedCost": 50,
          "allocatedCost": 30
        }

        ]);
    },'setListAllocation works');

    t.doesNotThrow(function(){
      sidebar.setLocations({});
    },"setLocations");

    sidebar.setLocations({"0":2,"3":5});

    t.equals($('#locations').text(),
      "San Francisco2 devsShanghai5 devs",
      "setLocations");

    sidebar.setBudget(1000000);
    sidebar.setBudgetedWeeks(10);
    sidebar.setButtonText("butt");
    sidebar.setCash(100000);
    sidebar.setDueDate(50.003);
    sidebar.setPayroll(1000000000);
    sidebar.setPayrollforModule(1000);
    sidebar.setProgress(57.56);
    sidebar.setTitle("title");
    sidebar.setWeeks(10.5);
    sidebar.showProgressState(true);
    sidebar.showSelectTeams(false);
    sidebar.setHomeCity("dublin");
    sidebar.setModuleManHours("there",8000);

    setTimeout(function() {
        t.equals(sidebar.getActiveListItem(),-1,'getActiveListItem works');
        sidebar.setListItemActive(1);
        t.equals(sidebar.getActiveListItem(),1,'setListItemActive works');

        // this exists to allow the browser rendering threads to complete
        t.equals($('#btn-region').html(),"butt",'setButtonText');
        t.equals($('#budget').html(),"$ 1,000,000",'setBudget');
        t.equals($('#budgetedWeeks').html(),"10 weeks",'setBudgetedWeeks');
        t.equals($('#cash').html(),"$100,000",'setCash');
        t.equals($('#costPerMonth').html(),"$1,000",'setPayrollforModule');
        t.equals($('#duedate').html(),"50 weeks",'setDueDate');
        t.equals($('#progress').html(),"58%",'setProgress');
        t.equals($('#sidebar-title').html(),"title",'setTitle');
        t.equals($('#totalPayroll').html(),"$ 1,000,000,000",'setPayroll');
        t.equals($('#weeks').html(),"11 weeks",'setWeeks');
        t.equals($('.progess-state').css('display'),"block",'showProgressState');
        t.equals($('.select-teams').css('display'),"none",'showSelectTeams');
        t.equals($(".modulecost[data-allocated-city='there']").html(),
            "Allocated 8000 man hrs per week",'setModuleManHours');
        
        sidebar.setHomeCity("dublin");
        t.equals($("#homecity").html(),"dublin","setHomeCity");
        $("#sidebar").remove();
    },0);

  
});


