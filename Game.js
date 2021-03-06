var Word = require ("./Word.js")
var inquirer = require ("inquirer")
var wordsArray = ["dog", "cat", "bird", "help me"]
var NewWord 
var counter = 0 
var userGuesses = []
var underScoreCounter
var numberOfTries = 10

initializeGame()
startGame()

function initializeGame(){
	counter = 0 
    userGuesses = []
    underScoreCounter
	numberOfTries = 10
	var word = wordsArray[Math.floor(Math.random() * wordsArray.length)]
	NewWord = new Word(word)
	NewWord.letterInstance()
}

function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}


function startGame() {

	console.log("Number of tries: ", numberOfTries)
    console.log("Used letters: ", userGuesses.join(", "))


	if (numberOfTries >= 0 ) {
		//play the game 
		inquirer.prompt([
			{
			 name: "user_letter",
			 message: "Make a guess: "
			 }
			]).then(function(answer){
				var userLetter = answer.user_letter
				if (isLetter(userLetter)){ 
					//when you guess the letter from a-z in english alphabet and it's one letter
					if (userGuesses.indexOf(userLetter) > -1) {
						console.log("Please try again and don not use the same letter.")
						NewWord.letterInstance()
						startGame()
					} else {
						userGuesses.push(userLetter)
						NewWord.letterInstance(userLetter) 

						if (NewWord.word.indexOf(userLetter) > -1){
							underScoreCounter = 0
							for (i = 0; i < NewWord.lettersArray.length; i++) {
								
								if (NewWord.lettersArray[i] === "_ ") {
									underScoreCounter++
									
								} else {
									//ignore
								}
			
							}

							if (underScoreCounter === 0){ // if inderscore is not = present then you win 
								console.log("You win!")
								initializeGame()
								startGame()
							} else {
								startGame()
							}

						} else {
							// the letter is not present in the word
							// decrement numberOfTries by one
							numberOfTries--
							// call game again if number of tries is not equal to zero
							if (numberOfTries > 0 ) {  
								startGame()
							} else {
								console.log("You lose!")
								initializeGame()
								startGame()
							}
						}

						
					}

				} else {
					console.log("This is not a letter. Please use only one letter per guess and use it one time only.")
					NewWord.letterInstance()
					startGame()
				}
			}) //end of prompt function

	} //else {
		// console.log("You lose!")
		// initializeGame()
		// startGame()
	//}
}


