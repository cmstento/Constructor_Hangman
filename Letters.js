// * A string value to store the underlying character for the letter
//   * A boolean value that stores whether that letter has been guessed yet
//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


//Add CommentCollapse

// The Letter constructor is responsible for displaying either an underscore or the underlying character for each letter in the word


  // If a character is not a number or a letter, make it visible right away
  // Save the underlying character


// prototypes are optional

// Returns either an underscore or the underlying character depending on `this.visible`
//    because we call this function toString, when we call `this.letters.join` in
//    Word.js, JavaScript automatically uses the value we return here


// Accepts a user's guess

  // Otherwise return false

function Letter(letter) { 
	this.letter = letter;
	this.guess = false;
	this.blank = "_ ";	
	this.underScore = function(){
		if (this.guess === true){
			this.blank = this.letter
			return this.blank
	} else {
		//don't change anything
	}
  }
    this.checkUserGuess = function(userGuess){
    	if (userGuess === this.letter){
    	   
    	   this.guess = true;

    	} else {
    	   	//don't change anything
    	}	
    } 
}

// var LetterM = new Letter("M")
// 	console.log(LetterM.letter)
//     LetterM.underScore()
//     LetterM.guess= true
//     LetterM.underScore() 

module.exports = Letter
    

