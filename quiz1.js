const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correct: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correct: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correct: 'Blue Whale'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correct: 'William Shakespeare'
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: ['Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean', 'Pacific Ocean'],
        correct: 'Pacific Ocean'
    }

];
var scorMarks = {'A': 0, 'B': 0, 'C': 0};
let currentQuestion = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

// function selectAnswer(selectedAnswer) {
//     const question = quizData[currentQuestion];

//     if (selectedAnswer === question.correct) {
//         student_A_count++;
//         alert('Correct!');
        
//     } else {
//         alert(`Incorrect. The correct answer is: ${question.correct}`);
//     }
//     currentQuestion++;
//     if (currentQuestion < quizData.length) {
//         showQuestion(quizData[currentQuestion]);
//     } else {
//         alert('Quiz completed! ...  with score: '+ student_A_count);
        
//     }

// }
function selectAnswer(selectedAnswer) {
    
    const question = quizData[currentQuestion];

    if (selectedAnswer === question.correct) {
        scorMarks['A']++;
        alert('Correct!');
    } else {
        alert(`Incorrect. The correct answer is: ${question.correct}`);
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
    } else {
        alert('Quiz completed! ... with score: ' + scorMarks['A']);

        // Redirect to the Leaderboard page
        window.location.href = 'Leaderboard.html';

    }
}


function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}
startQuiz();

