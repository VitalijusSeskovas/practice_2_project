// All requared elements for reacting buttons
let startBtn = document.querySelector(".startBtn button");
let infoBox = document.querySelector(".infoBox");
let exitBtn = infoBox.querySelector(".buttons .quit");
let continueBtn = infoBox.querySelector(".buttons .restart");
let quizBox = document.querySelector(".quizBox");
let timeCount = quizBox.querySelector(".timer .timerSec");
let timeLine = quizBox.querySelector("header .timerLine");
let timeOff = quizBox.querySelector("header .timerText");
let optionList = document.querySelector(".optionList");

let queCount = 0;
let queNumb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

//When Start Quiz button clicked show the info box
startBtn.onclick = () =>{
    infoBox.classList.add("activeInfo");
}

// When Exit Button Clicked hide the info box
exitBtn.onclick = () =>{
    infoBox.classList.remove("activeInfo");
}

// When Continue Button Clicked
continueBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); //* Hide the info box
    quizBox.classList.add("activeQuiz"); //* Show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let nextBtn = quizBox.querySelector(".nextBtn");
let resultBox = document.querySelector(".resultBox");
let restartQuiz = resultBox.querySelector(".buttons restart");
let quitQuiz = resultBox.querySelector(".buttons .quit");

quitQuiz.onclick = () => {
    window.location.reload();
}

restartQiz.onclick = () => {
    resultBox.classList.remove("activeResult");
    quizBox.classList.add("activeQuiz");
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextBtn.style.display = "none";
    timeOff.textContent = "time left";
}


//Next Buttnon clicked
nextBtn.onclick  = ()=> {
    if (que_count > showQuestions.length - 1) {
        queCount++;
        queCount++;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextBtn.style.display = "none";
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
    let que_text = document.querySelector(".queText");
    let option_list = document.querySelector(".optionList");
    let que_tag = '<span>'+ quastions[i].numb + "." + quastions[i].quastion + '</span>';
    let option_tag = '<div class="option">'+ quastions[index].options[0] + '<span></span></div>';
        + '<div class="option">' + quastions[i].options[0] + '<span></span>/dv>'
        + '<div class="option">' + quastions[i].options[1] + '<span></span></dv>'
        + '<div class="option">' + quastions[i].options[2] + '<span></span>/dv>'
        + '<div class="option">' + quastions[i].options[3] + '<span></span>/dv>';
        
    queText.innnerHTML = queTag;
    optionList.innnerHTML = optionTag;
    let option = optionList.querySelectorAll('.option');
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
    let correctAns = quastions[queCount].answer;
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
            if(optionList.children[i].textContent == correctAns) {
            optionList.children[i].setAttribute("calss", "option correct");
            optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }   
     }
}   

    // When user selected disabled all options
    for (let i = 0; i < allOptions; i++) { 
       if(optionList.children[i].textContent == correctAns);
       optionList.children[i].classList.add("disabled");
       }
       nextBtn.style.display = "block";


function showResultBox() {
    infoBox.classList.remove("activeInfo"); // Hide the info box
    quizBox.classList.aremove("activeQuiz"); // Hide the quiz box
    resultBox.classList.add("activeResult");  // Show the result box
    let scoreText = resultBox.querySelector("scoreText");
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
            let allOptions = optionList.children.length;

            for (let i = 0; i < allOptions; i++) { 
                if(optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("calss", "option correct");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) { 
                if(optionList.children[i].textContent == correctAns);
                optionList.children[i].classList.add("disabled");
                }
                nextBtn.style.display = "block";
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

function queCounterQuesCounter = quizBox.querySelector(".total-que"); {
let totalQuesCountTag = '<span><p>'+ que_count +'</p>of<p>'+ questions.length +'</p>Questios</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag
};
