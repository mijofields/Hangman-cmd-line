var Letter = require("./letter.js");


// letterObjArr = [];


var Word = function(randomWord) {
			
		this.randomWord = randomWord;
		this.letterObjArr = [];

		this.arrConstruct = function () {
			

			for (var i = 0; i < this.randomWord.length; i++){ 

			var letter = this.randomWord.charAt(i);
			var letterObj = new Letter(letter);
			console.log(letterObj);
			this.letterObjArr.push(letterObj);


			};


	};// end of arrContruct



		this.wordString = function () {

			console.log(this.letterObjArr.length);

			for (var i = 0; this.letterObjArr.length; i++){


				console.log(this.letterObjArr[i].char);


				// this.letterObjArr[i].character();



			}; //end of for

		}//end of wordString
	} // end of Word

var test = new Word ("mike");
test.arrConstruct();
test.wordString();
console.log("stringify" + JSON.stringify(test));








 // end of word