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

    answerEl.addEventListener("click", function () {
      questions[currentQuestion].usesAnswer =
        questions[currentQuestion].answer[item];
      correctAnswer();
      // nextQuestion();
    });
  });
  function correctAnswer() {
    if (
      questions[currentQuestion].correctAnswer ===
      questions[currentQuestion].usesAnswer
    ) {
      questions[currentQuestion].responce = false;
      questions[currentQuestion].time = time;
      document.getElementById("result").innerHTML = "correct";
      setTimeout(function () {
        document.getElementById("result").innerHTML = "";
      }, 2000);
    } else {
      penaltyTime();
      questions[currentQuestion].responce = true;
      document.getElementById("result").innerHTML = "wrong";
      setTimeout(function () {
        document.getElementById("result").innerHTML = "";
      }, 2000);
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
