let intentos = 3

let contadorIntentos = document.getElementById("intentos")


window.addEventListener('load', function() {
    contadorIntentos.textContent = intentos
  });


function comprobarResultado() {

    let respuestaUno = document.getElementById("respuesta1")
    let respuestaDos = document.getElementById("respuesta2")
    let respuestaTres = document.getElementById("respuesta3")
    let respuestaCuatro = document.getElementById("respuesta4")



    if ((respuestaUno.value == 1) && (respuestaDos.value == 9)  && (respuestaTres.value == 9)  && (respuestaCuatro.value == 7)) {

       alert("Has desbloqueado el candado")
   
    } else {

        alert("Respuesta incorrecta")
    }

    
    intentos--

    contadorIntentos.textContent = intentos


    hasPerdido()
}

function hasPerdido() {


    let cerradura = document.getElementById("botonCerradura")

    if (intentos == 0) {

        cerradura.style.display = "none"
    }
}


const trivial = [
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Marte", "Júpiter", "Saturno", "Venus"],
        correcta: "Júpiter",
        pista: "1"
    },
    {
        pregunta: "¿En qué año llegó el hombre a la luna?",
        opciones: ["1965", "1969", "1972", "1980"],
        correcta: "1969",
        pista: "9"
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Atlántico", "Pacífico", "Índico", "Ártico"],
        correcta: "Pacífico",
        pista: "9"
    },
    {
        pregunta: "¿Qué instrumento mide la presión atmosférica?",
        opciones: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
        correcta: "Barómetro",
        pista: "7"
    }
];


for (let i = 0; i < trivial.length; i++) {

    let containerTrivial = document.getElementById("trivial")

    
    let crearContenerPreguntas = document.createElement("div")

    let crearPregunta = document.createElement("p")
    crearPregunta.innerHTML = trivial[i].pregunta

    crearContenerPreguntas.appendChild(crearPregunta)


    
    trivial[i].opciones.forEach(opcion => {

        let crearBoton = document.createElement("button")
        crearBoton.textContent = opcion

        crearBoton.addEventListener("click", () => {

            if (opcion === trivial[i].correcta) {

                alert("correcto")
            } else {

                alert("incorrecto")
                intentos--
            }
        })

    crearContenerPreguntas.appendChild(crearBoton)

    })
    
    
    containerTrivial.appendChild(crearContenerPreguntas)



    
}