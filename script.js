var quiz = document.getElementById("start-btn");
var containerEl = document.querySelector(".main-container");
var time = 0;
var score = 0;
var submitHiSc = document.getElementById("submit-btn");
var currentQuestion = 0;
var questions = [
  {
    question: "What is a variable?",
    answer: [
      "Store for your information",
      "It let you group series of statement together to perform a special task",
      "Variable is for dealing with more than one function at a time",
      "Its used to remove elements from DOM",
    ],
    correctAnswer: "Store for your information",
    usesAnswer: "Store for your information",
    response: false,
    time: 0,
  },
  {
    question: "Which one is 'AND LOGICAL' operator?",
    answer: ["&&", "||", "!", "="],
    correctAnswer: "&&",
    usesAnswer: "&&",
    response: false,
    time: 0,
  },
  {
    question: "var colors = ['white','black','costume'];  colors[2] ='beige';",
    answer: [
      "var colors = ['white','beige','costume']",
      "var colors = ['white','black','beige']",
      "var colors = ['white','black','costume', 'beige']",
      "var colors = ['white','black','costume']",
    ],
    correctAnswer: "var colors = ['white','black','beige']",
    usesAnswer: "var colors = ['white','black','beige']",
    response: false,
    time: 0,
  },
];

function createRow(rows, text) {
  for (var i = 0; i < rows; i++) {
    var rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row");
    rowEl.setAttribute("style", "display:flex");
    var colEl = document.createElement("div");
    colEl.setAttribute("class", "col");
    colEl.setAttribute("style", "flex:50%");

    colEl.append(text);
    rowEl.append(colEl);
    containerEl.append(rowEl);
  }
}

function showQuestions() {
  containerEl.innerHTML = "";
  var questionEl = document.createElement("h3");
  questionEl.innerHTML = questions[currentQuestion].question;
  createRow(1, questionEl);

  questions[currentQuestion].answer.forEach((item) => {
    answerEl = document.createElement("button");
    answerEl.setAttribute("class", "btn btn-primary m-2");
    answerEl.innerHTML = item;
    createRow(1, answerEl);

    answerEl.addEventListener("click", function (event) {
      var userInput = event.target.textContent;
      correctAnswer(userInput);
      nextQuestion(1);
    });
  });

  function correctAnswer(selectedButton) {
    if (questions[currentQuestion].correctAnswer === selectedButton) {
      console.log("working1");
      questions[currentQuestion].response = true;
      document.querySelector("#result").innerHTML = "Correct!";
      score += 10;
      setTimeout(function () {
        document.querySelector("#result").innerHTML = "";
      }, 1000);
    } else {
      console.log("working2");
      penaltyTime();
      questions[currentQuestion].response = false;
      document.querySelector("#result").innerHTML = "False!";
      setTimeout(function () {
        document.querySelector("#result").innerHTML = "";
      }, 1000);
    }
  }
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestions();
    } else if ((currentQuestion = questions.length - 1)) {
      endGame();
    }
  }
  function endGame() {
    containerEl.innerHTML = "";
    var endGameEl = document.createElement("div");
    endGameEl.setAttribute("class", "P");
    endGameEl.innerHTML =
      "<p>Quiz over! Your score is: " +
      score +
      " If you want to keep your highest score write you name and click submit button!" +
      "</p> <div class='input-group'><input type='text' id='input' ></div> <button id='submit-btn' class='btn btn-primary'>submit</button> <button id='cancel-btn' class='btn btn-primary'>cancel</button>";

    createRow(1, endGameEl);
  }
}

//keep scores into localStorage
//need to rank the scores
//addEventListener to highest score btn

function penaltyTime() {
  var penalty = 15;
  var remainingT = time - penalty;
  time = remainingT;
}

function startTimer() {
  console.log("timer");
  var defaultTime = 15 * questions.length;
  var displayTimer = document.getElementById("countDown");
  time = defaultTime;
  mainInterval = setInterval(function () {
    if (time > 0) {
      time--;
      displayTimer.textContent = time;
    } else {
      stopTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(mainInterval);
}

function highScore() {
  var scores = [];
  
}

document.addEventListener("click", function (e) {
  // console.log(e.target.id);
  if (e.target.id === "btn") {
  }
});
document.addEventListener("click", function (e) {
  console.log(e.target.id);
  if (e.target.id === "view-highscore-btn") {
    console.log("it works");
  }
});
document.addEventListener("click", function () {
  document.getElementById("submit-btn");
});

// submitHiSc.addEventListener("click", function () {
//   var highscore = document.getElementsByTagName("input").value;
//   localStorage.setItem("input", highscore);
// });

quiz.addEventListener("click", function () {
  document.querySelector(".main-container").innerHTML = "";
  // currentQuestion = 0;
  showQuestions();
  startTimer();
});
