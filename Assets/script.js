var start = document.getElementById("start");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var index = 0;
var score = 0;
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('question-screen');
questionScreen.style.display = "none";
var endScreen = document.getElementById('end-screen');
var answerOutput = document.getElementById("answer-output")
endScreen.style.display = "none";
var selectionNumber
var highScores = []
var resetScreen = document.getElementById('reset-screen');
resetScreen.style.display = "none";



// FIRST display #instructions 

function startQuiz() {
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    quizQuestions()
}

function quizQuestions() {
    console.log("quizQuestions")
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
    }
}

function quizSelection(selection) {
    console.log("quizSelection")
    if (selection === questions[index].answer) {
        answerOutput.innerHTML = "Correct!"
        score += 20
    } else {
        answerOutput.innerHTML = "Wrong!"
    }
    index++;
    quizQuestions();

}

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

function onSubmit() {
    var initials = document.getElementById("initials").value;
    highScores.push({initials, score})
    score = 0;
    endScreen.style.display = "none";
    resetScreen.style.display = "block";
    // document.querySelector("scores").innerHTML = "<li> " + initials + " </li>";
    console.log(highScores)
}

function clearHighScores() {
    highScores = []
}

function restartQuiz() {
    resetScreen.style.display = "none";
    startScreen.style.display = "block";
    index = 0;
    answerOutput.innerHTML = "";
}

// Update Highscores Step
// 1. OnSubmit function should include adding a list item with the inner html set to the last item of the highscores array.
// 2. If they click clear highscores you’ll need to reset the unordered list somehow

// set a timmer that looses 15 seconds every time a question is answered wrong 
// var startTime = 2;
// let timeRemaining = startTime * 120;
// var countdownEl = document.getElementById("time");
// setInterval(updateTime, 1000);
// function updateTime() {
//     const minutes = Math.floor(time / 120);
//     let seconds = time % 120
//     seconds = seconds < 1 ? "0" + seconds : seconds;
//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;

// }


// // start button starts timmer and starts looping through questions 
// startBtnEl.addEventListener("click", startTime);




// var timeRemaining = 60;
// var timerInterval;
// function startTimer() {
//     time.textContent = timeRemaining
//     timerInterval = setInterval(function () {
//         timeRemaining--;
//         time.textContent = timeRemaining

//         if (timeRemaining === 0) {
//             clearInterval(timerInterval);
//         }
//     }, 1000);
// }




// timer 
// const startingTime = 1;
// let time = startingTime * 60;

// const countdownEl = document.getElementById("time");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 1 ? "0" + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
// }


// // // questions 




// // // if true and if false 





// // // high score 