//https://www.w3schools.com/js/js_datatypes.asp

/*
Saber el tipo de dato de cada elemento en JS es con typeof(elemento)
*/

let edad = 20;
console.log(typeof (edad));

let nombre = "stevem";
console.log(typeof (nombre));

let persona = {
    firstname: "carlos",
    lastname: "lopez",
    altura: 1.76
};
console.log(typeof (persona));

let carros = ['audi', 'ferrari', 'porsche'];
console.log(typeof (carros));

// JavaScript evalúa las expresiones de izquierda a derecha. Diferentes secuencias pueden producir diferentes resultados:
console.log(5 + 5 + "Steven");

// Aca concatena pero en la anterior suma ya que evalua de izquierda a derecha 
console.log("Steven" + 5 + 5);

//Los tipos de datos en JS son dinamicos
let x;  //now x is indefined
x = 1;  // now x is a number
x = 'Heyy' // now x is a string

//podemos crear variables con valores indefinidos y asignarle un valor mas adelante; recordad los dos tipos de variables 
let inicializada;
let variableDeclarada = "tengo un valor";

let probemos = undefined;
console.log(probemos);
probemos = 2;
console.log(probemos);
