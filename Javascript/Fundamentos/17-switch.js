//https://www.w3schools.com/js/js_switch.asp

/*
La switchdeclaración se utiliza para realizar diferentes acciones basadas en diferentes condiciones.
La expresión de cambio se evalúa una vez.
El valor de la expresión se compara con los valores de cada caso.
Si hay una coincidencia, se ejecuta el bloque de código asociado.
Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado.
*/

//Si pongo un valor mas alto de los casos me mostrara el default
let x = 41;
switch (x) {
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Martes"
        break;
    case 3:
        day = "Miercoles"
        break;
    case 4:
        day = "Jueves"
        break;
    case 5:
        day = "Viernes"
        break;
    case 6:
        day = "Sabado"
        break;
    case 7:
        day = "Domingo"
        break;
    default:
        day = "No se que dia es"
        break;
}
console.log(day);


//En este caso la variable es string pero los casos solo recibe uno number y otro string
//por tanto deben ser del mismo tipo de dato los que se evaluen para que funcione

let prueba = "2";
switch (prueba) {
    case 2:
        texto1 = "Funciona"
        break;
    case "as":
        texto1 = "aFunciona"
        break;
    default:
        texto1 = "Error valor invalido"
        break;
}
console.log(texto1);