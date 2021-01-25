// global variables
var highscores = []
var timer = 75
var runTimer = ""
var questionList = { 1: "Commonly used data types DO NOT include:", 2: "The condition in an if/else statement is enclosed within _________", 3: "Arrays in JavaScript can be used to store _______", 4: "String values must be enclosed within ______ when being assigned to variables", 5: "A very useful tool used during development and debugging for printing content to the debugger is:" }
var answerList = { 1: ["strings", "booleans", "alerts", "numbers"], 2: ["quotes", "curly brackets", "parentheses", "square brackets"], 3: ["numbers and strings", "other arrays", "booleans", "all of the above"], 4: ["commas", "curly brackets", "quotes", "parentheses"], 5: ["Javascript", "terminal/bash", "for loops", "console.log"] }
var answerKey = { 1: "alerts", 2: "parentheses", 3: "all of the above", 4: "quotes", 5: "console.log" }
var questionNumber = 1
var frontPage= document.body.innerHTML
var bodyContent = document.getElementById("body-content")

//check if highscores exist in local storage
if (localStorage.highscores) {
    highscores = JSON.parse(localStorage.highscores)
}

function startQuiz() {
    // build html for questions and answers
    bodyContent.innerHTML= questionPage

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

function endQuiz() {
    clearInterval(runTimer)
    // build completion page
    bodyContent.innerHTML= inputPage
}


function addToHighscores() {
    highscores.push([document.getElementById("name-input").value, timer])
    localStorage.highscores = JSON.stringify(highscores)
    buildHighscores()
}

function buildHighscores() {
    // function to sort highscores in descending order
    highscores.sort(function (first, second) {
        return second[1] - first[1];
    });

    // clear page and build html
    bodyContent.innerHTML = highscorePage

    // add information from local storage to highscore page
    for (var i = 0; i < highscores.length; i++) {
        var name = document.createElement("p")
        name.id = "name" + `${i}`
        name.innerText = highscores[i][0]
        var score = document.createElement("p")
        score.id = "score" + `${i}`
        score.innerText = highscores[i][1]
        initials.appendChild(name)
        scores.appendChild(score)
    }
}

function clearScores() {
    document.getElementById("row1").innerHTML = ""
    localStorage.highscores = JSON.stringify({})
    highscores = []
}

function buildFrontPage() {
    questionNumber = 1
    timer= 75
    document.body.innerHTML= frontPage
    bodyContent = document.getElementById("body-content")
}
