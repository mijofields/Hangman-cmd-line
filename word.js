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


	},// end of arrContruct



		this.wordString = function () {

			this.stringArr = [];
			this.arrString = "";

			console.log(this.letterObjArr.length);
			console.log(this.letterObjArr);

			for (var i = 0; i < this.letterObjArr.length; i++){


				this.stringArr.push(this.letterObjArr[i].char);
	


				// this.letterObjArr[i].character();



			}; //end of for

				this.arrString = this.stringArr.join(" ");

		}//end of wordString
	}; // end of Word

var test = new Word ("bicycle");
test.arrConstruct();
test.wordString();
console.log("arrString " + test.arrString);
console.log("stringify" + JSON.stringify(test));








 // end of word