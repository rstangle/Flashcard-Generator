// requiring our Classroom module exported from classroom.js
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var basic = require('./basic.json');

// Arrays needed for basic and cloze objects from JSON files.
var basicArr = [];
var clozeArr = [];
// make new cards from user inputs and push them to arrays.
// use the array objects to cycle through the game.

// var newQuestion = new BasicCard(basic.front, basic.back);
// console.log("New Question: " + newQuestion);

// 'for loop' to cycle through the basic.json file and push the new BasicCard to the basicArr[]
for (var i = 0; i < basic.length; i++) {
  var newBasic = new BasicCard(basic.front, basic.back);
  // console.log("New Question: " + newQuestion);
  basicArr.push(newBasic);
  // console.log("Basic Array contents: " + basicArr[1].front);

}
 // Keep getting undefined as the contents of basicArr and I don't know why. Very confused and a bit disappointed.
  console.log("basicArr Contents: " + basicArr.front);

inquirer
  .prompt([
    {
      type: "message",
      message: "Welcome to Flash Your Cards",
      name: "message"
    },
    {
      type: "confirm",
      message: "Would you like to test yourself",
      name: "confirm",
      default: true    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponses.
    if (inquirerResponse.confirm) {
      askQuestion();
      // console.log(BasicCard);
    }
    else {
      console.log("\nThat's okay come back when you've studied.\n");
    }
  });

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
