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
  }
                                             
	this.toString = toString()
}

// var NewWord = new Word("hello")
// 	//console.log(NewWord)
// 	//console.log(NewWord.newLettersArray)
//     NewWord.letterInstance()
    
//     NewWord.letterInstance("h")

module.exports = Word


