var inquirer = require("inquirer");
var fs = require("fs");
var cloze = require('./cloze.json');

var ClozeCard = function(partial, cloze) {
  this.partial = partial;
  this.cloze = cloze;
};

var count = 0;
var partialQuestion = 

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