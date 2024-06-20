const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 1)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '1.What is java?',
    answers: [
      { text: 'Programing Language', correct: true },
      { text: 'Platform dependent', correct: false },
      { text: 'Easy Level', correct: false },
      { text: 'Multithreding', correct: false }


    ]
  },
  {
    question: '2.Which one is best technology?',
    answers: [
      { text: 'C#', correct: false },
      { text: 'Java ', correct: true },
      { text: 'Python ', correct: false },
      { text: 'C', correct: false }
    ]
  },
  {
    question: '3.How many types of OOPS?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '1', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: '4.What is constructor?',
    answers: [
      { text: 'class and constructor name same', correct: true },
      { text: 'method', correct: false },
      { text: 'function', correct: false },
      { text: 'String', correct: false }
    ]
  },

  {
    question: '5.The u0021 artcle reffered to as a',
    answers: [
      { text: 'Unicode excape sequence', correct: true },
      { text: 'method', correct: false },
      { text: 'function', correct: false },
      { text: 'String', correct: false }
    ]
  },

  {
    question: '6.______is used to find and fix bugs in the java programs.',
    answers: [
      { text: 'JVM', correct: false },
      { text: 'JRE', correct: false },
      { text: 'JDK', correct: false },
      { text: 'JDB', correct: true }
    ]
  },

  {
    question: '7.Which is the return type of the hashCode() method in the Object class?',
    answers: [
      { text: 'int', correct: true },
      { text: 'Object', correct: false },
      { text: 'Long', correct: false },
      { text: 'Void', correct: false }
    ]
  },

  {
    question: '8.In which process a local variable has the same name as one of the instace variable?',
    answers: [
      { text: 'Serialization', correct: false },
      { text: 'Variable Shadowing', correct: true },
      { text: 'Abstraction', correct: false },
      { text: 'Multi-threding', correct: false }
    ]
  }
]
