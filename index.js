
var Word = require("./word.js");
var chalk = require('chalk');
var inquirer = require('inquirer');

var wordArray = ["lasagne", "spaghetti", "macaroni", "tortellini", "rigatoni", "ravioli", "linguini", "fusilli", "fettuccine", "lingunine", "pappardelle", "farfalle", "manicotti", "campanelle", "scialatelli"];
var guessesLeft = 6;
var randomWord = "";
var gameWord = {};


function gameDecision () {

inquirer
    .prompt({
      name: "start",
      type: "confirm",
      message: "Are you ready to play pasta Hangman?!",
      
    })
     .then(function(answer) {

   		switch (answer.start) {
        	case true:
          	initGame();
          	break;

        	case false:
          	console.log("OK, come back when you are ready to play!")
          	break;



          };

     }); //end of then

}; //end gameDecision


function initGame () {

randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
gameWord = new Word (randomWord);
gameWord.arrConstruct();
gameWord.wordString();
console.log("Here's your pasta, get guessing and earn your dough...");
console.log("Pasta: " + randomWord);
playGame();

};


function playGame() {

	console.log(gameWord.arrString);

inquirer
    .prompt([

    {

      name: "guess",
      type: "input",
      message: "Which letter would you like to guess?",
      validate: function (answer) {

           return /[a-z]/gi.test(answer);  //this is a  validation that check for alpha or numeric [a-z1-9]
           									//regex





      
      
    }}])

.then(function(answer) {

	userInput = answer.guess.toLowerCase();
	var check = gameWord.correctArr.indexOf(userInput);

	if (check === -1 ){

		guessesLeft--;
		console.log("Incorrect guess you have " + guessesLeft + " guesses left");
		playGame();



	} else {


	for (var i = 0; i < gameWord.letterObjArr.length; i ++) {


		gameWord.letterObjArr[i].letterCheck(userInput);

	};

	gameWord.wordString();
	playGame();


}});







};//end of playGame


gameDecision();