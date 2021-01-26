// global variables
var highscores = []
var timer = 75
var runTimer = ""
var questionList = { 1: "Commonly used data types DO NOT include:", 2: "The condition in an if/else statement is enclosed within _________", 3: "Arrays in JavaScript can be used to store _______", 4: "String values must be enclosed within ______ when being assigned to variables", 5: "A very useful tool used during development and debugging for printing content to the debugger is:" }
var answerList = { 1: ["strings", "booleans", "alerts", "numbers"], 2: ["quotes", "curly brackets", "parentheses", "square brackets"], 3: ["numbers and strings", "other arrays", "booleans", "all of the above"], 4: ["commas", "curly brackets", "quotes", "parentheses"], 5: ["Javascript", "terminal/bash", "for loops", "console.log"] }
var answerKey = { 1: "alerts", 2: "parentheses", 3: "all of the above", 4: "quotes", 5: "console.log" }
var questionNumber = 1

//check if highscores exist in local storage
if (localStorage.highscores) {
    highscores = JSON.parse(localStorage.highscores)
}

// function ran when the quiz is started
function startQuiz() {
    // build html for questions and answers
    document.getElementById("first-page").style.display= "none"
    document.getElementById("question-page").style.display= ""

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
    document.getElementById("question-page").style.display= "none"
    document.getElementById("input-page").style.display= ""
}

function viewHighscores(){
    clearInterval(runTimer)
    document.getElementById("time-count").innerHTML = "0"
    document.getElementById("first-page").style.display= "none"
    document.getElementById("question-page").style.display= "none"
    document.getElementById("input-page").style.display= "none"
    document.getElementById("highscore-page").style.display= ""
    buildHighscores()
}

function addToHighscores(event) {
    event.preventDefault()
    if (document.getElementById("name-input").value != ""){
    // remove spaces since empty inputs break CSS of highscore page
    var cleanedString = document.getElementById("name-input").value.replace(' ', '_')
    
    // add cleaned string to highscore list with corresponding score
    highscores.push([cleanedString, timer])
    localStorage.highscores = JSON.stringify(highscores)
    buildHighscores()} else {
        alert("Please enter your initials to continue")
    }
}

function buildHighscores() {
    // function to sort highscores in descending order
    highscores.sort(function (first, second) {
        return second[1] - first[1];
    });

    // clear page score page so it can be rebuilt
    document.getElementById("initials").innerHTML= ""
    document.getElementById("scores").innerHTML= ""

    // move from input page to highscore page
    document.getElementById("input-page").style.display= "none"
    document.getElementById("highscore-page").style.display= ""

    // add information from local storage to highscore page
    for (var i = 0; i < highscores.length; i++) {

        // build a new row for each name
        var nameRow = document.createElement("div")
        nameRow.id= "name" + `${i}`
        nameRow.setAttribute("class", "row highscore-row")
        document.getElementById("initials").appendChild(nameRow)

        // build the name to be placed in the name row
        var name = document.createElement("p")
        name.id = "name" + `${i}`
        name.innerText = highscores[i][0]
        name.setAttribute("class","text-center")
        nameRow.appendChild(name)

        // build a new row for the score
        var scoreRow = document.createElement("div")
        scoreRow.id= "score" + `${i}`
        scoreRow.setAttribute("class", "row highscore-row")
        document.getElementById("scores").appendChild(scoreRow)

        // build the score to be placed in the score row
        var score = document.createElement("p")
        score.id = "score" + `${i}`
        score.innerText = highscores[i][1]
        score.setAttribute("class","text-center")
        scoreRow.appendChild(score)
    }
}

// function ran when the Clear Scores button on the highscore page is clicked
function clearScores() {
    document.getElementById("row1").innerHTML = ""
    localStorage.highscores = JSON.stringify([])
    highscores = []
}

// function ran when the Return button on the highscore page is clicked
function buildFrontPage() {
    questionNumber = 1
    timer= 75
    document.getElementById("highscore-page").style.display= "none"
    document.getElementById("first-page").style.display= ""
}
