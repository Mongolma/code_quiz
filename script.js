var quiz = document.getElementById("start-btn");
var containerEl = document.querySelector(".main-container");
var currentQuestion = 0;
var questions = [
  {
    question: "abc",
    answer: ["a", "b", "c", "d"],
    correctAnswer: "b",
    usesAnswer: "b",
    responce: true,
    time: 0,
  },
  {
    question: "abc",
    answer: ["a", "b", "c", "d"],
    correctAnswer: "b",
    usesAnswer: "b",
    responce: true,
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

  var answerEl = "";

  for (var i = 0; i < questions[currentQuestion].answer.length; i++) {
    answerEl = document.createElement("button");
    answerEl.setAttribute("class", "btn btn-secondary m-1");
    answerEl.innerHTML = questions[currentQuestion].answer[i];
    createRow(1, answerEl);

    answerEl.addEventListener("click", function () {
      questions[currentQuestion].usesAnswer =
        questions[currentQuestion].answer[i];
      answerCheck();
      nextQuestion();
    });
  }
}

quiz.addEventListener("click", function () {
  document.querySelector(".main-container").innerHTML = "";
  // currentQuestion = 0;
  showQuestions();
  //startTimer()
});
