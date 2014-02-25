var $ = require('jquery');

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

function makeChoices(a,b,c){
  a = a || ["Option 1"];
  b = b || "";
  c = c || "btn-action";

  var ret = '<p>';

  // this should be a description of the event, indicating/hinting at the correct answer
  ret+= b;
  ret+= '</p><div class="modal-options">';

  a.forEach(function(b,i,arr) {
    b.funct = b.funct || "startGame("+i+")";
    ret += '<button class="'+c+'" onclick="pt.'+b.funct+'">' + b.name + '</button>';
  });
  ret += '</div>';

  return ret;
}

function dialog(a){
  a = a || "";
  var html = "<h1>Information</h1><p>";
  html += a;

  html += '</p><div class="modal-options">';
  html += '<button class="btn-action" onclick="pt.hidemodal()"> Continue </button>';
  html += '</div>';

  showmodal(html, true);
}

function pause () {
  if (!modal && !menu){
    var pausemenu = "<h1>Pause</h1>";
    pausemenu += makeChoices([{"name":"Restart","funct":"initialiseGame()"},
                              {"name":"Quit","funct":"initialiseGame()"}],
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
    makeChoices: makeChoices
};