//https://www.w3schools.com/js/js_type_conversion.asp

let a = 12;
b = "haa";
c = "10";
d = " ";
e = "50 10";
f = "10.558";
g = 2.984;
h = 12 + 5;

/*Metodo Unario + 
El operador unario + se puede utilizar para convertir una variable en un número:
*/
let convertido = + c;
console.log(typeof convertido);

let convertidoNan = +b;
console.log(convertidoNan);


//Convettir string a numeros
console.log(typeof c);
console.log("String a numero" + Number(c));
console.log("vacios = 0 : " + Number(d));
console.log("numeros separados NaN: " + Number(e));

console.log("decimal: " + typeof parseFloat(f) + " " + parseFloat(f).toFixed(1));
console.log("Entero: " + typeof parseInt(g) + " " + parseInt(g));


//Convertir numeros a strings
console.log(typeof h);
console.log("Numero a string: " + typeof String(h));
//redondeado a 3 y convertido a string 
console.log("decimal a string " + String(g.toFixed()));

//Fechas a string
let datee = new Date();
//Convertido el valor de date a String con String()
let dateConvertido = String(datee.getDate())
console.log(Number(dateConvertido));
console.log(dateConvertido);


//Convertir Booleanos a Numeros

let primer = false;
     segundo = true;

     console.log(primer);
     console.log(segundo);

     //al convertir a numeros true vale 1 y false 0
     console.log(Number(primer));
     console.log(Number(segundo));
     










