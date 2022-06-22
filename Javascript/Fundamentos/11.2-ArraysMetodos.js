// https://www.w3schools.com/js/js_array_methods.asp
//Muchoas mas metodos https://www.w3schools.com/jsref/jsref_obj_array.asp

const heroes = ["Fanny", "Granger", "Franco", "Moskov"];

//toString()  convierte una matriz en una cadena de valores, los separa por comas 
console.log(heroes.toString()); //Fanny,Granger,Franco,Moskov

//join() Funciona igual quq toStemos pero aca podemos colocar el separaor que deseemos 
//console.log(heroes.join(" - "))

//.pop() Elimina el ultimo elemento de la matriz y nos devuelve el valor que se elimino
//console.log(heroes.pop()) Elimina el ultimo elemento del la matriz 
console.log(heroes)

//push() Agrega un nuevo elemento a la matriz pero lo agrega al final
console.log(heroes.push("Palace"))//el metodo nos devuelve la nueva longitud
console.log(heroes)

//shift() Elimina el primer elemento de la matriz y le cambia el indice a los elementos a un indice mas bajo
console.log(heroes.shift()); // Otorga el indice de fanny al siguiente y nos devuelve el metodo a quien se elimino.
console.log(heroes.length); // evidenciamos que se elimino y nos muestra la nueva longitud
console.log(heroes);//Se evidencia que se elimino a fanny y arroja el nuevo array

//unshift() agrega un elemento a la matriz al principio y desplaza los elementos mas antiguos
console.log(heroes.length);
console.log(heroes[0]);//trae a granger indice 0
console.log(heroes.unshift("Khufra")); // agrega a khufra y obtiene indice 0 los demas suben indice, nos devuelve la longitud nueva
console.log(heroes);
console.log(heroes[0]);// el nuevo indice tiene a khufra en 0 ya que se agrego nuevo
console.log(heroes[1])

//length propiedad proporciona una manera fácil de agregar un nuevo elemento a una matriz:
console.log(heroes[heroes.length] = "Nana" , "Arroz");//podemos agregas mas de uno, los agrega a lo ultimo y como resultado de lo anterior nos retorna el que agregamos
console.log(heroes);

//delete elimina de elementos matriz, produce agujeros en la matriz recomendado usar pop() o shift()
console.log(heroes.length);
//console.log(delete heroes[1]);// deja el espacio vacio de lo que existia creando agujeros no ocupar es lo recomendado
console.log(heroes);
console.log(heroes.length);

//concat() Unifica matrices no las modifica o elimina, crea una nueva con la union de las que digamos
const magos = ["Vale", "Valir", "Change"];
console.log(heroes);
let unionArreglos = heroes.concat(magos);// permite agregas mas concatenaciones de arrays
console.log("La union de los dos arrays es: " + unionArreglos.join(", "));


//splice() method adds news items to an array
/*
parametros 2 y 1
2 donde se incrustaran los nuevos items
1 en donde inscrustamos hacia arriba decidimos cuantos eliminar en este caso solo 1 y seria change
"AddOne", "AddTwo" son los que agregamos y se agregan dependiendo la posicion que demos con 2

este metodo nos retorna un array con los elementos que hayamos elliminado
*/
console.log(magos.splice(2,1, "AddOne", "AddTwo"));// method return an array with the deleted items
console.log(magos);

//slice() corta una parte de la matriz creando otra desde donde fue el corte

const frutas= ["Manzana", "Pera", "bananos", "Mangos"];
let frutaFavorita =  frutas.slice(3);//extraemos el elemento y como no hay mas adelante nos trae solo 1
console.log(frutaFavorita);//mostramos el elemento guaradado en la variable 
console.log(frutas);// la matriz origen permanece con los mismos valores, ya que slice crea una nueva matriz con el elemento extraido
console.log(frutas.slice(1,3));// este elegimos la cantidad desde pera1 a bananos3 el segundo parametro se cuenta desde 1 y desde el el primer elmento del array en este caso manzana desde ahi empieza a contar


//Conversion toSrring automatica

const canciones = ["Cry", "Opera House", "K", "Touch", "Alove"];

console.log(canciones.join(" - "));
/*De esta manera tambien convierte a string automaticamente.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
*/

//sort() Ordena matrices alfabeticamente
console.log(canciones.sort());
console.log(canciones.reverse());//ordena al reves

const numeros = [0,1,3,5,4,7,6,86,4,-10,100,101];
numeros.sort(function(a,b) {return a-b})// funcion para validar si un numero es mayor o menor

let masAlto = numeros[numeros.length -1];
console.log(masAlto);

let menorValor = numeros[0];
console.log(menorValor);


