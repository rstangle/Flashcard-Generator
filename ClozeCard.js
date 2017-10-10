var inquirer = require("inquirer");
var fs = require("fs");
var cloze = require('./cloze.json');

var ClozeCard = function(text, cloze) {
  this.partial;
  // if statement for the partial statement to remove the cloze...

  this.cloze = cloze;
  this.text = text;
};

var count = 0;
// var partialQuestion = 
//User has to enter the data before the constructor can build out the new card.  
//New card is then pushed into an array to get the values for the display playback.
var clozeQuestion = function() {
		if (count < cloze.length) {
			inquirer.prompt([
      			{
    	  		  name: "question",
      	  		  message: "Question: " + cloze[count].partial
    			}, {
      	  		  name: "answer",
      	  		  message: cloze[count].cloze
      			}
  			]).then(function(answers) {
    			// var newQuestion = new BasicCard(answers.question, answers.answer);
    			count++;
    			clozeQuestion();
    		});
    	}
		else {
			console.log("All questions asked");
		}
};


clozeQuestion();

module.exports = ClozeCard;