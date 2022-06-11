//https://www.w3schools.com/js/js_numbers.asp

//JS solo tiene un tipo de numero, podemos escribirlo con decimales o sin decimales

let conDecimales = 3.14;
     sinDecimales = 142;

//tambien podemos ocupar expreciones de notacion cientifica

let notacionCientifica = 123e5;


/*
Los números de JavaScript son siempre de punto flotante de 64 bits
A diferencia de muchos otros lenguajes de programación, JavaScript no define diferentes tipos de números, como enteros, cortos, largos, de punto flotante, etc.

Los números de JavaScript siempre se almacenan como números de punto flotante de doble precisión, siguiendo el estándar internacional IEEE 754.

Este formato almacena números eno 64 bits, donde el número (la fracción) se almacena en los bits 0 a 51, el  exponente en los bits 52 a 62 y el signo en el bit 63:

*/


/*
Precisión de enteros
Los números enteros (números sin notación de punto o exponente) tienen una precisión de hasta 15 dígitos.
El número máximo de decimales es 17.
*/

let xi = 999999999999999;   // x will be 999999999999999
let yi = 9999999999999999;  // y will be 10000000000000000

let flotantes = 0.2 + 0.1;
console.log(flotantes); //0.30000000000000004

let solucionFlotante = (0.2 *10 + 0.1*10) / 10;
console.log(solucionFlotante);
console.log(flotantes.toFixed(1));


//Adición de números y cadenas
//Si se suman dos numeros el resultado seran dos numero 5 + 5 = 10
console.log("Suma normal de numeros: " + (5+5));

//Si se suman dos cadenas el resultado sera una concatenacion de cadenas no una suma "5" +  "5" = "55"
console.log(`Suma de dos cadenas: ${"5" + "5"}`);

//Si agrega un número y una cadena, el resultado será una concatenación de cadenas:
console.log(`Suma de numero y cadena: ${10 + "5"} y ${"5"+10} se concatenan mas no se suman`);
let x = 10;
let y = 20;
let izquierdaSuma = x + y + "Desde la izquierda suma: ";
let derechaConcatena ="Desde la derecha concatena: "+ x + y ;
/*
El intérprete de JavaScript funciona de izquierda a derecha.
Primero se suma 10 + 20 porque x e y son números.
Entonces 30 + "30" se concatena porque z es una cadena.
*/
console.log(izquierdaSuma);
console.log(derechaConcatena);
/*
//tener en cuenta
let x = 100;         // x is a number
let y = "100";       // y is a string

let x = "100";
let y = "10";
let z = x / y;// funcionara

let x = "100";
let y = "10";
let z = x * y;// funcionara

let x = "100";
let y = "10";
let z = x - y;// funcionara

let x = "100";
let y = "10";
let z = x + y;//Error ya que + concatenara las cadenas
*/

//NaN = no a number palabra reservada que indica que un numero no es un numero legal

console.log(100 / "CRY");//Cry no es un numero es un string por respuesta NaN
console.log(100*"2");// pero si es un numero dentro de de comillas como string si realizara la operacion
console.log("2"*100);// igualmente si esta invertido

//ocupar la funcion global isNaN() para saber si el valor de algo es un numero o no
let probandoisNaN = 5 * "Play";
     probandoDos = 5 * 2;
console.log(isNaN(probandoisNaN));// dice que true por que si es NaN = no a number
console.log(isNaN(probandoDos)); // false ya que si son numeros

//PRESENTE QUE NaN ES UN NUMERO
let k = NaN;
console.log(typeof(k));

let miNumero = 2;
while(miNumero != Infinity){
     miNumero = miNumero * miNumero;
     console.log(miNumero);
}


//toLocalesString() = nos acomoda los numeros dependiendo la region por ejemplo en colombia 10000 lo pasa a 10.000
let dinero = 100000;
console.log(dinero.toLocaleString("es-CO", {style:"currency", currency:"COP"}));

