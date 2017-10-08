// requiring our Classroom module exported from classroom.js
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");


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
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponses.
    if (inquirerResponse.confirm) {
      BasicCard();
      // console.log(BasicCard);
    }
    else {
      console.log("\nThat's okay come back when you've studied.\n");
    }
  });


// askQuestion();
