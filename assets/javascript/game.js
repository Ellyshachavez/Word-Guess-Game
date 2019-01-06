// creat word library
// link sound files 
//create variables (win/loss/guessed)
//reference DOM elements 
//check place holder 
//correct letter bank 
//incorrect letter bank 
//create function for new game & resart game 
// function that checks which letter is picked 
// run and see if letter is incorrect 
//takes letter into guessed letters
//function checks if we win
//add event listner for new game 
//add onkey up event for letter guess 





var gameRunning = false;
var losses = 0;
var wins = 0;
var guessesLeft = 8;
var pickedWord = "";
var pickedWordPlaceHolder = [];
var guessLetterBank= [];
var incorrectLetterBank= [];
var imageSoundByteLibrary = [];

var wordLibrary = ["sublime","Weezer","foo fighters","green day","scar tissue",
    "everclear","zombie","inside out"];

var $newGame = document.getElementById("new-game");
var $placeHolders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("gusses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("loses");
var $imageSoundByte = document.getElementById("image-sound-byte");

function newGame [] {
    gameRunning = true;
    guessesLeft = 8;
    guessLetterBank= [];
    incorrectLetterBank = [];
    pickedWordPlaceHolder = [];
}

pickedWord = wordLibrary[Math.floor[Math.random[] + wordLibrary.length]];

for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
        pickedWordPlaceHolder.push(" ");
    } else {
        pickedWordPlaceHolder.push{"_"};
    }
}

$guessesLeft.textContent = guessesLeft;

