// implement a timer variable that will countdown from a predetermined amount of time

// Selects element by
var timeEl = document.getElementById("timer");
var timeLeft = 90;

var questions = [
    {
        question: "Objects in JavaScript can contain which of the following?",
        answers: [
            { text: "Arrays",  correct: false}, 
            { text: "Variables",  correct: false}, 
            { text: "Functions",  correct: false}, 
            { text: "All of the above",  correct: true}, 
        ]
    },
    {
        question: "What function is used to view the contents of a variable?",
        answers: [
            { text: "console.log",  correct: true}, 
            { text: "addEventListener",  correct: false}, 
            { text: "getElementByID",  correct: false}, 
            { text: "querySelectorAll",  correct: false}, 
        ]
    },
    {
        question: "Which is NOT an example of a Primitive Data Type?",
        answers: [
            { text: "Number",  correct: false}, 
            { text: "String",  correct: false}, 
            { text: "Function",  correct: true}, 
            { text: "Boolean",  correct: false}, 
        ]
    },
    {
        question: "What pair of functions can be used to add elements to the HTML from the JavaScript file?",
        answers: [
            { text: "append & return",  correct: false}, 
            { text: "getElementByClass & setAttribute",  correct: false}, 
            { text: "create & setAttribute",  correct: true}, 
            { text: "create & append",  correct: false}, 
        ]
    },
];




function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " seconds left";

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

// Variables for start button action
var startBtn = document.getElementById('startBtn');
var startCard = document.querySelector('.start-card');
var gameCard = document.querySelector('.game-card');
var highScoreBtn = document.getElementById('view-high-score');

var questionField = document.getElementById('query');
var answerButtons = document.getElementById('answer-buttons');
var response = document.getElementById('response');
var nextBtn = document.getElementById("next-button");

var questionsIndex = 0;
var score = 0;

// event listener to start the game
startBtn.addEventListener('click', function() {
    setTime();
    startCard.setAttribute('style', 'z-index: 1;');
    gameCard.setAttribute('style', 'z-index: 2;');
    questionsIndex = 0;
    score = 0;
    updateQuestion();
});

console.log(questions);
// updates the content of the question cards
function updateQuestion () {
    var currentQuestion = questions[questionsIndex];
    response.setAttribute('style', 'display: none');
    questionField.innerHTML = currentQuestion.question;
    for (var i = 0; i < questions[questionsIndex].answers.length; i++ ) {
        answerButtons.children[i].textContent = currentQuestion.answers[i].text;
        if (currentQuestion.answers.correct) {
        answerButtons.children[i].dataset.correct = currentQuestion.answers[i].correct;
    }
    }
    answerButtons.addEventListener('click', answerSel);
};

function answerSel (event) {
    var selectedAnswer = event.target;
    var correctAnswer = selectedAnswer.dataset.correct === "true";
    if (correctAnswer) {
        response.firstChild.textContent = "Right!";
    } else {
        response.firstChild.textContent = "Wrong!";
    }
    response.setAttribute('style', 'display: block');

}

console.log(questions[0].question);
console.log(questions[1].answers[0].correct);


function initGame () {
    timeLeft = 90;
    startCard.setAttribute('style', 'z-index: 2');
}

initGame();

// logic determining whether a question is wrong or right
// data-set for each right and wrong response, <span> element updating the correct answer for wrong responses

// way to reduce the timer by 10 seconds after wrong questions
// continue button resuming timer and going on to next question

// log data function to locally store the results of the game
// init function hen the site loads to pull locally stored results into high-score table