//https://www.w3schools.com/js/js_loop_for.asp

/*
Los bucles pueden ejecutar un bloque de código varias veces.

Bucles JavaScript
Los bucles son útiles si desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente.
A menudo, este es el caso cuando se trabaja con matrices:
*/

const carros = ["carro 1", "carro2", "carro3", "carro4", "carro5"];

for (let i = 0; i < carros.length; i++) {
    let auto = carros [ i]
    console.log(auto)
    console.log(i);
}

console.log("Ejercicio 1 ");

//mostrar numeros del 1 al 20 con bucle for
var numero = 20;
for(let i = 1; i <= numero; i++){
    console.log(i)
}