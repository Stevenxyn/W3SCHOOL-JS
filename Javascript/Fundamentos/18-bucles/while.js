//https://www.w3schools.com/js/js_loop_while.asp

/*
el ciclo while recorre un bloque siempre que una condicion especifica sea verdadera
En el siguiente ejemplo, el código del ciclo se ejecutará una y otra vez, siempre que una variable (i) sea menor que 10:
*/

/*
let i = 1;
while (i <= 10) {
    var r = "numero es: " + i;
    i++;
    console.log(r);
}
*/


/*
El siguiente ejemplo utiliza un do whilebucle. El bucle siempre se ejecutará al menos una vez, incluso si la condición es falsa, porque el bloque de código se ejecuta antes de que se pruebe la condición:
*/
var i = 1;

do {
    var text =  "The number is " + i;
    i++;
    console.log(text)
  }
  while (i <= 10);
