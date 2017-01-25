console.log("JS file is connected to HTML! Woo!");
var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour="king";
console.log(cardOne == cardTwo);
console.log(cardThree == cardFour);
console.log(cardOne == cardFour);
console.log(cardThree == cardTwo);
if(cardTwo === cardFour) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again.");
}
if(cardOne === cardTwo) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again.");
}
if(cardThree === cardFour) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again.");
}
