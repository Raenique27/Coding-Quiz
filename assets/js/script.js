var quizQuestion = document.querySelector("#quiz-content");
var highscoreTimer = document.querySelector("#highscore-timer");
var timer = highscoreTimer.querySelector("p");
var answerChoices = quizQuestion.querySelector("ul");
var results = document.querySelector("#results-content");
var pageContent = document.querySelector("main");
var highscoreContainer = document.querySelector("#highscore-container");
var correctWrong = document.querySelector("#correct-wrong");
var initialsInput = highscoreContainer.querySelector("input");
var submitbtn = highscoreContainer.querySelector("button");
var highscorePage = document.querySelector("#highscore-page");



var questions = [ 
    {
    question: "Commonly used data types DO NOT include:",
    answer: "3. alert",
    options: ["1. string", "2. boolean", "3. alert", "4. number"]
    
},
{
    question:"The condition in an if/else statement is enclosed with _______.",
    answer: "3. parenthesis",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]

},
{
    question: "Arrays in javascript can be used to store ______.",
    answer: "4. all of the above",
    options: ["1. numbers and strings", "2. booleans", "3. other arrays", "4. all of the above"]
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answer: "2. quotes",
    options:["1. commas", "2. quotes", "3. curly brackets", "4. parenthesis"]
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answer: "4. console.log",
    options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"]
},
];





