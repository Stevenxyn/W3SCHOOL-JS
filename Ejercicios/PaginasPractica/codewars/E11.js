/*
Rompe Oraciones
Escriba una función que tome una serie de palabras y las junte en una oración y devuelva la oración. Puede ignorar cualquier necesidad de desinfectar palabras o agregar puntuación, pero debe agregar espacios entre cada palabra. ¡Cuidado, no debe haber un espacio al principio o al final de la oración!

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

const oracionRota = ["Quiero", "Aprender", "a", "programar"]

function unirOracion (...rota){
  let unirTexto = rota.join(" ").replaceAll(",", " ");
  console.log(unirTexto);
}

unirOracion(oracionRota);