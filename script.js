var quiz = document.getElementById("start-btn");
var containerEl = document.querySelector(".main-container");
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
    responce: false,
    time: 0,
  },
  {
    question: "Which one is 'AND LOGICAL' operator?",
    answer: ["&&", "||", "!", "="],
    correctAnswer: "&&",
    usesAnswer: "&&",
    responce: false,
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
    responce: false,
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
      nextQuestion();
    });
  });

  function correctAnswer(selectedButton) {
    if (questions[currentQuestion].correctAnswer === selectedButton) {
      console.log("working1");
      questions[currentQuestion].responce = true;
      document.querySelector("#result").innerHTML = "Correct!";
      setTimeout(function () {
        document.querySelector("#result").innerHTML = "";
      }, 2000);
    } else {
      console.log("working2");
      penaltyTime();
      questions[currentQuestion].responce = false;
      document.querySelector("#result").innerHTML = "False!";
      setTimeout(function () {
        document.querySelector("#result").innerHTML = "";
      }, 2000);
    }
  }
  function nextQuestion() {
    if (currentQuestion <= questions.length) {
      currentQuestion++;
      showQuestions();
    } else {
      endGame();
    }
  }
  function endGame() {
    if (currentQuestion === questions.length) {
      containerEl.innerHTML = "";
      var endGameEl = document.createElement("div");
      endGameEl.setAttribute("class", "display-3");
      endGameEl.innerHTML = "Quiz over!";
      createRow(1, endGameEl);
    }
  }
  function penaltyTime() {}
}

quiz.addEventListener("click", function () {
  document.querySelector(".main-container").innerHTML = "";
  // currentQuestion = 0;
  showQuestions();
  //startTimer()
});
