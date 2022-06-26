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

//Sumar todos los precios de los heroes forma noob

// let totalPrecios = 0;
// for (let i = 0; i < heroes.length; i++) {
//     totalPrecios += heroes[i].precio
// }
// console.log(totalPrecios);

//forma semi pro 

const resultadoTotal = heroes.reduce(function (totalPrecio, heroe) {
    return totalPrecio + heroe.precio
}, 0)// indicamos que totalPrecio Inicie en 0 en cada iteracion
console.log(resultadoTotal);


// Forma pro papi como un senior que monda de semi pro ni que nada 

const sumaTotalPrecios = heroes.reduce((total, heroe) => total + heroe.precio, 0)
console.log(sumaTotalPrecios);


const desarrolladores = [
    {
        id: 1,
        nombre: "Lopez",
        habilidades: ["HTML", "JS", "CSS", "React"]
    },
    {
        id: 2,
        nombre: "Lorena",
        habilidades: ["HTML", "JS", "CSS", "React", "Angular"]
    }, {
        id: 3,
        nombre: "Juan",
        habilidades: ["HTML", "JS", "CSS", "React", "Angular"]
    }
]

const resultado = desarrolladores.reduce(function (todasHabilidades, desarrollador) {
    return Array.from(new Set([...todasHabilidades, ...desarrollador.habilidades]))
}, [])

console.log(resultado);