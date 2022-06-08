//https://www.w3schools.com/js/js_objects.asp

// Objetos propiedades y metodos de la vida real
// en la un automovil es un Objeto

/*Objeto = auto
propiedades = marca del carro, modelo, color, peso
Metodos = coche arranque, coche freno, coche pare, coche prender, coche apagar

Todos los autos tienen las mismas propiedades , pero los valores de las propiedades difieren de un auto a otro.
Todos los autos tienen los mismos métodos , pero los métodos se realizan en momentos diferentes .
*/

//Los objetos también son variables. Pero los objetos pueden contener muchos valores.

const carro = {
    nombre:'Carlos Steven',
    apellidos:'Lopez Montaño',
    unicoDuenio: true,
    marca:'Mercedes Benz',
    modelo:'CLA 140',
    anio:2022,
    color:'Negro',
    //Metodo de mostrar unico dueño si lo es o no
    datosDuenio: function(){
        return `El dueño es ${this.nombre} ${this.apellidos} unico dueño: ${this.unicoDuenio}.`;
    }
}

console.log(carro);
console.log(carro.color);
//llamar metodo del objeto carro
console.log(carro.datosDuenio());