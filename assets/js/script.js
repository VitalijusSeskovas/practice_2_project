const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentquestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentquestionIndex++;
    setNextQuestion()
})

function startGame () {
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentquestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentquestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentquestionIndex + 1) {
      nextButton.classList.remove('hide');
  } else {
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What is a female who practices yoga called????',
        answers: [
          { text: 'Sutra', correct: false },
          { text: 'Yogi', correct: false },
          { text:'Yogini', correct: true },
          { text: 'Buddhist', correct: false }
        ]
    },
    {
        question: "What is traditionally chanted at the beginning and end of a yoga session?",
        answers: [
            { text: 'Hatha', correct: false },
          { text: 'Om', correct: true },
          { text:'Asana', correct: false },
          { text: 'Samadhi', correct: false }
        ]
    },
    {
        question: "Where did yoga originate?",
        answers: [
            { text: 'China', correct: false },
            { text: 'Thailand', correct: false },
            { text:'Nepal', correct: false },
            { text: 'India', correct: true }
          ]
    },
    {
        question: "What does the word yoga mean?",
        answers: [
            { text: 'Union', correct: true },
            { text: 'Peace', correct: false },
            { text:'Relaxation', correct: false },
            { text: 'Soul', correct: false }
          ]
    },
    {
        question: "In what yoga position do you stand, place a hand on the floor and stretch your arms?",
        answers: [
            { text: 'Cat', correct: false },
            { text: 'Warrior', correct: false },
            { text:'Triangle', correct: true },
            { text: 'Cobra', correct: false }
          ]
    },
];
    
