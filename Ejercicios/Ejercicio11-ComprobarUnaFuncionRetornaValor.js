//Comprobar si una funcion retorna valor

function funcion1() {
    return
}

function funcion2() {
    const A = 5;
    return A;
}

function funcion3() {
    return 2 + 3;
}

function funcion4() {
    return true;
}

function funcion5() {
    return {};
}

let fn1 = funcion1();
console.log('Funcion 1 retorna: ' + fn1);
console.log();

let fn2 = funcion2();
console.log('Funcion 2 retorna: ' + fn2);
console.log();

let fn3 = funcion3();
console.log('Funcion 3retorna: ' + fn3);
console.log();

let fn4= funcion4();
console.log('Funcion 4 retorna: ' + fn4);
console.log();

let fn5 = funcion5();
console.log('Funcion 5 retorna: ' + fn5);
console.log();


//

if(fn1 === undefined){
    console.log('Funcion 1 no retorna nada');
}

console.log();

if(fn3 === undefined){
    console.log('Funcion 3 no retorna nada');
}else{
    console.log(`La funcion 3 retorna como resultado ${fn3}`);
}

console.log();

console.log(typeof fn2 === 'undefined');