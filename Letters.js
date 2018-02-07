
function Letter(letter) { 
	this.letter = letter;
	this.guess = false;
	this.blank = "_ ";	
	this.underScore = function(){
		if (this.guess === true){
			this.blank = this.letter + " "
			return this.blank
	} else { 
		if (letter === " ") {
			this.blank = " "
			this.guess = true
		}
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

module.exports = Letter
    

