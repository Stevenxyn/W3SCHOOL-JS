/*******************VARIABLES LET VAR Y CONST***********************************/

/* variables con let no funcionan fuera del bloque, las variables con var si
let name = "lopez";
console.log(apodo);
{
    let name = "steven"
    var apodo = "mercyy" //
}
console.log(name);
*/

/*Las variables definidas con let también se elevan a la parte superior del bloque, pero no se inicializan.
Significado: el uso de una letvariable antes de declararla dará como resultado ReferenceError:

nombreCarro;
let nombreCarro = "ferrary";
console.log(nombreCarro);
*/

/*Las variables definidas con varse elevan a la parte superior y se pueden inicializar en cualquier momento.
Significado: puede usar la variable antes de que se declare:

carName = "Volvo";
var carName;
console.log(carName);
*/

/*Las variables con conts no se pueden reasignar ya que son fijas
const name = "lopez";
const name = "carlos"; ERROR
*/

