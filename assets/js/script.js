// All requared elements for reacting buttons
let start_btn = document.querySelector(".start_btn button");
let info_box = document.querySelector(".info_box");
let exit_btn = info-box.querySelector(".buttons .quit");
let continue_btn = info-box.querySelector(".buttons .restart");
let quiz_box = document.querySelector(".quiz_box");
let timeCount = quiz-box.querySelector(".timer .timer_sec");
let timeLine = quiz_box.querySelector("header .timer_line");
let timeOff = quiz_box.querySelector("header .timer_text");
let option_list = document.querySelector(".option_list");

//When Start Quiz button clicked show the info box
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");
}

// When Exit Button Clicked hide the info box
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
}

// When Continue Button Clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //* Hide the info box
    quiz_box.classList.add("activeQuiz"); //* Show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

// object.addEventListener("click", myScript); !!!!!

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

let next_btn = quiz_box.querySelector(".next_btn");
let result_box = document.querySelector(".result_box");
let restart_quiz = result-box.querySelector(".buttons restart");
let quit_quiz = result-box.querySelector(".buttons .quit");

quit-quiz.onclick = () => {
    window.location.reload();
}

restart-quiz.onclick = () => {
    result-box.classList.remove("activeResult");
    quiz-box.classList.add("activeQuiz");
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestions(que-count);
    queCounter(que-numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "time left";
}


//Next Buttnon clicked
next_btn.onclick  = ()=> {
    if (que_count > showQuestions.length - 1) {
        que_count++;
        que_count++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "time left";
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
    console.log("Questions completed");
    showResultBax();
    }
    
}

//getting questions and options form arry
function showQuestions(i){
    let que_text = document.querySelector(".que_text");
    let option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ quastions[i].numb + "." + quastions[i].quastion + '</span>';
    let option_tag = '<div class="option">'+ quastions[index].options[0] + '<span></span></div>';
        + '<div class="option">' + quastions[i].options[0] + '<span></span>/dv>'
        + '<div class="option">' + quastions[i].options[1] + '<span></span></dv>'
        + '<div class="option">' + quastions[i].options[2] + '<span></span>/dv>'
        + '<div class="option">' + quastions[i].options[3] + '<span></span>/dv>';
        
    que_text.innnerHTML = que-tag;
    option_list.innnerHTML = option_tag;
    let option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAtribute("onclick", "optionSelected(this)")
    }
}

let tickIcon ='<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon ='<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answear) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answear.textContent;
    let correctAns = quastions[que_count].answer;
    let allOptions = option_list.children.length;
    
    if(userAns === correctAns) {
        userScore += 1;
        console.log(userScore);
        answear.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answear.classList.add("incorrect");
        console.log("Answer is inccorect");
        answer.insertAdjacentHTML("beforeend", crossIcon);
    

        // When answers is inccoect then automaticly selected the correct answer
        for (let i = 0; i < allOptions; i++) { 
            if(option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("calss", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }   
     }
}   

    // When user selected disabled all options
    for (let i = 0; i < allOptions; i++) { 
       if(option_list.children[i].textContent == correctAns);
       option_list.children[i].classList.add("disabled");
       }
       next-btn.style.display = "block";


function showResultBox() {
    info_box.classList.remove("activeInfo"); // Hide the info box
    quiz_box.classList.aremove("activeQuiz"); // Hide the quiz box
    result_box.classList.add("activeResult");  // Show the result box
    let scoreText = result-box.querySelector("score-text");
    if(userScore > 3) {
        let scoreTag = '<span>Congratulations!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreTag.innerHTML = scoreTag;
    }

    else if(userScore > 1) {
        let scoreTag = '<span>Well done!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreTag.innerHTML = scoreTag;
    }

    else {
        let scoreTag = '<span>and sorry, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreTag.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time --;
        if(time < 9){
            let addZero =timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time > 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "time off";

            let correctAns = quastions[que_count].answer;
            let allOptions = option-list.children.length;

            for (let i = 0; i < allOptions; i++) { 
                if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("calss", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) { 
                if(option_list.children[i].textContent == correctAns);
                option_list.children[i].classList.add("disabled");
                }
                next_btn.style.display = "block";
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px"
        if(time > 549) {
            clearInterval(counterLine);
        }
    }
}

function queCounter_ques_counter = quiz_box.querySelector(".total-que");
let totalQuesCountTag = '<span><p>'+ que_count +'</p>of<p>'+ questions.length +'</p>Questios</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
