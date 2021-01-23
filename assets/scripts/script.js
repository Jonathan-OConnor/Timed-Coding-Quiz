var highscores = {}
var timer = 75
var runTimer = ""
var questionList = { 1: "Commonly used data types DO NOT include:", 2: "The condition in an if/else statement is enclosed within _________", 3: "Arrays in JavaScript can be used to store _______", 4: "String values must be enclosed within ______ when being assigned to variables", 5: "A very useful tool used during development and debugging for printing content to the debugger is:" }
var answerList = { 1: ["strings", "booleans", "alerts", "numbers"], 2: ["quotes", "curly brackets", "parentheses", "square brackets"], 3: ["numbers and strings", "other arrays", "booleans", "all of the above"], 4: ["commas", "curly brackets", "quotes", "parentheses"], 5: ["Javascript", "terminal/bash", "for loops", "console.log"] }
var answerKey = { 1: "alerts", 2: "parentheses", 3: "all of the above", 4: "quotes", 5: "console.log" }
var questionNumber = 1
var bodyContent = document.getElementById("body-content")

if (localStorage.highscores) {
    highscores = JSON.parse(localStorage.highscores)
}

function startQuiz() {

    buildQuestion();
    buildAnswers();

    //start timer
    document.getElementById("time-count").innerHTML = `${timer}`
    runTimer = setInterval(updateTimer, 1000)
}

function updateTimer() {
    if (timer <= 0) {
        document.getElementById("time-count").innerHTML = '0'
        endQuiz()
    } else {
        timer--
        document.getElementById("time-count").innerHTML = `${timer}`
    }
}

function endQuiz() {
    clearInterval(runTimer)
    // build completion page
    bodyContent.innerHTML = ""

    //build all done message
    var completionMessage = document.createElement("h1")
    completionMessage.innerText = "All Done!"
    bodyContent.appendChild(completionMessage)

    //build score message
    var scoreMessage = document.createElement("p")
    scoreMessage.innerText = "Your final score is " + `${timer}`
    bodyContent.appendChild(scoreMessage)

    //build input to submit name which will be associated with score
    var nameForm = document.createElement("form")
    nameForm.id = "name-form"
    nameForm.addEventListener("submit", function (event) {
        event.preventDefault();
    })
    bodyContent.appendChild(nameForm)
    var nameLabel = document.createElement("label")
    nameLabel.innerText = "Enter Initials"
    document.getElementById("name-form").appendChild(nameLabel)
    var nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name-input"
    document.getElementById("name-form").appendChild(nameInput)
    var nameSubmit = document.createElement("button")
    nameSubmit.innerText = "Submit"
    nameSubmit.setAttribute("onClick", "addToHighscores()")
    bodyContent.appendChild(nameSubmit)
}


function addToHighscores() {
    highscores[document.getElementById("name-input").value] = timer
    localStorage.highscores= JSON.stringify(highscores)
    buildHighscores()
}

function buildHighscores() {
    // function to sort highscores from dictionary
    var orderedScores = Object.keys(highscores).map(function(key) {
        return [key, highscores[key]];
      });
      orderedScores.sort(function(first, second) {
        return second[1] - first[1];
      });
    
}
function buildQuestion() {
    bodyContent.children[0].remove()
    var question = document.createElement("h1");
    question.id = "question"
    var questionText = questionList[1]
    var text = document.createTextNode(questionText)
    question.appendChild(text)
    bodyContent.appendChild(question)
}

function buildAnswers() {
    var buttonArea = document.createElement("div")
    buttonArea.id = "answers"
    bodyContent.appendChild(buttonArea)
    for (var i = 0; i < 4; i++) {
        var button = document.createElement("button")
        var answerText = answerList[1][i]
        var text = document.createTextNode(answerText)
        button.appendChild(text)
        button.id = "answer-" + `${i}`
        button.setAttribute("onClick", "checkAnswer('" + button.id + "')")
        buttonArea.appendChild(button)

    }

}

function checkAnswer(id) {
    // reduce time if answer was wrong
    if (document.getElementById(id).innerHTML !== answerKey[questionNumber]) {
        timer -= 9
        updateTimer()
    }
    // build next question and corresponding answers
    questionNumber += 1
    if (questionNumber <= Object.keys(questionList).length) {
        document.getElementById("question").innerHTML = questionList[questionNumber]
        for (var i = 0; i < 4; i++) {
            document.getElementById("answer-" + `${[i]}`).innerHTML = answerList[questionNumber][i]
        }
    }
    else {
        endQuiz()
    }

}