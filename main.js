const homeDiv = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const answerButtonsElement = document.getElementById("answer-buttons");

const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10";

let currentQuestion = 0;
let questions = [];

const showQuestions = async () => {
  try {
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question;
    console.log(question);
  } catch (error) {
    console.error(error);
  }
};

const startQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    questions = response.data;
    showQuestions();
    startButton.classList.add('d-none');
    homeDiv.classList.add('d-none');


  } catch (error) {
    console.error(error);
  }
};




function displayNextQuestion() {
  currentQuestion++;
}

startButton.addEventListener('click', startQuestions);



// function startQuestions() {
//   startButton.classList.add("hide");
// //currentQuestionIndex = 0;
//  questionDiv.classList.remove("hide");
// }

// const answer =async(e)=>{
//   e.preventDefault()
//   try {
//     const answer ={
//       name:inputName.value,
//       status:inputStatus.value,
//       gender:inputGender.value,
//       image:inputImage.value,

//     }
//     console.log("Answer",answerButtonsElement);
//     await axios.post(API_URL,newCharacter)
//     answer()
//   } catch (error) {
//     console.error(error);
//   }

//  }




// const showHome =()=>{
//   homeDiv.classList.remove("d-none")
//   homeNavBtn.children[0].classList.add("active")
//   createNavBtn.children[0].classList.remove("active")
//   formDiv.classList.add("d-none")
//  }

//  const createCharacter =async(e)=>{
//   e.preventDefault()
//   try {
//     const newCharacter ={
//       name:inputName.value,
//       status:inputStatus.value,
//       gender:inputGender.value,
//       image:inputImage.value,

//     }





