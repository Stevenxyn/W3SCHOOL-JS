// https://www.w3schools.com/js/js_math.asp

console.log("La sintaxis de cualquier propiedad es: .Math.property");

//Metodos que retornan datos ya establecidos como PI
console.log(Math.PI.toFixed(2));
console.log("Euler's Numero: " + Math.E);
console.log("Raiz Cuadrada 2: " + Math.SQRT2);
console.log("Raiz Cuadrada 1/2: " + Math.SQRT1_2);
console.log("Logaritmo Natural 2: " + Math.LN2);
console.log("Logaritmo Nautral: " + Math.LOG10);
console.log("Logaritmo Base 2 de E" + Math.LOG2E);
console.log("Logaritmo Base 10 de E" + Math.LOG10E);

console.log(" ");

//redondear un numero entero 4 formas de hacerlo
console.log(Math.round(5.5));
console.log(Math.round(5.4));

//Esre metodo redondea pero si es por encima del 0 en decimal ya pasa al siguiente numero
console.log(Math.ceil(5.9));
console.log(Math.ceil(5.0));

console.log(" ");

//Math.sign(x) devuelve si x es negativo, positivo o nulo
/*
1 = Positivo
-1 = Negativo
NaN =  null no es un numero pero que obvio xD
*/
console.log(Math.sign(123213));
console.log(Math.sign(-123));
console.log(Math.sign("asdsad"));

//Math.pow(x, y)devuelve el valor de x a la potencia de y:

console.log(Math.pow(5, 2));
console.log(Math.pow(2, 12));


//Math.sqrt(x)devuelve la raíz cuadrada de x:

console.log(Math.sqrt(64));

//Math.abs(x)devuelve el valor absoluto (positivo) de x:

console.log(Math.abs(-4.2));

/*
Math.sin(x)devuelve el seno (un valor entre -1 y 1) del ángulo x (dado en radianes).
Si desea usar grados en lugar de radianes, debe convertir grados a radianes:
Ángulo en radianes = Ángulo en grados x PI / 180.
*/

console.log(Math.sin(90 * Math.PI / 180));


/*
Math.cos(x)devuelve el coseno (un valor entre -1 y 1) del ángulo x (dado en radianes)
Si desea usar grados en lugar de radianes, debe convertir grados a radianes:
Ángulo en radianes = Ángulo en grados x PI / 180.
*/
Math.cos(0 * Math.PI / 180);

/*
Math,min() Retorna el valor minimo 
Math.max() Retorna el mayor maximo
*/

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, -200, 0));
console.log(Math.max(1, 2, 3, 4, 10, 6, 7, 8, 9));


//Math.random()devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo):

console.log(Math.random().toFixed(1)); //Decimales
console.log((Math.random() * 100).toFixed(0)); //Numero aleatorio maximo 100
let min = 5;
let max = 20;

let x = Math.floor(Math.random()*(max - min + 1)+ min)
console.log(x);


