/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function even_or_odd(number) {

}

//solution required
function even_or_odd(number) {
  if((number % 2 )== 0){
    console.log("Numero par");
  }else{
    console.log("Impar")
  }
}
console.log(even_or_odd(315));


//solution two with operator ternary

let n = 45;
const esPar = ( (n % 2)==0 ) ? "Es par" : "Es impar";
console.log(esPar);
