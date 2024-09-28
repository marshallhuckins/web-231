"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Marshall Huckins
      Date: 09/28/24  

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll("div#quiz input");

function checkAnswers() {
  let correctCount = 0;
  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
        correctCount++;
        questionList[i].className = "";
    } else {
        questionList[i].className = "Wrong Answer";
    }
  }

}

// Add onclick event handler to the startQuiz object, running an anonymous function
startQuiz.onclick = function() {
  overlay.classList.replace("hidequiz", "showquiz");

  timeID = setInterval(countdown, 1000);
};

// Create the coundown Function to update the quize clock
function countdown() {
  if (timeLeft == 0) {
    clearInterval(timeID);

    const totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
        alert("Congratulations! You got 100%");
    } else {
        alert(`Incorrect answers: ${correctAnswers.length - totalCorrect} out of ${correctAnswers.length}`);
        timeLeft = quizTime;
        quizClock.value = timeLeft;
        overlay.classList.replace("showquiz", "hidequiz");
    }
  } else {
    timeLeft--;

    quizClock.value = timeLeft;
  }
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

