const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("questions");
const questionDiv = document.querySelector(".question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scorePoints = document.getElementById("scoreDisplay");
const resultsDiv = document.getElementById("results");
const result = document.getElementById("result");


const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10";

startButton.disabled = true;

const usernameInput = document.getElementById("username");
usernameInput.addEventListener("input", function() {
   
    if (usernameInput.value.trim() !== "") {
        startButton.disabled = false;
    } else {
      
        startButton.disabled = true;
    }
});

let score = 0;
let currentQuestion = 0;
let questions = [];

const getInfo = async () => {
    try {
        const response = await axios.get(API_URL);
        questions = response.data;

    } catch (error) {
        console.error(error);
    }
}

const startQuiz = async () => {
    try {
        await getInfo();
        showQuestion();
        homeDiv.classList.add('d-none');
        questionElement.classList.remove('d-none');
    } catch (error) {
        console.error(error);
    }
};

const showQuestion = () => {
    const question = questions[currentQuestion];
    questionDiv.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    Object.entries(question.answers).forEach(([key, value]) => {
        if (value !== null) {
            const button = document.createElement("button");

                //  button.classList.add("badge"); 
                //  button.classList.add("rounded-pill"); 
                //  button.classList.add("bg-warning"); 
    
            button.innerText = value;
            button.dataset.correctAnswer = question.correct_answers[key]; 
    
            button.addEventListener("click", () => {
                selectAnswer(key, button);
                
            });
    
            answerButtonsElement.appendChild(button);
        }
    });

    questionElement.appendChild(answerButtonsElement);
};

const selectAnswer = (selectedAnswerKey, button) => {

    const question = questions[currentQuestion];
    const correctAnswerKey = Object.keys(question.correct_answers).find(key => question.correct_answers[key] === "true").substring(0, 8);

    Array.from(answerButtonsElement.children).forEach(button => {

        if (button.innerText === question.answers[correctAnswerKey]) {
            button.classList.add("correct");
            button.setAttribute("correct", "correct");

        } else if (button.innerText === question.answers[selectedAnswerKey]) {
            button.classList.add("incorrect");

        }
        button.disabled = true;
    });

    if (button.getAttribute("correct") == "correct") {
        score++;
        scorePoints.innerHTML = "";
    }

    if (questions.length > currentQuestion + 1) {
        nextButton.classList.remove('d-none');
    } else {
        startButton.innerText = "Restart";
        questionElement.classList.add('d-none');
        scorePoints.classList.add('d-none');
        resultsDiv.classList.remove('d-none');
        result.innerHTML = `<p> ${score} POINTS <p>`;
    }
};

startButton.addEventListener('click', startQuiz);

function setNextQuestion() {
    showQuestion(questions[currentQuestion]);
    nextButton.classList.add('d-none');
}
nextButton.addEventListener("click", () => {
    currentQuestion++;
    setNextQuestion();

});

function resetState() {
    nextButton.classList.add("d-none");
    answerButtonsElement.innerHTML = ""
}

