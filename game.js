var score = 0; // Create a variable to store the score in

var title = new Title('Soviet Russian Prison'); // Create a title element
var button = new Button('Start', btnPress);   // Create a button element
var hidden = new Button('You discover that you are next for an abusive experiment!');
hidden.hide();
var hidden2 = new Button('You find key to room');
hidden2.hide();
var hidden3 = new Button('Room 1');
hidden3.hide();
var hidden33 = new Button('Room 2');
hidden33.hide();
var hidden333 = new Button('Room 3');
hidden333.hide();
var hidden4 = new Button('Door locked');
hidden4.hide();
//var hidden44 = new Button('Door locked');
//hidden44.hide();
//var hidden444 = new Button('Door unlocked');
//hidden444.hide();
//var hidden5 = new Button('You find and equip a gasmask');
//hidden5.hide();

var scr = new Text(score);                    // Create a text element


setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }

  function btnPress() {
    score++;         // Increase the score
    scr.edit(score); // Update the page with the new score
    if(score > 100) {
      hidden4.show();
    }

  if(score > 40) {
    hidden2.show(500);
  }
  if(score > 70) {
    hidden3.show(500);
  }
  if(score > 70) {
    hidden33.show(500);
  }
  if(score > 70) {
    hidden333.show(500);
  }
  if(score > 90) {
    hidden4.show(500);
  }
  //if(score > 90) {
    //hidden5.show(500);
  //}


}
