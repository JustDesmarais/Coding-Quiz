// implement a timer variable that will countdown from a predetermined amount of time

// Selects element by
var timeEl = document.getElementById("timer");

var mainEl = document.getElementById("main");

var timeLeft = 90;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " seconds left";

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

var startBtn = document.getElementById('startBtn');
var startCard = document.querySelector('start-card');
var gameCard = document.querySelector('game-card');


startBtn.addEventListener('click', function() {
    setTime();
    startCard.setAttribute('style', 'z-index: 1;');
    gameCard.setAttribute('style', 'z-index: 2;');   
});

// logic determining whether a question is wrong or right
// data-set for each right and wrong response, <span> element updating the correct answer for wrong responses

// way to reduce the timer by 10 seconds after wrong questions
// continue button resuming timer and going on to next question

// log data function to locally store the results of the game
// init function hen the site loads to pull locally stored results into high-score table