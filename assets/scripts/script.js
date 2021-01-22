var highScores = {}
var timer = 75

function startQuiz() {

    buildQuestion();
    buildAnswers();

    //start timer
    document.getElementById("time-count").innerHTML = `${timer}`
    setInterval(updateTimer, 1000)
}

function updateTimer() {
    if (timer === 0) {
        endQuiz()
    } else {
        timer--
        document.getElementById("time-count").innerHTML = `${timer}`
    }
}

function endQuiz() {
    clearInterval(runTimer)
    // take to highscore page
}

function buildQuestion() {
    document.getElementById("div1").children[0].remove()
    var question = document.createElement("h1");
    var text = document.createTextNode("Question 1")
    question.appendChild(text)
    var contentBody = document.getElementById("div1")
    contentBody.appendChild(question)
}

function buildAnswers() {
    for (var i = 0; i < 4; i++) {
        var button = document.createElement("button")
        var text = document.createTextNode("answer")
        button.appendChild(text)
        button.id = "answer-" + `${i}`
        button.setAttribute("onClick", "checkAnswer('" + button.id + "')")
        var contentBody = document.getElementById("div1")
        contentBody.appendChild(button)
    }

}

function checkAnswer(id) {
    console.log(id)
}