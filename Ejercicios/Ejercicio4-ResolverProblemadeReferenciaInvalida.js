//console.log(mensaje) ReferenceError: mensaje is not defined

function mostrarSaludo() {
    var mensaje = 'Hola este codigo se ejecuta en una funcion';
    return mensaje
}
console.log(mostrarSaludo()) ;

//console.log(mensaje); //ReferenceError: mensaje is not defined


var numero = 10; // Variable global con VAR

function mostrarNumero() {
    console.log('el numero es : ' + numero);
    
}
mostrarNumero()