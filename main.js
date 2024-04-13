//const homeNav = document.getElementById("homeNav")
const homeDiv = document.getElementById("home")
//const questionNav = document.getElementById("questionNav")
const questionDiv = document.getElementById("question")
//const resultsNav = document.getElementById("resultsNav")
const resultDiv = document.getElementById("result")

const startButton = document.getElementById("start-btn");


const API_URL = "https://quizapi.io/api/v1/questions?apiKey=q5kU1p9KmRLUts72IgoZ7SB5U9s3Sen3myX4selL&limit=10"

//let startQuestions = [];

axios
  .get(API_URL)
  .then(response => {
    const questions = response.data;
    dataArrayQuestions = questions;
    console.log(dataArrayQuestions);
  })
 .catch(error => {
   console.error('Error al obtener los datos:', error);
  });






  
  let dataArrayQuestions;





  let currentQuestionIndex;

  // const hideViews =()=>{
  //   homeDiv.classList.add("hide")
  //   questionDiv.classList.add("hide")
  //   resultDiv.classList.add("hide")
  // }

function startQuestions() {
    startButton.classList.add("hide");
  //currentQuestionIndex = 0;
   questionDiv.classList.remove("hide");
}

//startButton.addEventListener("click", startButton);


startButton.addEventListener("click", startQuestions);



const nombres = ["Juan", "María", "Carlos", "Laura", "Pedro"];

// Obtener el elemento <ul> donde se mostrarán los nombres
const listaNombres = document.getElementById("lista-nombres");

// Función para mostrar los nombres en la lista
function mostrarNombres() {
    // Limpiar el contenido existente en la lista
    listaNombres.innerHTML = "";

    // Iterar sobre el array de nombres y agregar cada nombre como un elemento de lista (<li>) al <ul>
    nombres.forEach(function(nombre) {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = nombre; // Establecer el texto del elemento <li> como el nombre actual
        listaNombres.appendChild(li); // Agregar el elemento <li> al <ul>
    });
}


























  
// //     const showAbout =()=>{
// //    hideViews()
// //       aboutDiv.classList.remove("hide")
// //     // }


// // }


// // // const showHome =()=>{
// // //     hideViews()
// // //     homeDiv.classList.remove("hide")
// // // }

// const showAnswers =()=>{
//  hideViews()
//  questionDiv.classList.remove("hide")

//  }

 

// // const showResults =()=>{
// //     hideViews()
// //     resultDiv.classList.remove("hide")
// // }


// // startBtn.addEventListener("click",showAnswers)
// // // contactNav.addEventListener("click",showContact)

// startBtn.addEventListener('click',showAnswers);
