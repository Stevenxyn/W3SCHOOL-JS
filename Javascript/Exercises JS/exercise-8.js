//Evaluar una variable si el numero ingresado es mayor o menor, y evaluar si el dato que se ingresa es un numero o no

var edad = "18";

function averiguarEdad() {
    if (isNaN(edad)) {
        r = "No es un numero o debe ser mayor a 0"
    } else {
        r = (edad >= 18) ? "Eres Mayor" : "Eres menor"
    }
   console.log(r);
}
averiguarEdad()
