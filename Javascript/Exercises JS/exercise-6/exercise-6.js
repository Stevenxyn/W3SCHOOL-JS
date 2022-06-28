//Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

var a = parseFloat(prompt("Ingrese un numero: "));
var b = parseFloat(prompt("Ingrese el numero por le cual quiere dividir el primer numero: "));

/*
Funcion que va a dividir los elementos ingresador en el prompt, y le aplico un toFixed para que me muestre solo los dos elementos siguientes en decimal 
*/
const dividirElementos = () =>{r = (a /= b).toFixed(1) ; alert("Resultado es: " + r)}
dividirElementos();