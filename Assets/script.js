var start = document.getElementById("start");
var time = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var index = [0];
var points = [0];
var startBtnEl = document.getElementsById("start-btn");
var submitBtnEl = document.getElementsById("submit-btn");

var questions = [
    {
        title: "Question 1",
        questions: "When positioning elements, which is the normal flow/default value?",
        choices: ["Static", "Relative", "Absolute", "Fixed"],
        answer: "Static"
    },
    {
        title: "Question 2",
        questions: "Border has to have how many values?",
        choices: ["1", "2", "3", "1, 2, or 3, it's up to you"],
        answer: "3"
    },
    {
        title: "Question 3",
        questions: "Which answer is NOT  a primitive data type?",
        choices: ["undefined", "string", "difined", "number", "boolean"],
        answer: "difined"
    },
    {
        title: "Question 4",
        questions: "What key word reffers to the object it is inside of?",
        choices: ["function", "var", "this"],
        answer: "this"
    },
    {
        title: "Question 5",
        questions: "____ use JavaScript to manipulate webpages.",
        choices: ["The document object model", "Bootstrap", "JSON", "Web API,s"],
        answer: "Web api's"
    },
    {
        title: "Question 6",
        questions: "What turns an array into a string?",
        choices: ["select.join", "$", "$.each", "str"],
        answer: "select.join"
    }
];












// // Start button
// var startButton = document.querySelector(".start-button");
// startButton.addEventListener.on("click", startingTime);


// // timer 
// const startingTime = 1;
// let time = startingTime * 60;

// const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 1 ? "0" + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;

//     if (time === 0) {
//         return;
//       }
// }


// // questions 




// // if true and if false 





// // high score 