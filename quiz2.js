const quizData = [
    {
        question: 'What is the main ingredient in guacamole?',
        answers: ['Tomato', 'Avocado', 'Onion', 'Cilantro'],
        correct: 'Avocado'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: ['China', 'South Korea', 'Japan', 'Vietnam'],
        correct: 'Japan'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
        correct: 'Leonardo da Vinci'
    },
    {
        question: 'What is the largest desert in the world?',
        answers: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctica'],
        correct: 'Antarctica'
    },
    {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Nitrogen'
    }
];

let currentQuestion = 0;
var student_B_count = 0;
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
        student_B_count++;
    } else {
        alert(`Incorrect. The correct answer is: ${question.correct}`);
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
    } else {
        alert('Quiz completed!...   with score '+ student_B_count);
        
    }
}
function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}
startQuiz();

