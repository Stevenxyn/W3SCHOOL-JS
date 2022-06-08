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
let parrafo = "En profunda tristeza, el príncipe buscó por toda la tierra por ella. Pero nadie había visto a la princesa."

