/* Punto 2 -Matematicas Discretas Determinar si los numeros dados son primos o no. 9,47,1007,3738,209,637,4141,1050703*/
function nPrimo (n){
  //Validacion de que debe ingresar datos exclusivamente numericos.
  if (typeof n != `number`){
    console.log(`El dato ingresado no es tipo Numero.`);
  }
  //Validacion que debe ingresar datos exclusivamente enteros.
  if(!Number.isInteger(n)){
    console.log(`Debe ingresar solo numeros enteros.`);
  }
  if(n <= 1){
    console.log(`Debe ingresar enteros positivos.`);
  }
  //Calcular Raiz de n ingresado,Y el valor guardado buscamos en entero mas cercano hacia abajo
  let raiz = Math.floor(Math.sqrt(n)) + 1;
  console.log(`raiz cuadrada de ${n} es ${raiz}`)
  //Empezar a iterar desde i hasta la raiz que se calculo
  for(let i = 2; i < raiz; ++i){
    if (n % i == 0){
      return true;
    }
    return false;
  }}
//Llamar la funcion con el numero
nPrimo(1050703);