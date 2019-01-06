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





var newGame; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 10; 
var losses = 0;
var wins = 0;
var imageSoundByte;

var wordLibrary = ["sublime","Weezer","foo fighters","green day","scar tissue","everclear","zombie","inside out"];

var $newGame = document.getElementById("");
var $placeHolders = document.getElementById("");
var $guessedLetters = document.getElementById("");
var $guessesLeft = document.getElementById("");
var $wins = document.getElementById("");
var $losses = document.getElementById("");