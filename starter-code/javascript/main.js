// console.log("JS file is connected to HTML! Woo!");

// // var cardOne = 'queen', cardTwo = 'queen', cardThree = 'king', cardFour='king';
// var cards = ['queen', 'queen', 'king', 'king'];
// var cardsInPlay =[];

var cards = [
        'queen',
        'queen',
        'king',
        'king'
    ];
var cardsInPlay =[ ];
var gameBoard = document.getElementById('game-board');
var cardElement = document.getElementsByClassName('card');
var win = 0;
var lose = 0;
// var reset =document.getElementById('reset');

var createCards = function() {
    for(var i = 0; i < cards.length; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        gameBoard.appendChild(cardDiv);
    }
    createBoard();
};

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        cardElement[i].setAttribute('data-card', cards[i]);
        cardElement[i].addEventListener('click', isTwoCards);
    }
};

var isTwoCards = function() {
    cardsInPlay.push(this.getAttribute('data-card'));

    if(this.getAttribute('data-card') === 'queen') {
        this.innerHTML = '<img src="images/diamonds-884199_1280.png" alt="Queen of Spades"/>';
    }
    else {
        this.innerHTML = '<img src="images/spades-884197_1280.png" alt="King of Spades"/>';
    }

    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }
};

var isMatch = function() {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        win++;
    }
    else
    {
        alert("Sorry, try again.");
        lose++;
    }
    // for(var i = 0; i < cardElement.length; i++){
//         cardElement[i].innerHTML = " ";
//     }
};

document.getElementById("reset").onclick = function() {
   for(var i = 0; i < cardElement.length; i++){
        cardElement[i].innerHTML = " ";
    }
};

document.getElementById("score").onclick = function() {
   alert("Your score\n" + "No. of Wins: " + win + "\nNo. of Loses: " + lose);
};

createCards();






