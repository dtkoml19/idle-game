var score = 1; // Create a variable to store the score in

var title = new Title('Clicker game'); // Create a title element
var button = new Button('click here', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var hidden2 -= new Button('lmao');
hidden2.hide();
var scr = new Text(score);                    // Create a text element


setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }

  if(score > 40) {
    hidden2.show(500);
  }


}
