var index = 0;
var score = 0;
var highScores = []
var selectionNumber
var list = document.getElementById('highScores');
var resetScreen = document.getElementById('reset-screen');
var timer = document.getElementById("timer");

// Main/Starting screen varriables
var instructions = document.getElementById("instructions");
var startScreen = document.getElementById('start-screen');
var start = document.getElementById("start");
var viewHighscores = document.getElementById("view-highscores");

// Question screen
var questionScreen = document.getElementById('question-screen');
var answerOutput = document.getElementById("answer-output");

// End screen
var endScreen = document.getElementById('end-screen');

// Allows switching between screens by hiding the rest
questionScreen.style.display = "none";
endScreen.style.display = "none";
resetScreen.style.display = "none";
timer.style.display = "block";

// FIRST display instructions and starts quiz
function startQuiz() {
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    quizQuestions()
    updateCountdown()
}

// starts quiz 
function quizQuestions() {
    if (index < questions.length) {
        var question = document.getElementById("question")
        var btn1 = document.getElementById("btn-one")
        var btn2 = document.getElementById("btn-two")
        var btn3 = document.getElementById("btn-three")
        var btn4 = document.getElementById("btn-four")


        question.innerHTML = questions[index].question;
        btn1.innerHTML = questions[index].choices[0];
        btn2.innerHTML = questions[index].choices[1];
        btn3.innerHTML = questions[index].choices[2];
        btn4.innerHTML = questions[index].choices[3];
    } else {
        questionScreen.style.display = "none";
        endScreen.style.display = "block";
        reset()
    }
}

// Quiz questions 
var questions = [
    {
        question: "When positioning elements, which is the normal flow/default value?",
        choices: ["Static", "Relative", "Absolute", "Fixed"],
        answer: 0
    },
    {
        question: "Which answer is NOT a primitive data type?",
        choices: ["undefined", "string", "defined", "number", "boolean"],
        answer: 2
    },
    {
        question: "What key word reffers to the object it is inside of?",
        choices: ["function", "var", "this"],
        answer: 2
    },
    {
        question: "____ use JavaScript to manipulate webpages.",
        choices: ["The document object model", "Bootstrap", "JSON", "Web API,s"],
        answer: 3
    },
    {
        question: "What turns an array into a string?",
        choices: ["select.join", "$", "$.each", "str"],
        answer: 0
    }
];

// Timer starts and resets if time runs out sends you directly to initials input screen
let startingTime = 60;
function updateCountdown() {
    let countdownInterval = setInterval(function () {
        if (startingTime >= 1) {
            timer.textContent = startingTime;
            startingTime--;
        } else {
            timer.textContent = "Time's up!";
            clearInterval(countdownInterval)
            onSubmit()
            endQuiz()
        }
    }, 1000)
}

function reset() {
    startingTime = 60;
}

// tells you if you got the aswer right or wrong and takes 15 seconds off if the abswer is wrong.
function quizSelection(selection) {
    if (selection === questions[index].answer) {
        answerOutput.innerHTML = "Correct!"
        score += 20
    } else {
        answerOutput.innerHTML = "Wrong!"
        startingTime -= 15;
    }
    index++;
    if (timer <= 0 || questions[index] === questions.length) {
        endQuiz()
    } else {
        quizQuestions();
    }
}

function endQuiz() {
    timer.style.display = "none";
    questionScreen.style.display = "none";
    resetScreen.style.display = "none";
    endScreen.style.display = "block";
}

// submits and stores players highscores with their initials 
function onSubmit() {
    var initials = document.getElementById("initials").value;
    highScores.push({ initials, score })
    var listItem = document.createElement("LI");
    listItem.appendChild(document.createTextNode(`${initials} - ${score}`));
    list.appendChild(listItem);
    score = 0;
    endScreen.style.display = "none";
    viewHighscores.style.display = "none";
    resetScreen.style.display = "block";
}

// Highscores page 
function viewScores() {
    if (startScreen.style.display === "block") {
        startScreen.style.display = "none"
    } else if (questionScreen.style.display === "block") {
        questionScreen.style.display = "none"
    } else if (endScreen.style.display === "block") {
        endScreen.style.display = "none"
    }
    resetScreen.style.display = "block";
    viewHighscores.style.display = "none";
    timer.style.display = "none";
    startScreen.style.display = "none";
}

// button options to either clear highscores or go back to try the quiz again.
function clearHighScores() {
    highScores = []
    list.innerHTML = "";
}

function restartQuiz() {
    resetScreen.style.display = "none";
    startScreen.style.display = "block";
    index = 0;
    answerOutput.innerHTML = "";
    viewHighscores.style.display = "block";
    timer.style.display = "block";
    // restart timer
    reset()
}
