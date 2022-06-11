//https://www.w3schools.com/js/js_strings.asp

//Las cadenas de JavaScript son para almacenar y manipular texto.

let nombreRamdon = "HASDKJASDASJKDHASKDJH";
//Para hacer un escape de palabras ocupamos \"palabra aqui\" y nos pone comillas a dicha palabra
prueba = "estoy aprendiendo \"yo steven\" a usar JS";

//aca sucede lo mismo pero ahora con una comilla simple \'
pruebaConComilla = "it\'s una prueba";

//Con \\ ponemos una barra invertida a la cadena
pruebaConBarra = "texto numero uno \\ texto numero dos";

masSecuencias1 = "texto numero uno \b texto numero dos ";
masSecuencias2 = "texto numero uno \f texto numero dos ";
masSecuencias3 = "Esta nos da un \n Salto de linea uwu ";
masSecuencias4 = "Esta nos da un \r Salto de linea uwu ";
masSecuencias5 = "Esto nos da \t tabulazion horizontalmente ";
masSecuencias6 = "texto numero uno \v texto numero dos ";

/*
console.log(nombreRamdon.length);
console.log(prueba);
console.log(pruebaConComilla);
console.log(pruebaConBarra);
console.log(masSecuencias1);
console.log(masSecuencias2);
console.log(masSecuencias3);
console.log(masSecuencias4);
console.log(masSecuencias5);
console.log(masSecuencias6);
*/


/*
Cadenas de JavaScript como objetos
Normalmente, las cadenas de JavaScript son valores primitivos, creados a partir de literales:
let x = "John";

Pero las cadenas también se pueden definir como objetos con la palabra clave new:
let y = new String("John");

pero el literal x es un string MIENTRAS el literal y es un objeto





*/
let x = "John";
let y = new String("John");
//console.log(typeof(x) + " \n" + typeof(y) );


//Completo metodos y propiedades string https://www.w3schools.com/jsref/jsref_obj_string.asp
/*
Propiedades y métodos de cadenas
Normalmente, cadenas como "John Doe" no pueden tener métodos o propiedades porque no son objetos.

Pero con JavaScript, los métodos y las propiedades también están disponibles para cadenas, porque JavaScript trata las cadenas como objetos cuando ejecuta métodos y propiedades.
*/
let parrafo = "En profunda tristeza, el príncipe buscó por toda la tierra por ella."
parrafoDos = "Pero nadie había visto a la princesa."
parrafoTres = "El príncipe se despertó, la princesa ya no estaba a su lado."

//charAt() Trae caracter que le indiquemos por 0 al que le pongamos y si ponemos -1 trae el ultimo
console.log(parrafo.charAt(3));
console.log(parrafo.charAt(parrafo.length - 1)); // trae el ultimo del parrafo 

//charCodeAt() Unicode del primer carácter de una cadena
console.log(parrafo.charCodeAt(1));
console.log(parrafo.charCodeAt(parrafo.length - 1)); // trae el ultimo del parrafo 

//concat() recibe dos o mas cadenas, no cambia las cadenas existentes y devuelve una nueva cadena
let resultado = parrafo.concat(" ", parrafoDos, " ", parrafoTres);
console.log(resultado);

//constructor https://www.w3schools.com/jsref/jsref_constructor_string.asp

//endWith() devuelve true o false si la cadena termina con lo especificado  no es compatible con IE 11 (o versiones anteriores).
let final = parrafo.endsWith("ella");
console.log(final);

//fromCharCode() convierte valores unicode a caracteres
let saludo = String.fromCharCode(77, 69 , 82, 67, 89);
console.log(saludo);

//replace() reemplaza palabras por la que le asignemos
let replacePrueba = "Mercy Synthesys One";
let nuevoString = replacePrueba.replace("one", "two");
console.log(nuevoString);

//search() Busca la posicion de la palabra que le pongamos empieza contando desde 0
let searchResultado = parrafo.search("tristeza");
console.log(searchResultado);

//slice() entre el rango de numeros nos trae lo que haya dentro
let sliceResultado = (parrafoTres.slice(0, 12));
console.log(sliceResultado);

//split() divide una cadena en subcadenas separando palabras o letras, podemos almacenarlos dentro de una matriz 
let splitResultado = replacePrueba.split(",")// asi separa por palabras
let splitResultadoPorLetras = replacePrueba.split("")// asi separa por letras
console.log(splitResultado);
console.log(splitResultadoPorLetras);
console.log(replacePrueba.split(" ",   1));// Me separa pero limitando hasta la segunda palabra y separa por palabras no por letras :D

//substr() sustrae las palabras que le dispongamos en los limites del metodo
console.log(parrafoDos.substr(-1));// trae lo ultimo de la cadena
console.log(parrafoDos.substr(0, 10));

//toLowerCase() convierte la cadena a letras minusculas
let convertidorMinusculas = replacePrueba.toLowerCase();// anteriormente tenia primeras letras en mayuscula
console.log(convertidorMinusculas);

//toUpperCase() convierte la cadena a letras mayusculas
let convertidorMayusculas = replacePrueba.toUpperCase();
console.log(convertidorMayusculas);

//trim() Elimina espacios en blanco a los laterales de una cadena
let cadenaEspacios = "            metallica!!        ";
console.log(cadenaEspacios);
console.log(cadenaEspacios.trim());// Quita los espacios :D

//indexOf() Trae el indice de la cadena que la pasemos
let indexOfPrueba = "Carlos Steven Lopez Montanio"
console.log(indexOfPrueba.indexOf("Lopez"));// empieza desde 0



