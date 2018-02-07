var Word = require ("./Word.js")
var inquirer = require ("inquirer")
var NewWord = new Word("abstruse")
var counter = 1 
var numberOfCorrectGuesses = 1

NewWord.letterInstance()

function startGame(){
	if (counter <= 10 ){
		
		inquirer.prompt([
	   {
		name: "user_letter",
		message: "Make a guess"
	    }

	   ]).then(function(answer){
			answer.user_letter
			var userLetter = answer.user_letter
			NewWord.letterInstance(userLetter)

			if (NewWord.word.indexOf(userLetter) > -1){
					numberOfCorrectGuesses++
					if (numberOfCorrectGuesses === NewWord.word.length){
					console.log("You win!")
					  return
					} else {
					//ignore
					}
			  }
			counter++
            startGame()
	    })
       
	} else {
		console.log("You lose!")
		return
	}
}

startGame()





