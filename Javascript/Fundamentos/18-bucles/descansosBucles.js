//https://www.w3schools.com/js/js_break.asp

/*
break instruccion que rompe el ciclo >> esto ocurre si se produce una condicion especifica

continue instruccion que continua el ciclo

*/

//Ejemplo romper ciclo al llegar a 3 se rompera
for (let i = 1; i < 10; i++) {
    if (i === 5) { break; }
    let texto = "El numero es: " + i;
    console.log(texto);
}

console.log(" ");

//continue salta la iteracion dependiendo la condicion se evidencia que el numero 5 no lo muestra y sigue la iteracion sin ponerlo en la salida
for (let i = 1; i < 10; i++) {
    if (i === 5) { continue; }
    let texto = "El numero es: " + i;
    console.log(texto);
}