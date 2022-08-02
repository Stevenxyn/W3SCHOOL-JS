//Creacion de constantes NO se pueden modificar sugiero poner en mayusculas las constantes

var nombre = 'steven';
let apellido = 'lopez';
const PI = 31.141592;

nombre = 'Carlos';
apellido = 'montaño';
//PI = 546; //TypeError: Assignment to constant variable.


const estudiante = {
    id : 6,
    nombre: 'Steven'
}

console.log(estudiante);
//Podemos cambiar uno por uno pero no todo en uno solo
estudiante.id = 8;
estudiante.nombre ='lopez';
console.log(estudiante);

//No podemos cambiar todo el objeto ya que es una constante
estudiante = {
    id : 8,
    nombre: 'Carlos'
}
console.log(estudiante);

