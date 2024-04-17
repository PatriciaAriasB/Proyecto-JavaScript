const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("questions");
const answerButtonsElement = document.getElementById("answer-buttons");

const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10";

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

const startQuitz = () => {
    try {
        const question = questions[currentQuestion];
        questionElement.innerText = question.question;
        let correctAnswer = "";

        Object.keys(question.correct_answers).forEach(answer => {
            if (question.correct_answers[answer] === "true") {
                correctAnswer = answer.substring(0, 8);
            }
        });

        Object.entries(question.answers).forEach(([key, value]) => {
            if (value !== null) {
                const button = document.createElement("button");
                button.innerText = value;
                answerButtonsElement.appendChild(button);

                
                if (key === correctAnswer) {
                    button.classList.add("correct");
                } else {
                    button.classList.add("incorrect");
                }

                button.addEventListener("click", selectAnswer);
            }
        });

        questionElement.appendChild(answerButtonsElement);
    } catch (error) {
        console.error(error);
    }
}

const startQuestions = async () => {
    try {
        await getInfo();
        startQuitz();
        homeDiv.classList.add('d-none');
        nextButton.classList.remove('d-none');
    } catch (error) {
        console.error(error);
    }
};

function selectAnswer() {
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button);
  });
  if (questions.length > currentQuestion + 1) {
    nextButton.classList.remove("d-none");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("d-none");
  }
}


startButton.addEventListener('click', startQuestions);