
alert("Vamos a comenzar un juego, si adivinas cual numero del 1-10 estoy pensando GANAS mil dolares, Tenes 3 chances, Apretá aceptar cuando estes listo");
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


