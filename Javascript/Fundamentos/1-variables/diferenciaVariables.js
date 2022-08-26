//con VAR sobrescribe variables anteriores, RECOMENDADO no usar
var nombre = "Steven";
var nombre = "Lopez";
console.log(nombre);

//con LET no permite declarar 2 veces la misma variable
let edad = 21;
//let edad  = 22;
//pero de esta manera si deja sobrescirbir
edad = 5;
console.log(edad);