/*
Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.
- Ejercicio resuelto unicamente en consola.
*/

var queTipoDeDatoEs = "a" ;

/*
Funcion que evalua que tipo de dato ingresamos, si es un array ocupo instanceof para confirmar que es un array y si es igual a true que me retorne es un array, ya que [] dice es un objeto
*/

function averiguadorDeTipoDatos() {
    if (queTipoDeDatoEs instanceof Array === true) {
        return 'Es un array';
    }else{
        return typeof queTipoDeDatoEs;
    }
}
console.log("El tipo de dato es: " + solucionador());
