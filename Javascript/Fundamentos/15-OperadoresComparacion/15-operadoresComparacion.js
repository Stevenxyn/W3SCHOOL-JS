//https://www.w3schools.com/js/js_comparisons.asp


let x = 5;
//igual a ==
console.log(x == 3);
//true pero solo evalua que el 5 es igual sin ver el tipo de dato
console.log(x == "5");

//igual a en valor y tipo de dato ===
console.log(x === 3);
console.log(x === "5");
console.log(x === 5);

//!= No es igual al 

console.log(x != 5);
console.log(x != "2");
console.log(x != 2);

//!==    valor no igual o tipo no igual
console.log(x !== 5);
console.log(x !== "5");
console.log(x !== 1);


//< menor que
console.log(x < 1);

//> mayor que
console.log(x > 10);

//mayor y igual que
console.log(x >= 6);

//menor y igual que
console.log(x <= 5);

console.log("El operador AND (&&) devuelve verdadero si ambas expresiones son verdaderas; de lo contrario, devuelve falso.");

console.log("AND &&: " + (x > 3 && x < 10));

console.log("El operador OR (||) devuelve verdadero si una o ambas expresiones son verdaderas; de lo contrario, devuelve falso.");

console.log("OR ||: " + (x == 2 || x == 9));
console.log("OR ||: " + (x == 5 || x == 9));
console.log("OR ||: " + (x === "5" || x == 9));

console.log("El operador NOT (!) devuelve verdadero para declaraciones falsas y falso para declaraciones verdaderas.");

console.log("NOT !: " + !(x == 1));
console.log("NOT !: " + !(x == 5));

console.log(" ");









