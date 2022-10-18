var remainingTime = 75;
var timerId;
var timer = document.querySelector('#timer');
var startBtn = document.querySelector('#start-btn');
var nextBtn = document.querySelector('#next-btn');
var questionsContainer = document.querySelector('#questions-container');
var startPageContainer = document.querySelector('#start-page');
var quizQuestion = document.querySelector('#quiz-question');
var answerChoices = document.querySelector('#answer-choices');
var answerCheck = document.querySelector('#answer-check');
var highScores = document.querySelector('#highscore-link');
var submitBtn = document.querySelector('#submit-btn');
var clearBtn = document.querySelector('#clear-btn');
var initialsField = document.querySelector('#initials-field');
var restartBtn = document.querySelector('#restart-btn');
var playerScore = document.querySelector('#your-score');
var score = JSON.parse(localStorage.getItem('scores')) || [];







