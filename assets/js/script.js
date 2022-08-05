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

var points = 10
var questionAmt = 5

startQuiz = () => {
    questionCount = 0
    score = 0
    activeQuestion = [...questions]
    nextQuestion()
}

nextQuestion = () => {
    if (activeQuestion.length === 0 || questionCount > questionAmt) {
        localStorage.setItem("currentScore", score)

        return window.location.assign("/highscores.html")
    }

    questionCount++

    var indexQuestions = Math.floor(Math.random() * otherQuestions.length)
    activeQuestion = otherQuestions[indexQuestions]
    questions.innerText = activeQuestion.questions

    answerChoices.forEach(options => {
        var choiceNumber = options.dataset["number"]
        options.innerText = activeQuestion["option" + choiceNumber]
    })

    activeQuestion.splice(indexQuestions,1)

    answerSelected = true

    answerChoices.forEach(options => {
        options.addEventListener("click", e =>{
            if (!answerSelected) 
            
            return

            answerSelected = false
            var choiceSelected = e.target
            var selectAnswer = choiceSelected.dataset["number"]

            var applyClass = selectAnswer == activeQuestion.answer ? "right" : "wrong"

            if (applyClass === "right") {
                increment(points)
            }

            choiceSelected.parentElement.classList.add(applyClass)
            
            setTimeout(() => {
                choiceSelected.parentElement.classList.remove(applyClass)
                otherQuestions()


            }, 1000)
           
        })
    })

    

}





