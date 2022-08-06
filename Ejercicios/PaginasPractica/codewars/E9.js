/* Crea una funcion que recorra los arrays y como parametro nos deje poner
    - El nombre de la matriz a recorrer
    - el elemento que queremos buscar si existe o no
*/

const autos = ["Audi", "Mercedes Benz", "Porsche", "Ferrari"];
const colores = ["Amarillo", "Azul", "Verde", "Negro", "Blanco"];
const numeros = [5, 50, 77, 100, -100, 513, 15000, 1];

function validarElementos(matrizValidar, elemento) {
  
    if (matrizValidar.includes(elemento)) {
        console.log(`Elemento existente en la posicion: ${matrizValidar.indexOf(elemento) + 1}`);
    } else {
        console.log("Este elemento no existe!!");
    }
}

validarElementos(numeros, -100)
