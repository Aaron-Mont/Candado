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