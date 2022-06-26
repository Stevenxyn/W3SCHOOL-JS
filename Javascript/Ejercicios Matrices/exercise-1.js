//Retorne multiplicado por 2 el siguiente array usando metodos  [2,3,4,5,6,7,8,9]

const arrayNumeros = [2,3,4,5,6,7,8,9];

const multiplicados = arrayNumeros.map(numero => numero * 2);
console.log("Array Inicial: " + arrayNumeros);
console.log("Array Normal invertido: " + arrayNumeros.reverse());
console.log("Array Multiplicado: " + multiplicados);