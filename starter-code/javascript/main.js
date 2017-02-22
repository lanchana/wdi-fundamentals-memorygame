
// console.log("JS file is connected to HTML! Woo!");

// // var cardOne = 'queen', cardTwo = 'queen', cardThree = 'king', cardFour='king';
// var cards = ['queen', 'queen', 'king', 'king'];
// var cardsInPlay =[];

var cards = [
        'queen',
        'queen',
        'queen',
        'king',
        'king',
        'king'
    ];
cards = shuffleArray(cards);
console.log(cards[0]);
var cardsInPlay =[ ];
var gameBoard = document.getElementById('game-board');
var cardElement = document.getElementsByClassName('card');
var win = 0;
var lose = 0;
// console.log(cardsInPlay.length);
// var cards = randomCards[Math.floor(Math.random()*randomCards.length)];
// for(var i =0; i<cards.length; i++){
// console.log(cards[i]);
// }

function shuffleArray(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
};


var createCards = function() {
    for(var i = 0; i < cards.length; i++) {
        var cardDiv = document.createElement('div');
        // doc
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
    // console.log(cardsInPlay.length);
    if(cardsInPlay.length >= 2 ) {
            cardsInPlay = [];
            for(var i = 0; i < cardElement.length; i++){
            cardElement[i].innerHTML = " ";
        }
    }
    cardsInPlay.push(this.getAttribute('data-card'));

    if(this.getAttribute('data-card') === 'queen') {
        console.log("loaded image");
        this.innerHTML = '<img src="images/diamonds-884199_1280.png" alt="Queen of Spades"/>';
        console.log("loaded image");
    }
    else {
        console.log("loaded image");
        this.innerHTML = '<img src="images/spades-884197_1280.png" alt="King of Spades"/>';
        console.log("loaded image");
    }

    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        // cardsInPlay = [];
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






