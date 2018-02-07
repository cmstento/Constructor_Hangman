var Letter = require("./Letters.js")

var Word = function(word){
	this.word = word
	this.lettersArray = word.split("")
	this.newLettersArray = this.lettersArray.map(l => new Letter(l))
	this.letterInstance = function(userGuess) {
		var checkGuessArray=[]
		var thisNewLettersArray = this.newLettersArray

		for (i=0;  i < thisNewLettersArray.length; i++){
			thisNewLettersArray[i].checkUserGuess(userGuess)
			thisNewLettersArray[i].underScore()            
     		checkGuessArray.push(thisNewLettersArray[i].blank)
		
	}
	console.log(checkGuessArray.join(""))
	this.lettersArray = checkGuessArray
	//this.lettersArray
  }
                                             
	this.toString = toString()
}

module.exports = Word


