// https://www.w3schools.com/js/js_functions.asp

//Esta es el cuerpo de una funcion

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
  //console.log(name(parameter1,parameter2,parameter3));

  
// function sumar (n1, n2){
//     return n1 + n2;
// }
// console.log(sumar(2,2));


function funcionSumar (a,b) {
    return a+b
} 
console.log(funcionSumar(5,5));


function calcular(c1,c2,c3){
    let notaFinal = ((c1 * 0.35) + (c2 * 0.35) + (c3 * 0.3));
    if (notaFinal >=30) {
        console.log(`Pasaste tu nota es de ${notaFinal}`);
    }else{
        return `perdio con ${notaFinal}`;
    }
}
calcular(27,27,50)



/*
Variables locales
Las variables declaradas dentro de una función de JavaScript se vuelven LOCALES para la función.
Solo se puede acceder a las variables locales desde dentro de la función.
Dado que las variables locales solo se reconocen dentro de sus funciones, las variables con el mismo nombre se pueden usar en diferentes funciones.
Las variables locales se crean cuando se inicia una función y se eliminan cuando se completa la función.*/


// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  // code here can NOT use carName
