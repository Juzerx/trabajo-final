let questions = [
  //preguntas
  {
    id: 1,
    question: "Cuando se celebra halloween?",
    answer: "El 31 de octubre",
    options: [
      "El 1 de noviembre",
      "El 21 de octubre",
      "El 31 de octubre",
      "Nunca"
    ]
  },
  {
    id: 2,
    question: "Que se hace en halloween?",
    answer: "Pedir dulces y disfrazarse",
    options: [
      "disfrazarse y ya",
      "preparar comida inglesa",
      "robar bancos",
      "Pedir dulces y disfrazarse"
    ]
  },
  {
    id: 3,
    question: "que es disfrazarse?",
    answer: "vestir de un personaje o cosa",
    options: [
      "vender limonada",
      "enviar mails desesperados a paulina(monitora)",
      "vestir de un personaje o cosa",
      "comprar vestidos caros"
    ]
  },
  {
    id: 4,
    question: "Como se pide un dulce en halloween?",
    answer: "truco o trato",
    options: [
      "Extorcionando a las personas",
      "ofreciendoles una oportunidad unica con los NFT",
      "Amenazandolos con dejar su casa llena de papel de higienico",
      "truco o trato"
    ]
  },
  {
    id: 5,
    question: "Quien es dracula?",
    answer: "Un vampiro",
    options: [
      "Un inversor de trading",
      "Un zombie",
      "Un vampiro",
      "ninguno de estos"
    ]
  },
  {
    id: 6,
    question: "Como se le llama a el personaje de viernes 13?",
    answer: "Jason",
    options: [
      "Jason",
      "Pedro el destripador de personas",
      "Dross",
      "Mario"
    ]
  },
  {
    id: 7,
    question: "Cual es la razon por la que hice esto?",
    answer: "Para el proyecto final",
    options: [
      "Para el proyecto final",
      "Para molestar con preguntas molestas",
      "Porque si ;>",
      "porque respectivamente veia increiblemente necesario de crear una web potencialmente.. Ya paro XD"
    ]
  },
  {
    id: 8,
    question: "Que NO se debe hacer en halloween?",
    answer: "Compartir regalos de navidad",
    options: [
      "Ver los episodios especiales de holloween",
      "Disfrazarse",
      "Compartir regalos de navidad",
      "Asustar gente"
    ]
  },
  {
    id: 9,
    question: "vamos a pedir dulces :'3?",
    answer: "No",
    options: [
      "No",
      "No",
      "No",
      "No"
    ]
  },
  {
    id: 10,
    question: "Por que no podemos comer muchos dulces?",
    answer: "Porque es malo para la salud",
    options: [
      "Porque es malo para la salud",
      "Porque si :>",
      "Porque vendra un inversor de crypto monedas",
      "Porque vendra un espiritu maligno"

    ]
  },
];
//sistema para contar las preguntas y seleccionarlas
let question_count = 0;
let points = 0;


window.onload = function () {
  show(question_count);
};
//mostrar las preguntas
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2 id="a">Pregunta ${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
  toggleActive();
}
// seleccion de preguntas
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

let button_count = 0;
//siguiente pregunta y validador de respuestas


function next() {
  button_count++;
  if (button_count == 1) {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    activep = document.getElementsByClassName("active");
    if (user_answer == questions[question_count].answer) {
      activep[0].style.backgroundColor = "greenyellow";
      points += 10;
      sessionStorage.setItem("points", points);

    } else {
      activep[0].style.backgroundColor = "red";
      points -= 5;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  }

  if (button_count == 2) {
    if (question_count == questions.length - 1) {
      location.href = "final.html";
    }
    console.log(question_count);
    question_count++;
    show(question_count);
    button_count = 0;
  }
}