let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');

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
        let button = document.createElement('button');
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
  let selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
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

let questions = [
    {
        question: 'What is a female who practices yoga called????',
        answers: [
          { text: 'A. Sutra', correct: false },
          { text: 'B. Yogi', correct: false },
          { text:'C. Yogini', correct: true },
          { text: 'D. Buddhist', correct: false }
        ]
    },
    {
        question: "What is traditionally chanted at the beginning and end of a yoga session?",
        answers: [
            { text: 'A. Hatha', correct: false },
          { text: 'B. Om', correct: true },
          { text:'C. Asana', correct: false },
          { text: 'D. Samadhi', correct: false }
        ]
    },
    {
        question: "Where did yoga originate?",
        answers: [
            { text: 'A. Bharta', correct: false },
            { text: 'B. Thailand', correct: false },
            { text:'C. Nepal', correct: false },
            { text: 'D. India', correct: true }
          ]
    },
    {
        question: "What does the word yoga mean?",
        answers: [
            { text: 'A. Union', correct: true },
            { text: 'B. Peace', correct: false },
            { text:'C. Relaxation', correct: false },
            { text: 'D. Soul', correct: false }
          ]
    },
    {
        question: "In what yoga position do you stand, place a hand on the floor and stretch your arms?",
        answers: [
            { text: 'A. Cat', correct: false },
            { text: 'B. Warrior', correct: false },
            { text:'C. Triangle', correct: true },
            { text: 'D. Cobra', correct: false }
          ]
    },
    {
        question: "What Yogic method did Indra Devi advocate above all other techniques?",
        answers: [
            { text: 'A. Plough Pose', correct: false },
            { text: 'B. Vegan Diet', correct: false },
            { text:'C. Headstand', correct: false },
            { text: 'D. Deep Rhythmic Breathing', correct: true }
          ]
    },
    {
        question: "What teacher inspired the creation of the Sivananda Yoga Vedanta Centers?",
        answers: [
            { text: 'A. Swami Vishnu-devanada', correct: false },
            { text: 'B. Swami Sivananda', correct: true },
            { text:'C. Swami Krishnananda', correct: false },
            { text: 'D. Swami Vivekanada', correct: false }
          ]
    },
    {
        question: "What is the name for the yoga of meditation?",
        answers: [
            { text: 'A. Jnana Yoga', correct: false },
            { text: 'B. Bhakti Yoga', correct: false },
            { text:'C. Raja Yoga', correct: true },
            { text: 'D. Karma Yoga', correct: false }
          ]
    },
    {
        question: "What does Raja Yoga advocate?",
        answers: [
            { text: 'A.Mental And Physical Control ', correct: true },
            { text: 'B. Purity Of Heart', correct: false },
            { text:'C. Divine Love', correct: false },
            { text: 'D. Knowledge', correct: false }
          ]
    },
    {
        question: "What is the name for a sequence of yoga positions?",
        answers: [
            { text: 'A. Tadasana', correct: false },
            { text: 'B. Poses', correct: false },
            { text:'C. Bhujangasana', correct: false },
            { text: 'D. Vinyasa', correct: true }
          ]
    },
];