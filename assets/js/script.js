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
var initialsField = document.querySelector('#user-name');
var restartBtn = document.querySelector('#restart-btn');
var playerScore = document.querySelector('#user-score');
var scores = JSON.parse(localStorage.getItem('scores')) || [];

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
        btn.addEventListener('click', selectAnAnswer)
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

// Select answer
function selectAnAnswer(e) {
    var selectedAnswer = e.target;
    var correctAnswer = selectedAnswer.dataset.correct;
    answerCheck.classList.remove('hide')

    // Check if the answer is correct or not
    if (correctAnswer) {
        answerCheck.innerHTML = 'Correct!'
    } else {
        answerCheck.innerHTML = 'Incorrect!';
        if(remainingTime <= 10) {
            remainingTime = 0;
        } else {
            // If user selects the wrong answer deduct 10sec from remaining time
            remainingTime -= 10;
        }
    }

    Array.from(answerChoices.children).forEach(btn => {
        statusClass(btn, btn.dataset.correct)
    })

    if(changeQuestions.length > currentQuestion + 1) {
        nextBtn.classList.remove('hide')
        answerCheck.classList.remove('hide')
    } else {
        startBtn.classList.remove('hide')
        storeScore();
    }
};

// Show the correct answer based on button colors
function statusClass(element, correct) {
    resetStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
};

// Remove class
function resetStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};


// Store quiz scores
function storeScore() {
    clearInterval(timerId);
    timer.textContent = 'Time: ' + remainingTime;
    setTimeout(function () {
        questionsContainer.classList.add('hide');
        document.querySelector('#scores-container').classList.remove('hide');
        document.querySelector('#your-score').textContent = 'Your final score is ' + remainingTime;
    }, 2000)
};

var showScore = function () {
    // Collect score from local storage

    if (!storedScores) {
        return false;
    }

    // Convert scores from string format into array
    storedScores = JSON.parse(storedScores);
    var initials = document.querySelector('#initials-field').value;
    var newScore = {
        score: remainingTime,
        initials: initials
    }
    storedScores.push(newScore);
    
    storedScores.forEach(score => {
        initialsField.innerText = score.initials
        playerScore.innerText = score.score
    })
};

// Show highscores
function showHighScores(initials) {
    document.querySelector('#highscores').classList.remove('hide')
    document.querySelector('#scores-container').classList.add('hide');
    startPageContainer.classList.add('hide');
    questionsContainer.classList.add('hide');
    if (typeof initials == 'string') {
        var score = {
            initials, remainingTime
        }
        scores.push(score)
    }

    var highscore  = document.querySelector('#highscore');
    highscore.innerHTML = '';
    
    for (i=0; i<scores.length; i++) {
        var nameDiv = document.createElement('div');
        nameDiv.setAttribute('class', 'nameDiv');
        nameDiv.innerText = scores[i].initials;
        var scoreDiv = document.createElement('div');
        scoreDiv.setAttribute('class', 'scoreDiv');
        scoreDiv.innerText = scores[i].remainingTime;

        highscore.appendChild(nameDiv);
        highscore.appendChild(scoreDiv);
    }

    localStorage.setItem('scores', JSON.stringify(scores));
};








