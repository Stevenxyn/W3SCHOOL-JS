/*
Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.

Por ejemplo:

Dada [34, 15, 88, 2]su solución volverá2
Dada [34, -345, -1, 100]su solución volverá-345
Puede suponer, a los efectos de este kata, que la matriz proporcionada no estará vacía.

*/
//const numeros = [4,7,8,9,4,5,6,1,0,-798]
//forma 1
//let numeroMenor = Math.min(...numeros)

//forma2
const numeroMenorDos = (...numeros) => Math.min(...numeros);
console.log(numeroMenorDos(4,7,8,9,4,5,6,1,0));




