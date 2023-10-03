// 
var scoreList = document.getElementById('leaderboard');
var scoreData = [];

function renderScores() {
    var storedScores = JSON.parse(localStorage.getItem('scoreData'));

    if (storedScores !== null) {
        scoreData = storedScores;
      };

    var sortedScores = scoreData.sort(
        (p1, p2) => (p1.finalScore < p2.finalScore) ? 1: (p1.finalScore > p2.finalScore) ? -1: 0
    );

    for (var i = 0; i < sortedScoresgit .length; i++) {
      var scores = sortedScores[i];
    
      var li = document.createElement("li");
      li.textContent = scores.intText + " - " + scores.finalScore;
      li.setAttribute("data-index", i);

      scoreList.appendChild(li);
    }

    console.log(scoreData);
}

renderScores ();