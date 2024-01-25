const quizData = [
    {
        question: 'What is the smallest prime number?',
        answers: ['1', '2', '3', '5'],
        correct: '2'
    },
    {
        question: 'Which element has the chemical symbol "O"?',
        answers: ['Osmium', 'Oxygen', 'Oganesson', 'Olivine'],
        correct: 'Oxygen'
    },
    {
        question: 'What is the largest bird in the world?',
        answers: ['Penguin', 'Albatross', 'Emu', 'Ostrich'],
        correct: 'Ostrich'
    },
    {
        question: 'Which ocean is the largest?',
        answers: ['Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean', 'Pacific Ocean'],
        correct: 'Pacific Ocean'
    },
    {
        question: 'Who painted "Starry Night"?',
        answers: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Leonardo da Vinci'],
        correct: 'Vincent van Gogh'
    }  
];

let currentQuestion = 0;
let student_C_count = 0;
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

function selectAnswer(selectedAnswer) {
    const question = quizData[currentQuestion];

    if (selectedAnswer === question.correct) {
        alert('Correct!');
        student_C_count++;
    } else {
        alert(`Incorrect. The correct answer is: ${question.correct}`);
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
    } else {
        alert('Quiz completed!...   with score '+ student_C_count);
        
    }
}
function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}
startQuiz();
