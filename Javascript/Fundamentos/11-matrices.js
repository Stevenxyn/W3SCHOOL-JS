//https://www.w3schools.com/js/js_arrays.asp
/*
Una matriz es una variable especial. ya que puede contener mas de un valor
*/

const autos = ["audi", "porsche", "mercedes benz"];
const auto = autos.length;

for(let i = 0; i < auto; i++){
    console.log(`El auto ${autos[i]} esta en la posicion ${i}`);
}

autos.forEach(element => {
    console.log(`Modelo de auto ${element} esta en la posicion ${auto}`);
});

for (const auto of autos) {
    console.log(`Modelo de auto ${auto} esta en la posicion ${auto.length}`);
}