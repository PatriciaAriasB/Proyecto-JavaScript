//const homeNav = document.getElementById("homeNav")
const homeDiv = document.getElementById("home")
//const questionNav = document.getElementById("questionNav")
const questionDiv = document.getElementById("question")
//const resultsNav = document.getElementById("resultsNav")
const resultDiv = document.getElementById("result")

const startButton = document.getElementById("start-btn");

const viewListQuestions = document.getElementById("View-list-questions")



const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10"

//let startQuestions = [];

axios
  .get(API_URL)
  .then(res => {
    const allList = res.data;
    dataArrayQuestions = allList;
    console.log(dataArrayQuestions);

    // Extraer solo las preguntas:

    const questions = allList.map(question => question.question);
    console.log("Questions:", questions);
    
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

  function startQuestions() {
    startButton.classList.add("hide");
  //currentQuestionIndex = 0;
   questionDiv.classList.remove("hide");
}

startButton.addEventListener("click", startQuestions);