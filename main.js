const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
//const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const answerButtonsElement = document.getElementById("answer-buttons");

const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10";

let currentQuestion = 0;
let questions = [];

const getInfo = async () => {
  try { const response = await axios.get (API_URL);
    questions = response.data;
     
  } catch (error) {
    console.error(error);
  }

}
getInfo()

const startQuitz = async () => {
  try {
    const question = questions[currentQuestion];
    questionElement.innerText = question.question;
    let correctAnswer=""

    Object.keys(question.correct_answers).forEach(answer=>{
      if(question.correct_answers[answer] =="true"){
        correctAnswer=answer.substring(0,8)
        console.log(correctAnswer);
      }
    })
    Object.values(question.answers).forEach(answer => {
      if(answer !==null){

        const button = document.createElement("button");
        button.innerText = answer;
        answerButtonsElement.appendChild(button);
      }
   
    });
    console.log(question);

    questionElement.appendChild(answerButtonsElement)
  } catch (error) {
    console.error(error);
  }
}

const showQuestions = async (question) => {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;

    if (answer.correct) {
      button.dataset.correct = true;
    }
    answerButtonsElement.appendChild(button);
  });
}


const startQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    questions = response.data;
    startQuitz ();
    homeDiv.classList.add('d-none');
    nextButton.classList.remove('d-none');


  } catch (error) {
    console.error(error);
  }
};


function displayNextQuestion() {
  currentQuestion++;
}

startButton.addEventListener('click', startQuestions);


