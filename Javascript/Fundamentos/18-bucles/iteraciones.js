//https://www.w3schools.com/js/js_iterables.asp

/*
iterar es facil de entender, simplemente es recorrer una secuencia de elementos

iterar una cadena
iterar un array
iterar un objeto con matrices
iterar iterar 
*/

//iterar una cadena de texto

const nombre = "Synthesis" 
for(const elemento of nombre){
    console.log(elemento);
}

const carros = ["Audi", "BMW", "Porsche"];
for(const e of carros){
    console.log(e);
    console.log(carros.length);
}