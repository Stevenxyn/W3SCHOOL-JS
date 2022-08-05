/*Recorrer un array y validar si en el mismo se encuentran diferentes datos, que le pasemos al llamar la funcion y nos muestre true si existe
false si no existe en el array

*/



function elValidador (vocal){
    const vocales = ["a","e","i","o","u",]
    const r = vocales.includes(vocal)
    console.log(r)
}
elValidador("a")