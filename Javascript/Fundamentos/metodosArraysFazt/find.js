const heroes = [
    {
        name: "Fanny",
        rol: "Asesino",
        tipoDanio: "Fisico",
        precio: 32000
    },
    {
        name: "Granger",
        rol: "Adc",
        tipoDanio: "Fisico",
        precio: 23000
    },
    {
        name: "Franco",
        rol: "Apoyo",
        tipoDanio: "Fisico",
        precio: 30000
    },
    {
        name: "Vale",
        rol: "Mago",
        tipoDanio: "Magico",
        precio: 12000
    },
    {
        name: "Kimmy",
        rol: "Adc",
        tipoDanio: "Hibrido",
        precio: 42000
    },
    {
        name: "Khufra",
        rol: "Tanque",
        tipoDanio: "Fisico",
        precio: 30000
    },
    {
        name: "Akai",
        rol: "Tanque",
        tipoDanio: "Fisico",
        precio: 28000
    }]

    //permite buscar un elemento dentro de un arreglo el primero que encuentr

//   const resultado =  heroes.find(function (heroes) {
//         if(heroes.name == 'Fanny'){
//             return 1
//         }
//     })

//     console.log(resultado);


//con funciones flecha revuelve el primer elemento que encuente y si no encuentra nada
    //Devuelve undefined
const resultado = heroes.find(heroe => heroe.precio < 20000 )

console.log(resultado.name);
