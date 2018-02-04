
var Word = require("./word.js");
var chalk = require('chalk');
var inquirer = require('inquirer');

var wordArray = ["lasagne", "spaghetti", "macaroni", "tortellini", "rigatoni", "ravioli", "linguini", "fusilli", "fettuccine", "lingunine", "pappardelle", "farfalle", "manicotti", "campanelle", "scialatelli"];
var guessesLeft = 6;
var randomWord = "";
var gameWord = {};
var letterGuesses = [];
var wins = 0;
var losses = 0;


function gameDecision () {

inquirer
    .prompt({
      name: "start",
      type: "confirm",
      message: chalk.bold.greenBright("Are you ready to play pasta Hangman?!"),
      
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
console.log(chalk.bold.blue("Here's your pasta, get guessing and earn your dough..."));
console.log("Pasta: " + randomWord);
playGame();

};


function playGame() {

	chalk.bgWhite(console.log(gameWord.arrString));

inquirer
    .prompt([

    {

      name: "guess",
      type: "input",
      message: chalk.redBright("Which letter would you like to guess?"),
      validate: function (answer) {

           return /[a-z]/gi.test(answer);  //this is a  validation that check for alpha or numeric [a-z1-9]
           									//regex





      
      
    }}])

.then(function(answer) {

	userInput = answer.guess.trim().toLowerCase();
	check = gameWord.correctArr.indexOf(userInput);
	repeatCheck = letterGuesses.indexOf(userInput);

	console.log("pos in arr: " + repeatCheck);

	if (repeatCheck !== -1){


		console.log(chalk.yellow(" You already guessed ") + chalk.blueBright(userInput.toUpperCase() + ",") + chalk.green(" try another..."));
		playGame();



	} else if (check === -1) {


		guessesLeft--;
		console.log(" " +chalk.blue(userInput.toUpperCase() + " was a bad guess.") +  chalk.yellowBright(" You have ") + chalk.blue(guessesLeft) + chalk.yellowBright(" wrong guesses remaining..."));
		letterGuesses.push(userInput);
		playGame();


	} else {

		console.log(" " + chalk.bold.magenta(userInput.toUpperCase() + " was a good guess!"));
		letterGuesses.push(userInput);				

		for (var i = 0; i < gameWord.letterObjArr.length; i ++) {


		gameWord.letterObjArr[i].letterCheck(userInput);


	}


	// letterGuesses.push(userInput);
	// console.log("Correct guess!");

		gameWord.wordString();
		playGame();

};


	
		


}); //end of then








};//end of playGame


gameDecision();