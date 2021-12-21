var score = 0;
var timeEl = document.querySelector("#time");
var countdown = 30;
var questions = [{
    title: "TEST QUESTION",
    choices: ["WRONG", "RIGHT", "WRONG", "WRONG"],
    answer: "RIGHT"
},
{
    title: "TEST QUESTION 2",
    choices: ["WRONG", "RIGHT", "WRONG", "WRONG"],
    answer: "RIGHT"
}]
var questionIndex = 0;
var choices = document.querySelector(".choices");
var questionEl = document.querySelector("#questions");
var beginElement = document.querySelector(".begin");
var timerInterval;

function beginQuiz(event) {
   // event.stopPropagation();
    console.log("HELP");
    beginElement.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    timerInterval = setInterval(clockTick, 1000);
    timeEl.textContent = countdown;
    startQuestions()
}

function clockTick() {
        console.log(countdown);
        countdown--;
        timeEl.textContent = countdown;
        if (countdown <= 0) {
            //clearInterval(timerInterval);
            sendMessage();
        }

    }

function startQuestions() {
    console.log("Inside Start questions")
    var currentQuestion = questions[questionIndex]
    console.log(currentQuestion);
    var titleEl = document.querySelector(".questionTitle");
    titleEl.textContent = currentQuestion.title;
    choices.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choices");
        choiceButton.setAttribute("value", currentQuestion.choices[i]);
        choiceButton.textContent = i + 1 + ": " + currentQuestion.choices[i];
        choiceButton.addEventListener("click", questionClick);
        choices.appendChild(choiceButton);
    }
}

function questionClick() {
    if (this.value !== questions[questionIndex.answer]) {
        countdown -= 5
        console.log("Wrong")
    } else {
        console.log("Correct")
    }
    questionIndex++
    if (questionIndex === questions.length) {
        console.log("Quiz Over")
    } else {
        startQuestions();
    }
}

var startButton = document.querySelector(".startButton")


startButton.addEventListener("click", beginQuiz);