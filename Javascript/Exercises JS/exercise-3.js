const heroes = [
    {
        name: "Fanny",
        rol: "Asesino",
        tipoDanio: "Fisico",
        precio: 32000,
        edad: 20
    },
    {
        name: "Granger",
        rol: "Adc",
        tipoDanio: "Fisico",
        precio: 23000,
        edad: 20
    },
    {
        name: "Franco",
        rol: "Apoyo",
        tipoDanio: "Fisico",
        precio: 30000,
        edad: 20
    },
    {
        name: "Vale",
        rol: "Mago",
        tipoDanio: "Magico",
        precio: 12000,
        edad: 20
    },
    {
        name: "Kimmy",
        rol: "Adc",
        tipoDanio: "Hibrido",
        precio: 42000,
        edad: 20
    },
    {
        name: "Khufra",
        rol: "Tanque",
        tipoDanio: "Fisico",
        precio: 30000,
        edad: 20
    },
    {
        name: "Akai",
        rol: "Tanque",
        tipoDanio: "Fisico",
        precio: 28000,
        edad: 22
    }]

//Esta funcion me trae el heroe con la edad que le diga y me recorre 

const r = heroes.filter(function (heroe) {
    return heroe.edad > 19
}).map(function (heroe) {
    return `El heroe ${heroe.name.toUpperCase()} cuenta con una edad de ${heroe.edad} y su rol es ${heroe.rol.toUpperCase()}`
})

console.log(r);
