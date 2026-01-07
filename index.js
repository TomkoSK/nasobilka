let correct = 0;
let incorrect = 0;
let num1, num2;
let answerRevealed = false;

const problemEl = document.getElementById('problem');
const answerEl = document.getElementById('answer');
const submitEl = document.getElementById('submit');
const scoresEl = document.getElementById('scores');
const feedbackEl = document.getElementById('feedback');

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    problemEl.textContent = `${num1} × ${num2} = ?`;
    answerEl.value = '';
    answerEl.focus();
    answerRevealed = false;
    hideFeedback();
}

function checkAnswer() {
    const userAnswer = parseInt(answerEl.value);
    if (userAnswer === num1 * num2) {
        if (!answerRevealed) {
            correct++;
        }
        showFeedback('Správne!', 'correct');
        updateScores();
        generateProblem();
    } else {
        incorrect++;
        answerRevealed = true;
        showFeedback(`Nesprávne! Správna odpoveď je <strong>${num1 * num2}</strong>`, 'incorrect');
        updateScores();
        answerEl.value = '';
        answerEl.focus();
    }
}

function updateScores() {
    scoresEl.textContent = `Správne: ${correct} | Nesprávne: ${incorrect}`;
}

function showFeedback(text, className) {
    feedbackEl.innerHTML = text;
    feedbackEl.className = className;
}

function hideFeedback() {
    feedbackEl.className = '';
    feedbackEl.textContent = '';
}

submitEl.addEventListener('click', checkAnswer);

answerEl.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Initialize
generateProblem();