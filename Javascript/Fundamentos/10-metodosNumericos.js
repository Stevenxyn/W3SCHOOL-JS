// https://www.w3schools.com/js/js_number_methods.asp

//x.toString(); convierte numeros a  cadenas
let a = 31;
console.log(typeof a);
console.log(typeof a.toString());
console.log(typeof (5*5).toString());

//toFixed() nos trae la cantidad de decimales que le asignemos ideal para trabajar con dinero
let dinero = 15.550;
console.log(dinero.toFixed(2));

//toPrecision() devuelve una cadena, con un número escrito con una longitud especificada:
let x = 9.656;
x.toPrecision();// numero normal
x.toPrecision(2); // trae el numero contando 2 incluyendo el entero, igual para los de abajo
x.toPrecision(4);
x.toPrecision(6);

/*
    Conversion de variables a numeros
    Hay 3 metodos en JS para convertir variables en numero
    Number() convierte cadenas de numeros en numeros
    parseInt() con enteros
    parseFloat() con decimales

*/
//Ocupando Number()
console.log(typeof Number(true));
console.log(typeof Nu.mber(false));
console.log(typeof Number("42"));
console.log(typeof Number("         10        "));
console.log( Number("10.22"));
console.log( Number("10,22"));// con coma no es un numero y arroja NaN
console.log( Number("Where is my mind?"));// este es un string incapaz de volverlo a numero
console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

//ocupando parseInt()
console.log(parseInt(-10));
console.log(parseInt(10.92));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30")); // solo devolvera el primer numero el 10
console.log(parseInt("10,6"));
console.log(parseInt("años 10"));
console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

//parseFloat()

console.log(parseFloat("-10"));
console.log(parseFloat("10.92"));
console.log(parseFloat("10.412"));
console.log(parseFloat("10 20 30")); // solo devolvera el primer numero el 10
console.log(parseFloat("10,64"));
console.log(parseFloat("años 10"));
