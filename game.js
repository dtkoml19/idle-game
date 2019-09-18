var score = 0;

postToPage(score); // Print to the page

createButton('Poop', btnPress); // Make a button
changeTitle('Poop game');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}
