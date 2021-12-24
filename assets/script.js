var score = 0;
var timeEl = document.querySelector("#time");
var countdown = 3;
var questions = [{
    title: "What is the name of the conductor of a marching band?",
    choices: ["Maestro", "Drum Major", "Conductor", "Instructor"],
    answer: "Drum Major"
},
{
    title: "When taking a standard size marching step on a football field how many steps will it take to get from one yardline to the next?",
    choices: ["Five", "Six", "Eight", "Ten"],
    answer: "Eight"
},
{
    title: "If a marching band has percussive instruments that are too big to march with those instruments are put in the",
    choices: ["Pit", "Drumline", "Orchestra", "Brass Section"],
    answer: "Pit"
},
]
var questionIndex = 0;
var choices = document.querySelector(".choices");
var questionEl = document.querySelector("#questions");
var beginElement = document.querySelector(".begin");
var timerInterval;
var scoreEl = document.querySelector("#score")
var choiceResult = document.querySelector(".result")

function beginQuiz(event) {
    console.log("HELP");
    beginElement.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    timerInterval = setInterval(clockTick, 1000);
    timeEl.textContent = countdown;
    startQuestions()
}

function clockTick() {
        countdown--;
        timeEl.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timerInterval);
            quizOver();
            scoreboard()
        };
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
    if (this.value !== questions[questionIndex].answer) {
        countdown -= 5
        console.log("Wrong")
        console.log(this.value)
        console.log(questions[questionIndex].answer)
        console.log(questions)
        console.log(questionIndex)
    } else {
        console.log("Correct")
        console.log(this.value)
        console.log(questions[questionIndex].answer)
        console.log(questions)
        console.log(questionIndex)
        score += countdown;
    }
    questionIndex++
    if (questionIndex === questions.length) {
        console.log("Quiz Over")
        quizOver();
        scoreboard();
    } else {
        startQuestions();
    }
}

function quizOver() {
    console.log("The Quiz Sure Is Over")
    questionEl.setAttribute("class", "hide")
}

function scoreboard() {
    console.log(score)
    console.log("The Scoreboard is raring to go!")
    scoreEl.textContent = "Final Score: " + score;
    console.log(scoreEl)
}

var startButton = document.querySelector(".startButton")


startButton.addEventListener("click", beginQuiz);