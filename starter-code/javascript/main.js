console.log("JS file is connected to HTML! Woo!");

var cardOne = 'queen', cardTwo = 'queen', cardThree = 'king', cardFour='king';
var divId = document.getElementById('game-board');

var createCards = function() {
    for(var i = 0; i < 4; i++) {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'card';
        divId.appendChild(innerDiv);
    }
};

createCards();

// console.log(cardOne == cardTwo);
// console.log(cardThree == cardFour);
// console.log(cardOne == cardFour);
// console.log(cardThree == cardTwo);
// if(cardTwo === cardFour) {
//     alert("You found a match!");
// }
// else {
//     alert("Sorry, try again.");
// }
// if(cardOne === cardTwo) {
//     alert("You found a match!");
// }
// else {
//     alert("Sorry, try again.");
// }
// if(cardThree === cardFour) {
//     alert("You found a match!");
// }
// else {
//     alert("Sorry, try again.");
// }












