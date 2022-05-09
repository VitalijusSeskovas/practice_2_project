// All requared elements for reacting buttons
const start__btn = document.querySelector(".start__btn button");
const info__box = document.querySelector(".info__box");
const exit__btn = info__box.querySelector(".buttons .quit");
const continue__btn = info__box.querySelector(".buttons .restart");
const quiz__box = document.querySelector(".quiz__box");

//When "Start Quiz" button clicked!
start__btn.onclick = () => {
    info__box.classList.add("activeInfo"); // Show the info box
}

// When "Exit" Button clicked!
exit__btn.onclick = () =>{
    info__box.classList.remove("activeInfo"); // Hide the info box
}

// When "Continue" Button clicked!
continue__btn.onclick = () => {
    info__box.classList.remove("activeInfo"); // Hide the info box
    quiz__box.classList.add("activeQuiz"); // Show the quiz box
    showQuestions(0);
}

let que_count = 0;