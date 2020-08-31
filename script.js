var body = document.body;

var h1El = document.createElement("h1");
var viewScore = document.createElement("p");
var remainingTime = document.createElement("p");
var questions = document.createElement("div");
var pEl = document.createElement("p");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var inputEl = document.createElement("input");
inputEl.setAttribute("type", "checkbox");

// var btnEl = document.createElement("btn");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
viewScore.textContent = "View Score";
remainingTime.textContent = "Remaining time";
h1El.textContent = "Coding Quiz Challenge";
pEl.textContent =
  "Try to answer the following code-related questions withen the time limit. Keep in mind that incorrect answer will penalize your scoretime by ten seconds!";

// Append all of our elements

body.append(viewScore);
body.append(remainingTime);
body.append(h1El);
body.append(pEl);
body.append(inputEl);

// var quiz = document.querySelector("#start-btn");
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
