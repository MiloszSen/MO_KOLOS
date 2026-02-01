// Konfiguracja przedmiotów
const subjects = {
  'algebra': { title: 'Algebra Magisterka', file: 'js/questions-algebra.js', varName: 'questionsAlgebra' },
  'analiza': { title: 'Analiza Magisterka', file: 'js/questions-analiza.js', varName: 'questionsAnaliza' },
  'mn': { title: 'Metody Numeryczne Magisterka', file: 'js/questions-mn.js', varName: 'questionsMN' },
  'inf': { title: 'Informatyka Magisterka', file: 'js/questions-inf.js', varName: 'questionsInf' },
  'rownania': { title: 'Rownania rozniczkowe Magisterka', file: 'js/questions-rownania.js', varName: 'questionsRownania' }
};

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let score = 0;
let mistakes = [];
let currentOptions = [];

// Pobierz przedmiot z URL
function getSubjectFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('subject') || 'algebra';
}

// Ustaw tytuł na podstawie przedmiotu
function setTitle(subject) {
  const config = subjects[subject];
  if (config) {
    document.getElementById('quiz-title').innerText = config.title;
    document.getElementById('page-title').innerText = config.title;
  }
}

// Ładuj plik z pytaniami
function loadQuestions() {
  const subject = getSubjectFromURL();
  setTitle(subject);
  
  const config = subjects[subject];
  if (!config) {
    console.error('Nieznany przedmiot:', subject);
    return;
  }

  const script = document.createElement('script');
  script.src = config.file;
  script.onload = () => {
    // Poczekaj krótką chwilę, aby zmienna była dostępna
    setTimeout(() => {
      const questionsVar = window[config.varName];
      if (questionsVar && questionsVar.length > 0) {
        startQuiz(questionsVar);
      } else {
        console.error('Nie znaleziono zmiennej:', config.varName);
      }
    }, 50);
  };
  script.onerror = () => {
    console.error('Nie udało się załadować pytań dla przedmiotu:', subject);
  };
  document.head.appendChild(script);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz(questions) {
  shuffledQuestions = [...questions];
  shuffle(shuffledQuestions);
  currentQuestionIndex = 0;
  score = 0;
  mistakes = [];
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("question-container").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("mistakes").innerHTML = "";

  const questionData = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question").innerText = questionData.question;

  // Obsługa obrazka
  const imgEl = document.getElementById("question-image");
  if (questionData.image && questionData.image.trim() !== "") {
    imgEl.src = questionData.image;
    imgEl.style.display = "block";
  } else {
    imgEl.src = "";
    imgEl.style.display = "none";
  }

  currentOptions = questionData.options.map(opt => ({
    text: opt,
    correct: questionData.answer.includes(opt)
  }));

  shuffle(currentOptions);
  selectedAnswers = [];

  const buttons = document.querySelectorAll(".options button");
  currentOptions.forEach((optionObj, index) => {
    const button = buttons[index];
    button.innerText = optionObj.text;
    button.classList.remove("selected");
    button.disabled = false;
  });
}

function selectAnswer(index) {
  const button = document.querySelectorAll(".options button")[index];
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    selectedAnswers = selectedAnswers.filter(i => i !== index);
  } else {
    button.classList.add("selected");
    selectedAnswers.push(index);
  }
}

function checkAnswer() {
  const correctIndexes = currentOptions
    .map((obj, i) => obj.correct ? i : -1)
    .filter(i => i >= 0);

  if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctIndexes.sort())) {
    score++;
  } else {
    const questionData = shuffledQuestions[currentQuestionIndex];
    mistakes.push({
      question: questionData.question,
      selectedAnswer: selectedAnswers.map(idx => currentOptions[idx].text),
      correctAnswer: correctIndexes.map(idx => currentOptions[idx].text)
    });
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result").innerText = `Twój wynik: ${score} / ${shuffledQuestions.length}`;

  if (mistakes.length > 0) {
    let mistakeText = "Błędne odpowiedzi:<br>";
    mistakes.forEach((mistake, index) => {
      mistakeText += `${index + 1}. ${mistake.question}<br>
                      Twoje odpowiedzi: ${mistake.selectedAnswer.join(", ")}<br>
                      Poprawne odpowiedzi: ${mistake.correctAnswer.join(", ")}<br><br>`;
    });
    document.getElementById("mistakes").innerHTML = mistakeText;
  } else {
    document.getElementById("mistakes").innerText = "Gratulacje! Wszystkie odpowiedzi były poprawne.";
  }
}

function returnToMenu() {
  window.location.href = "index.html";
}

// Uruchom ładowanie pytań po załadowaniu DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadQuestions);
} else {
  loadQuestions();
}
