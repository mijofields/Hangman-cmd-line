
var Letter = function(letter) {

	this.letter = letter;
	this.guessed = false;
	this.char = "_";

	this.makeChar = function (){

		if (this.guessed === true) {

			this.char = letter;


		} else {

			this.char = "_";

			//this function feels suprfluous probably remove

				}	
	}; //end of character

  	this.letterCheck = function(userInput) {

  		this.userInput = userInput;

    	if (this.userInput === this.letter) {

    	this.guessed = true;
    	this.char = letter;
    	return;

  		};
  	}; //end of letterCheck

}; //end of letter constructor

// var test = new Letter ("a");
// test.guessed = true;
// test.makeChar();

// console.log(JSON.stringify(test));


module.exports = Letter;
