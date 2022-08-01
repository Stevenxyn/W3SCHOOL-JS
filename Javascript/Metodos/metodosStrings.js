let frase = "El éxito es la suma de pequeños esfuerzos, que se repiten día tras día.";
let autor = " Robert Collier."
let fraseAcompañamiento = " Texto concatenado."
let textoPruebas =  "Este es un texto que contiene varias palabras y que es algo sin sentido";

//Retorna el caracter de la cadena 
frase.charAt(12);

//Retorna el unicode de la cadena
frase.charCodeAt(20);

//Concatena uno o varias cadenas
frase.concat(autor, fraseAcompañamiento);

//Retorna V o F si el string termina con la palabra asignada
frase.endsWith("día.");

//Retorna unicode a caracteres, convertidos diria
let text = String.fromCharCode(77, 101, 114, 99, 121);
text

//Retorna V o F si la palabra que asignamos existe en todo el string
frase.includes("esfuerzos");

//Retorna la posicion de la primera aparicion de la palabra -1 si no existe
textoPruebas.indexOf("que")
textoPruebas.indexOf("23")
textoPruebas.indexOf("texto que")

//Retorna la posicion pero de final a inicio en primera aparicion de la palabra
textoPruebas.lastIndexOf("que")

textoPruebas.lastIndexOf("No Existe")

//Retorna una matriz con las coincidencias encontradas
let miArray = frase.match("esfuerzo")
miArray[0]

//Retorna copias del texto o cadeas que le asignemos
let copiasFrase = frase.repeat(2);
copiasFrase

//Retorna el indice de la primera coincidencia si no existe mostrada -1
frase.search("éxito")
frase.search("No existo")

//Extrae la parte que le digamos recibe dos parametros el inicio y final
let fraseRecortada = frase.slice(0,41)
fraseRecortada

//Divide las palabras si usamos " " divide en espacios "," divide en comas
fraseRecortada.split(" ")

/*Retorna la substrapcion de la cadena recibe dos parametros el inicio y el final
el inicio es requerido pero el final es opcional*/
frase.substr(5)//despues del indice 5 hasta el final
frase.substr(0,5)//del indice 0 hasta el indice 5

//Convierte la cadena a mayusculas
let fraseMayusculas = frase.toUpperCase()
fraseMayusculas

//Convierte la cadena a minusculas
let fraseMinusculas = fraseMayusculas.toLowerCase();
fraseMinusculas

//Elimina los espacios en blanco de los laterales de una cadena
let textoPrueba2 = "    per aspera ad astra     ";
textoPrueba2
textoPrueba2.trim()
