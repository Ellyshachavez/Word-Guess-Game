console.log('js linked');
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



// defined variables

var gameRunning = false;
var losses = 0;
var wins = 0;
var guessesLeft = 8;
var pickedWord = "";
var pickedWordPlaceHolder = [];
var guessLetterBank= [];
var incorrectLetterBank= [];
var imageSoundByteLibrary = pickedWord;

//theme library
var wordLibrary = ["sublime","Weezer","foo fighters","green day","scar tissue",
    "everclear","zombie","inside out"];

// Reference DOM Elements in HTML
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $imageSoundByte = document.getElementById("image-sound-byte");

//First Function- Start initial values 
function intializer () {

}

// Add letters to letter bank 
function letterGuess () {

}

// Check Incorrect Letters
function checkIncorrect() {

}

// Check if score winning 
function checkWin () {

}

//Check if score is lossing 
function checkLoss () {
    
}

document.onkeydown = function (event) {
    console.log(event.key);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    
      if (guessLetterBank.includes(event.key)) {
        document.getElementById("start-win-loss").innerHTML = "Already Guessed this letter";;
        return false;
      }
      // push letter into lettersGuessedArray
      guessLetterBank.push(event.key);
  
      // send letter to function to check if correct
      letterGuess(event.key);
  
    } else {
      document.getElementById("start-win-loss").innerHTML = "Only letters will work, sorry!";

    }
  }



