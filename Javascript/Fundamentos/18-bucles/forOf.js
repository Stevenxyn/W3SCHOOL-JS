//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

const misNumeros = [10, 20, 30, 40];

for (let valor of misNumeros) {
  console.log("For of: "+ valor);
}

//Bucle for in recorre y 
for (let i in misNumeros) {
    console.log("Recorrido For in: " + i)
}


const persona ={
    nombre: "Steven ",
    apellido: "Lopez ",
    edad: 22
}
 
let  textoPersona = "";
for(let i in persona){
    textoPersona += persona[i];
}
console.log(textoPersona);

//for of en un string
for(let valor of textoPersona){
    console.log("For of en String: "+ valor);
}

misNumeros.forEach((numero,index) =>{
    console.log( "Posicion: " + index +" Numero: "+numero);

})

