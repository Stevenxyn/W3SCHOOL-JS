/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.

Dada una matriz de enteros como cadenas y números, devuelva la suma de los valores de la matriz como si todos fueran números.
Devuelve tu respuesta como un número.
*/

function sumMix(x){

}
/*solution Con parametro Rest ...MasElementos me crea una matriz con indefinidos argumentos*/

function sumMix(...masParametros) {
    let sumaTotal = masParametros.reduce(function(totalSuma,e){
        return totalSuma + Number(e)
    },0)
    console.log(sumaTotal)
    console.log(typeof(sumaTotal));
}
sumMix("4",5,"12",1,50,"10","5","100")

