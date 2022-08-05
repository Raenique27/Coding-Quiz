var quizQuestion = document.querySelector("#question-title");
var highscoreTimer = document.querySelector("#highscore-timer");
var timer = highscoreTimer.querySelector("p");
var answerChoices = Array.from(document.querySelectorAll(".choice-text"));
var results = document.querySelector("#results-content");
var pageContent = document.querySelector("main");
var highscoreContainer = document.querySelector("#highscore-container");
var correctWrong = document.querySelector("#correct-wrong");
var initialsInput = highscoreContainer.querySelector("input");
var submitbtn = highscoreContainer.querySelector("button");
var highscorePage = document.querySelector("#highscore-page");

var activeQuestion = {}
var answerSelected = true
var score = 0
var questionCount = 0
var otherQuestions = {}


var questions = [ 
    {
    question: "Commonly used data types DO NOT include:",
    options: ["1. string", "2. boolean", "3. alert", "4. number"],
    answer: 3,
    
},
{
    question:"The condition in an if/else statement is enclosed with _______.",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: 3,

},
{
    question: "Arrays in javascript can be used to store ______.",
    options: ["1. numbers and strings", "2. booleans", "3. other arrays", "4. all of the above"],
    answer: 4,
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    options:["1. commas", "2. quotes", "3. curly brackets", "4. parenthesis"],
    answer: 2,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: 4,
},
];

var points = 100
var questionAmt = 5

var startQuiz = function () {
    questionCount = 0
    score = 0
    activeQuestion = [questions[i]]
    nextQuestion()
}

var nextQuestion = function () {
    if (activeQuestion.length === 0 || questionCount > questionAmt) {
        localStorage.setItem("currentScore", score)

        return window.location.assign("/highscores.html")
    }

    questionCount++

    activeQuestion = otherQuestions[questions[i]]
    questions.innerHtml = activeQuestion.questions

    answerChoices.forEach(function (options) {
        var choiceNumber = options.dataset["number"]
        options.innerHTML = activeQuestion["option" + choiceNumber]
    })

    activeQuestion.splice(questions[i],1)

    answerSelected = true

    answerChoices.forEach(function (options) {
        options.addEventListener("click", function(event) {
            if (!answerSelected) 

            return

            answerSelected = false
            var choiceSelected = event.target
            var selectAnswer = choiceSelected.dataset["number"]

            var applyClass = selectAnswer
            if (selectAnswer == activeQuestion.answer) {
                
            }
        })
    })


}





