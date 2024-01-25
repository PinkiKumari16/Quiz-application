const quizContainer = document.getElementById('quiz-container');
const nameInput = document.getElementById('student-name');
const leaderboard = document.getElementById('leaderboard');
const rankingsList = document.getElementById('rankings');

let currentStudent = '';

function checkStudentName() {
    currentStudent = nameInput.value.toUpperCase();

    if (currentStudent === 'A') {
        const quizButton = document.createElement('button');
        quizButton.textContent = 'Start Quiz 1';
        quizButton.onclick = function() {
            location.href = 'quiz1.html';
        };
        document.getElementById('name-input').appendChild(quizButton);

    }else if (currentStudent === 'B'){
        const quizButton = document.createElement('button');
        quizButton.textContent = 'Start Quiz 2';
        quizButton.onclick = function() {
            location.href = 'quiz2.html';
        };
        document.getElementById('name-input').appendChild(quizButton);

    }else if (currentStudent === 'C'){
        const quizButton = document.createElement('button');
        quizButton.textContent = 'Start Quiz 3';
        quizButton.onclick = function() {
            location.href = 'quiz3.html';
        };
        document.getElementById('name-input').appendChild(quizButton);
    }
    else {
        alert("Sorry, you can't attempt quiz comptition");
    }
}
