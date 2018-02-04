var Letter = require("./letter.js");


var Word = function(randomWord) {
			
		this.randomWord = randomWord;
		this.letterObjArr = [];
		

		this.arrConstruct = function (randomWord) {
			

			for (var i = 0; i < this.randomWord.length; i++){ 

			var letter = this.randomWord.charAt(i);
			var letterObj = new Letter(letter);
			this.letterObjArr.push(letterObj);


			};


	},// end of arrContruct



		this.wordString = function (randomWord) {

			this.stringArr = [];
			this.arrString = "";
			this.correctArr = [];

			for (var i = 0; i < this.letterObjArr.length; i++){


				this.stringArr.push(this.letterObjArr[i].char);
				this.correctArr.push(this.letterObjArr[i].letter);



			}; //end of for

				this.arrString = this.stringArr.join(" ");

		}//end of wordString
	}; // end of Word

module.exports = Word;

