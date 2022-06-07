
/* alert("Vamos a comenzar un juego, si adivinas cual numero del 1-10 estoy pensando GANAS mil dolares, Tenes 3 chances, Apretá aceptar cuando estes listo");
for (i = 1; i <= 3; i++) {
    let numero = parseInt(prompt("Ingresa tu numero de la suerte"));
    if (numero == 2) {
        alert("Increible, GANASTEEE usd 1000, corre a gastarlosssss!!!!!")
        break
    }
    else if (i == 1) {
        alert("Te quedan dos oportunidades, es sin miedo al exito");
    }
    else if (i == 2) {
        alert("Ultima oportunidad, pensa tranquilo, es mucha money jeje. Mucha suerte!");
    }
    else {
        alert("Perdiste, que dolor que pena, otra vez será");
    }
} */


//Segundo desafio
//debugger
class Participantes {
    constructor(nombre, dni, msj) {
        this.nombre = nombre;
        this.dni = dni;
        this.msj = msj;
        this.datosInfo = `Mi nombre es ${this.nombre}, mis ultimos numeros de DNI son ${this.dni} y mi msj es "${this.msj}"`;
    }
    resumen() {
        alert(this.datosInfo)
    }
    saludo() {
        alert(this.nombre + " " +"Gracias por Participar")
    }
}

const sorteo = ()=> {
    alert("Vamos a empezar, si adivinas cual numero del 1-10 estoy pensando GANAS mil dolares, Tenes 3 chances, Apretá aceptar cuando estes listo");
    for (i = 1; i <= 3; i++) {
        let numero = parseInt(prompt("Ingresa tu numero de la suerte"));
        if (numero == 2) {
            alert("Increible, GANASTEEE usd 1000, corre a gastarlosssss!!!!!")
            break
        }
        else if (i == 1) {
            alert("Te quedan dos oportunidades, es sin miedo al exito");
        }
        else if (i == 2) {
            alert("Ultima oportunidad, pensa tranquilo, es mucha money jeje. Mucha suerte!");
        }
        else {
            alert("Perdiste, que dolor que pena, otra vez será");
        }
    }
}

let respuesta = prompt("Queres participar de un sorteo? si o no?");
if (respuesta == "si" || respuesta == "Si" || respuesta == "SI") {
    const participante = new Participantes(prompt("ingresa tu nombre"), parseInt(prompt("Ingresa tus 3 ultimos numeros de DNI")), prompt("Dejanos tu mensaje ganador"));
    participante.resumen();
    participante.saludo();
    sorteo();
} else {
    alert("Otro dia será ;)")
}

