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

var changeQuestions, currentQuestion;

// Start button will bring up first question and a next button will display
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestion++
    NextQuestion();
});

// timer
function startTimer() {
    remainingTime--;
    timer.textContent = 'Time: ' + remainingTime;
    if (remainingTime <= 0) {
        collectScore();
    }
}

// Begin quiz
function startQuiz() {
    timerId = setInterval(startTimer, 1000);
    startPageContainer.classList.add('hide');
    changeQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    quizQuestion.classList.remove('hide');

    // timer will begin when the start button is clicked
    startTimer();
    NextQuestion();
};

// Continue to next question
function NextQuestion() {
    reset();
    showQuestion(changeQuestions[currentQuestion]);
};

// Show Questions
function showQuestion(question) {
    quizQuestion.innerText = question.question
    question.answers.forEach(answer => {
        var btn = document.createElement('button')
        btn.innerText = answer.text
        btn.classList.add('btn')
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener('click', selectAnswer)
        answerChoices.appendChild(btn)
    })
};


// Reset function
function reset() {
    nextBtn.classList.add('hide')
    answerCheck.classList.add('hide')
    while (answerChoices.firstChild) {
        answerChoices.removeChild
        (answerChoices.firstChild)
    }
};







