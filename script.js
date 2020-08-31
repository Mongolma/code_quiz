var quiz = document.querySelector("#start-btn");
var currentQuestion = 0;
var questions = [
  {
    q: "q1",
    a: ["a1", "a2", "a3", "a4"],
    c: "a1",
  },
  {
    q: "q2",
    a: ["a1", "a2", "a3", "a4"],
    c: "a4",
  },
];

var startingMinutes = 10;
var time = startingMinutes * 60;
var countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function startTimer() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  if (begin === "start") {
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
}

function showQuestions() {
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endGame();
  } else {
    showQuestions();
  }
}

function endGame() {
  console.log("END");
}

quiz.addEventListener("click", function () {
  console.log("start");
  showQuestions();
  startTimer();
});
