var score = 0; // Create a variable to store the score in

var title = new Title('Soviet Russian Prison'); // Create a title element
var button = new Button('Start', btnPress);   // Create a button element

var hidden = new Text('You discover that you are next for an abusive experiment!');
hidden.hide();
var hidden2 = new Text('You find key to room');
hidden2.hide();
var hidden3 = new Button('Room 1', nothing);
hidden3.hide();
var hidden33 = new Button('Room 2', lab);
hidden33.hide();
var hidden333 = new Button('Room 3', locked);
hidden333.hide();
var hidden4 = new Button('Door locked');
hidden4.hide();
var hidden5 = new Text('You wear the gas mask');
hidden5.hide();
var hidden55 = new Text('you sprint for the exit');
hidden55.hide();
var hidden555 = new Text('you hear a gunshot, a tear gas bullet flies past you');
hidden555.hide();
var hidden6 = new Button('Unequip gas mask', dead);
hidden6.hide();
var hidden66 = new Text('If you didnt unequip and patiently waited please continue');
hidden66.hide();
var hidden666 = new Text('You survive the mustard with your gas mask and continue to the exit and escape')
hidden666.hide();



var scr = new Text(score);                    // Create a text element


setInterval(btnPress, 1000);   // Set up a loop

function nothing() {
  scr.edit('You find nothing')
}

function lab() {
  scr.edit('You find a gas mask in the lab')
}

function locked() {
  scr.edit('need different key')
}
function dead() {
  scr.edit('You died lol, RESTART')
}


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }



  if(score > 30) {
    hidden2.show(500);
  }
  if(score > 40) {
    hidden3.show(500);
  }
  if(score > 40) {
    hidden33.show(500);
  }
  if(score > 40) {
    hidden333.show(500);
  }
  if(score > 60) {
    hidden5.show(500);
  }
  if(score > 70) {
    hidden55.show(500);
  }
  if(score > 80) {
    hidden555.show(500);
  }
  if(score > 90) {
    hidden6.show(500);
  }
  if(score > 115) {
    hidden66.show(500);
  }
  if(score > 125){
    hidden666.show(500);
  }


}
