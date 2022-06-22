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

//hace lo mismo que un forEach pero nos retorna un arreglo nuevo

//forma noob funciones normales
// const heroeTipo = heroes.map(function (heroe) {
//     return heroe.name +" " + heroe.rol
// })
// console.log(heroeTipo);

//Forma semi pro - funcion flecha, no hay necesidad de escribir return porque retorna de una vez
// const heroeTipo = heroes.map(heroe =>`Heroe ${heroe.name.toUpperCase()} con rol ${heroe.rol}`)
// console.log(heroeTipo);


//retornar con algo nuevo un arreglo que tiene nuevos objetos concatenados

const nuevosPrecios = heroes.map(heroe => {
    //retorna un objeto con las propiedades que ya existen mas  las que desee crear
    // con ayuda del spreed operation ...heroe
    return {
        ...heroe,
        categoriaHeroe: heroe.name + " " + heroe.rol,
        //Modifica el valor de todos, reemplaza los valores
        precio: 10000
    }
}).map(heroe => ({//agregarmos un nuevo map al ya acabado de realizar con otra funcion
    ...heroe,
    precio: heroe.precio * 2
}))
console.log(nuevosPrecios);



    //Podemos volver a aplicar map y

    // const precioDuplicado = nuevosPrecios.map(heroe =>({
    //     ...heroe,
    //     precio: heroe.precio * 2
    // }))
    // console.log(precioDuplicado);