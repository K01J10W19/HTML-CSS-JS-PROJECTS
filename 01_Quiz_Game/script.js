// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const homeButton = document.getElementById("home-btn");
const star = document.getElementById("star-review");
console.log(69-23)
const quizQuestions = [
    { question: "foot/leg", answers: [{ text: "あし", correct: true }, { text: "あさ", correct: false }, { text: "いぬ", correct: false }, { text: "へや", correct: false }] },
    { question: "younger sister", answers: [{ text: "いもうと", correct: true }, { text: "おとうと", correct: false }, { text: "せんせい", correct: false }, { text: "ともだち", correct: false }] },
    { question: "dog", answers: [{ text: "いぬ", correct: true }, { text: "ねこ", correct: false }, { text: "とり", correct: false }, { text: "うま", correct: false }] },
    { question: "cat", answers: [{ text: "ねこ", correct: true }, { text: "いぬ", correct: false }, { text: "さかな", correct: false }, { text: "にく", correct: false }] },
    { question: "bird", answers: [{ text: "とり", correct: true }, { text: "いぬ", correct: false }, { text: "ねこ", correct: false }, { text: "さかな", correct: false }] },
    { question: "fish", answers: [{ text: "さかな", correct: true }, { text: "とり", correct: false }, { text: "ねこ", correct: false }, { text: "いぬ", correct: false }] },
    { question: "head", answers: [{ text: "あたま", correct: true }, { text: "かお", correct: false }, { text: "て", correct: false }, { text: "あし", correct: false }] },
    { question: "face", answers: [{ text: "かお", correct: true }, { text: "あたま", correct: false }, { text: "め", correct: false }, { text: "はな", correct: false }] },
    { question: "eye", answers: [{ text: "め", correct: true }, { text: "かお", correct: false }, { text: "はな", correct: false }, { text: "みみ", correct: false }] },
    { question: "ear", answers: [{ text: "みみ", correct: true }, { text: "め", correct: false }, { text: "はな", correct: false }, { text: "くち", correct: false }] },
    { question: "mouth", answers: [{ text: "くち", correct: true }, { text: "みみ", correct: false }, { text: "め", correct: false }, { text: "はな", correct: false }] },
    { question: "nose", answers: [{ text: "はな", correct: true }, { text: "くち", correct: false }, { text: "め", correct: false }, { text: "みみ", correct: false }] },
    { question: "hand", answers: [{ text: "て", correct: true }, { text: "あし", correct: false }, { text: "かお", correct: false }, { text: "あたま", correct: false }] },
    { question: "leg", answers: [{ text: "あし", correct: true }, { text: "て", correct: false }, { text: "かお", correct: false }, { text: "あたま", correct: false }] },
    { question: "friend", answers: [{ text: "ともだち", correct: true }, { text: "せんせい", correct: false }, { text: "いもうと", correct: false }, { text: "おとうと", correct: false }] },
    { question: "teacher", answers: [{ text: "せんせい", correct: true }, { text: "ともだち", correct: false }, { text: "がくせい", correct: false }, { text: "おとうと", correct: false }] },
    { question: "student", answers: [{ text: "がくせい", correct: true }, { text: "せんせい", correct: false }, { text: "ともだち", correct: false }, { text: "いもうと", correct: false }] },
    { question: "room", answers: [{ text: "へや", correct: true }, { text: "いえ", correct: false }, { text: "としょかん", correct: false }, { text: "がっこう", correct: false }] },
    { question: "house/home", answers: [{ text: "いえ", correct: true }, { text: "へや", correct: false }, { text: "としょかん", correct: false }, { text: "こうえん", correct: false }] },
    { question: "library", answers: [{ text: "としょかん", correct: true }, { text: "がっこう", correct: false }, { text: "へや", correct: false }, { text: "いえ", correct: false }] },
    { question: "school", answers: [{ text: "がっこう", correct: true }, { text: "としょかん", correct: false }, { text: "こうえん", correct: false }, { text: "いえ", correct: false }] },
    { question: "park", answers: [{ text: "こうえん", correct: true }, { text: "がっこう", correct: false }, { text: "としょかん", correct: false }, { text: "いえ", correct: false }] },
    { question: "car", answers: [{ text: "くるま", correct: true }, { text: "じてんしゃ", correct: false }, { text: "でんしゃ", correct: false }, { text: "ばす", correct: false }] },
    { question: "bicycle", answers: [{ text: "じてんしゃ", correct: true }, { text: "くるま", correct: false }, { text: "でんしゃ", correct: false }, { text: "ばす", correct: false }] },
    { question: "train", answers: [{ text: "でんしゃ", correct: true }, { text: "くるま", correct: false }, { text: "じてんしゃ", correct: false }, { text: "ばす", correct: false }] },
    { question: "bus", answers: [{ text: "ばす", correct: true }, { text: "くるま", correct: false }, { text: "でんしゃ", correct: false }, { text: "じてんしゃ", correct: false }] },
    { question: "station", answers: [{ text: "えき", correct: true }, { text: "こうえん", correct: false }, { text: "としょかん", correct: false }, { text: "がっこう", correct: false }] },
    { question: "book", answers: [{ text: "ほん", correct: true }, { text: "ざっし", correct: false }, { text: "しんぶん", correct: false }, { text: "ノート", correct: false }] },
    { question: "magazine", answers: [{ text: "ざっし", correct: true }, { text: "ほん", correct: false }, { text: "しんぶん", correct: false }, { text: "ノート", correct: false }] },
    { question: "newspaper", answers: [{ text: "しんぶん", correct: true }, { text: "ざっし", correct: false }, { text: "ほん", correct: false }, { text: "ノート", correct: false }] },
    { question: "notebook", answers: [{ text: "ノート", correct: true }, { text: "しんぶん", correct: false }, { text: "ざっし", correct: false }, { text: "ほん", correct: false }] },
    { question: "chair", answers: [{ text: "いす", correct: true }, { text: "つくえ", correct: false }, { text: "へや", correct: false }, { text: "がっこう", correct: false }] },
    { question: "desk", answers: [{ text: "つくえ", correct: true }, { text: "いす", correct: false }, { text: "へや", correct: false }, { text: "がっこう", correct: false }] },
    { question: "television", answers: [{ text: "テレビ", correct: true }, { text: "ラジオ", correct: false }, { text: "ほん", correct: false }, { text: "ざっし", correct: false }] },
    { question: "radio", answers: [{ text: "ラジオ", correct: true }, { text: "テレビ", correct: false }, { text: "ほん", correct: false }, { text: "ざっし", correct: false }] },
    { question: "bag", answers: [{ text: "かばん", correct: true }, { text: "くるま", correct: false }, { text: "じてんしゃ", correct: false }, { text: "でんしゃ", correct: false }] },
    { question: "paper", answers: [{ text: "かみ", correct: true }, { text: "ノート", correct: false }, { text: "ざっし", correct: false }, { text: "ほん", correct: false }] },
    { question: "money", answers: [{ text: "おかね", correct: true }, { text: "きっぷ", correct: false }, { text: "てがみ", correct: false }, { text: "かばん", correct: false }] },
    { question: "ticket", answers: [{ text: "きっぷ", correct: true }, { text: "おかね", correct: false }, { text: "てがみ", correct: false }, { text: "かばん", correct: false }] },
    { question: "letter", answers: [{ text: "てがみ", correct: true }, { text: "きっぷ", correct: false }, { text: "おかね", correct: false }, { text: "かばん", correct: false }] },
    { question: "friend's house", answers: [{ text: "ともだちのいえ", correct: true }, { text: "がっこう", correct: false }, { text: "いえ", correct: false }, { text: "へや", correct: false }] },
    { question: "mother", answers: [{ text: "おかあさん", correct: true }, { text: "おとうさん", correct: false }, { text: "あね", correct: false }, { text: "いもうと", correct: false }] },
    { question: "father", answers: [{ text: "おとうさん", correct: true }, { text: "おかあさん", correct: false }, { text: "あに", correct: false }, { text: "おとうと", correct: false }] },
    { question: "older sister", answers: [{ text: "あね", correct: true }, { text: "いもうと", correct: false }, { text: "おかあさん", correct: false }, { text: "あに", correct: false }] },
    { question: "older brother", answers: [{ text: "あに", correct: true }, { text: "おとうと", correct: false }, { text: "おとうさん", correct: false }, { text: "ともだち", correct: false }] },
    { question: "younger brother", answers: [{ text: "おとうと", correct: true }, { text: "あに", correct: false }, { text: "おとうさん", correct: false }, { text: "ともだち", correct: false }] },
    { question: "child", answers: [{ text: "こども", correct: true }, { text: "おとな", correct: false }, { text: "せんせい", correct: false }, { text: "ともだち", correct: false }] },
    { question: "school bag", answers: [{ text: "ランドセル", correct: true }, { text: "かばん", correct: false }, { text: "つくえ", correct: false }, { text: "いす", correct: false }] },
    { question: "stationery", answers: [{ text: "ぶんぼうぐ", correct: true }, { text: "ノート", correct: false }, { text: "ほん", correct: false }, { text: "ざっし", correct: false }] },
    { question: "clock/watch", answers: [{ text: "とけい", correct: true }, { text: "カレンダー", correct: false }, { text: "つくえ", correct: false }, { text: "いす", correct: false }] },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVENT LISTENERS
startBtn.onclick = () => {
    popupInfo.classList.add("active");
}
exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
}
homeButton.onclick = () => {
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
    // reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    popupInfo.classList.remove("active");

    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
  // reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    quizQuestions.forEach(q => {
        shuffleArray(q.answers);
    });

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        //it's a property of the button element that allows you to store custom data
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
  // optimization check
    if (answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        // check if there are more questions or if the quiz is over
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function generateStars(n) {
    let stars = "";
    for (let i = 0; i < n; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    return stars;
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        star.innerHTML = generateStars(5);
        resultMessage.textContent = "パーフェクト！天才です！";
    } else if (percentage >= 80) {
        star.innerHTML = generateStars(4);
        resultMessage.textContent = "素晴らしい！よくできました！";
    } else if (percentage >= 60) {
        star.innerHTML = generateStars(3);
        resultMessage.textContent = "よく頑張りました！もっと学びましょう！";
    } else if (percentage >= 40) {
        star.innerHTML = generateStars(2);
        resultMessage.textContent = "まずまずです！もう一度挑戦してみましょう！";
    } else {
        star.innerHTML = generateStars(1);
        resultMessage.textContent = "勉強を続けてください！次はもっと上手くいきます！";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");

    startQuiz();
}