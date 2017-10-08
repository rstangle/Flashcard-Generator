//Not sure if this will be needed, but couldn't hurt to have.
var inquirer = require("inquirer");
var fs = require("fs");
var basic = require('./basic.json');
// console.log(basic);

// OK... this prints out the Question from the basic.json file... what now... think think think.
// console.log('Question: ' + basic[0].front);
// console.log();
// console.log('Answer: ' + basic[0].back);


var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

// BasicCard.prototype.printQuestion = function() {
// 	console.log(this.front);
// };

var count = 0;

var askQuestion = function() {
		if (count < basic.length) {
			inquirer.prompt([
      			{
    	  		  name: "question",
      	  		  message: "Question: " + basic[count].front
    			}, {
      	  		  name: "answer",
      	  		  message: basic[count].back
      			}
  			]).then(function(answers) {
    			// var newQuestion = new BasicCard(answers.question, answers.answer);
    			count++;
    			askQuestion();
    		});
    	}
		else {
			console.log("All questions asked");
		}
};


// askQuestion();

//Creates the questions in variables. Hard coded for now. Trying to wrap my brain around this.

// var questionOne = new BasicCard("George ... was the first president of the United States.", "Washington");
// var questionTwo = new BasicCard("The ... was an agreement signed by British and American leaders that stated the United States of America was a free and independent country.", "Treaty of Paris");
// console.log("Question 1: " + questionOne.front);
// console.log("--------------------------");
// console.log("Answer: " + questionOne.back);


// Exporting the BasicCard constructor which we will use in main.js
module.exports = BasicCard;
module.exports = askQuestion;