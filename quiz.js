// quiz.js

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let shuffledNouns = [...nouns]; // Make a copy of the original nouns array

shuffleArray(nouns); // Shuffle the nouns array

let currentNoun = 0;
let correctResponses = 0; // Initialize the number of correct responses
let totalResponses = 0;   // Initialize the total number of responses

function loadQuestion() {
    document.getElementById('question').innerText = `What is the gender of the noun "${nouns[currentNoun].word}"?`;
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.color = ''; // Reset text color
}

function checkAnswer(answer) {
    const correctGender = nouns[currentNoun].gender;
    if (answer === correctGender) {
        document.getElementById('result').innerText = 'Correct!';
        changeColor('correct');
        correctResponses++; // Increase the number of correct responses
    } else {
        document.getElementById('result').innerText = 'Wrong! The correct answer is ' + correctGender;
        changeColor('wrong');
    }
    totalResponses++; // Increase the total number of responses
    updateScore();
    currentNoun = (currentNoun + 1) % nouns.length;
    setTimeout(loadQuestion, 2000);
}

function updateScore() {
    const scoreRatio = correctResponses / totalResponses; // Calculate the score ratio
    const scoreDisplay = `${correctResponses}/${totalResponses}`; // Format the score display
    document.getElementById('score').innerText = `Score: ${scoreDisplay} (${(scoreRatio * 100).toFixed(2)}%)`; // Update score display in HTML
}

function changeColor(result) {
    const resultElement = document.getElementById('result');
    if (result === 'correct') {
        resultElement.style.color = 'green';
    } else if (result === 'wrong') {
        resultElement.style.color = 'red';
    }
}

window.onload = loadQuestion;
