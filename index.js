 var readlineSync = require("readline-sync");
 const chalk = require('chalk');
 
     var score = 0;
    var userName = readlineSync.question("your name please? ");
	console.log("Welcome "+ chalk.yellowBright(userName) + " to --DO YOU KNOW Batman?--");
	
	//play function
	function play(question,answer)
	{
		var userAnswer = readlineSync.question(question);
		if(userAnswer === answer)
		{
			console.log(chalk.blue("right!"));
			score = score + 1;
		}
		else
		{
		  console.log(chalk.red("wrong!"));
		  score = score -1;
		}
		console.log("Current score: "+ score)
		console.log("*----------------------------------*")
	}
	
	var questionOne =
	{
	    question: "Who is bruce wayne actually? ",
	  	answer : "Batman"
	}
	
	var questionTwo = 
	{
	   question: "Whats the name of Batmans Vehicle ",
	   answer: "Batmobile"
	}
	var questionThree =
  {
     question: "Who is Batmans  archnemesis(enemy) ",
	   answer: "Joker"

  }
  var questionFour = {
 question: "Whats the name of the Famous series which depicts Batmans Childhood ",
	   answer: "Gotham"

  }
  var questionFive = {
     question: "Whats the name of Batmans Sidekick(main) ",
	   answer: "Robin"
  }
	var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive];
	
	//loop
	for(var i=0; i<questions.length; i++)
	{
	  var currentQuestion = questions[i];
	  play(currentQuestion.question, currentQuestion.answer)
	}
  console.log("You scored: ",score)