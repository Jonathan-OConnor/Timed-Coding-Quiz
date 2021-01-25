var questionPage= `
<h1 id="question">Commonly used data types DO NOT include:</h1>
<div id="answers">
    <button id="answer-0" onclick="checkAnswer('answer-0')" class="btn btn-primary">strings</button>
    <button id="answer-1" onclick="checkAnswer('answer-1')" class="btn btn-primary">booleans</button>
    <button id="answer-2" onclick="checkAnswer('answer-2')" class="btn btn-primary">alerts</button>
    <button id="answer-3" onclick="checkAnswer('answer-3')" class="btn btn-primary">numbers</button>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="assets/pages/pages.js"></script>
<script src="assets/scripts/script.js"></script></body></html>`

var inputPage = `

<h1>All Done!</h1>
<p></p>
<form id="name-form">
    <label>Enter Initials</label>
    <input type="text" id="name-input">
</form>
<button onclick="addToHighscores()">Submit</button>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="assets/pages/pages.js"></script>
<script src="assets/scripts/script.js"></script></body></html>`

var highscorePage= `
<div id="row1" class="row justify-content-center">
    <div class="col-6" id="initials">
     
    </div>
    <div class="col-6" id="scores">
     
    </div>
</div>
<div id="row2" class="row justify-content-center">
    <div id="button-column" class="col-6">
        <button class="btn" onclick="buildFrontPage()">Return</button>
        <button class="btn" onclick="clearScores()">Clear Scores</button>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="assets/pages/pages.js"></script>
<script src="assets/scripts/script.js"></script></body></html>`