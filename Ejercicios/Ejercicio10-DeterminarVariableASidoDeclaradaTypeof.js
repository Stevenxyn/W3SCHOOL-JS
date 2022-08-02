//

let a = 45; // esto es una variable declarada
let b; // esto es una variable definida


console.log(typeof(a));
console.log(typeof(b));

if(typeof b === 'undefined'){
    console.log('la variable b no tiene asignado un valor');
}else{
    console.log('la variable b  tiene valor asignado');
}

console.log();

if(typeof a === 'undefined'){
    console.log('la variable b no tiene asignado un valor');
}else{
    console.log('la variable tiene valor asignado b');
}