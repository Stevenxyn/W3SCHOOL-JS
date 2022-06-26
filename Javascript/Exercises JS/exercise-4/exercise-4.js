//Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

//Ocupo parseInt para convertir los datos de string a number ya que recibe son strings
var a = parseInt(prompt("Ingrese primer NUmero: "));
var b = parseInt(prompt("Ingrese Segundo NUmero: "));

//Realizando la funcion con una arrow function
const SumarNumeros = () =>  alert(a + b);
SumarNumeros();
