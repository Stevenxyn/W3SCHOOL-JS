//var es una variable global y hace caso omiso a bloques, modifica si lo escribimos
var estado = true
if (estado) {
    console.log("Entro en el if");
    //Aca modifico el estado y deja porque es global y salta el scope
    var estado  = "Valor de las variables SI es modificado dentro de scope con VAR"
}
console.log(estado);
console.log("\n");


//let es una variable por bloques tiene scope
let estadoLet = true
if (estadoLet){
    console.log("con variable lef entro al else if");
    let estadoLet = "el valor de las variables no es modificado dentro de scope con let"
    //si muestro la variable anterior es totalmente difernete a la de la linea 13 por el scope
    console.log(estadoLet);
}
console.log(estadoLet);


console.log("///////////////////////////////////////////////////////////");

for(let i = 0; i < 2; i++){
    console.log(i);
}
// console.log(i);//ReferenceError: i is not defined


//const es una variable con los mismos alcances que Let pero no es modificable

const numero = 1;
//const numero = 2; 
//console.log(numero); Identifier 'numero' has already been declared

if(numero == 1){
    console.log("dentro del if correcamente");
    //al igual que LET aca numero es diferente que numero fuera del scope
    const numero = 2;
    console.log(numero);
}
console.log(numero);