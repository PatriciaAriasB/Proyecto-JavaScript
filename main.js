//const homeNav = document.getElementById("homeNav")
const homeDiv = document.getElementById("home")
//const questionNav = document.getElementById("questionNav")
const questionDiv = document.getElementById("question")
//const resultsNav = document.getElementById("resultsNav")
const resultDiv = document.getElementById("result")

const startQuestions = document.getElementById("start-questions");


const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10"

let startBtn = [];

axios
  .get(API_URL)
  .then((res) => (startBtn = res.data))
  .catch((err) => console.error(err));


  const hideViews =()=>{
    homeDiv.classList.add("hide")
    questionDiv.classList.add("hide")
    resultDiv.classList.add("hide")
}
const showHome =()=>{
    hideViews()
    questionDiv.classList.remove("hide")
}

const showAnswers =()=>{
    hideViews()
    homeDiv.classList.remove("hide")
}

const showResults =()=>{
    hideViews()
    resultDiv.classList.remove("hide")
}

homeNav.addEventListener("click",showHome)
contactNav.addEventListener("click",showContact)

