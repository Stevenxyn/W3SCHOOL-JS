const heroes = [
    {
        name: "Fanny",
        rol: "Asesino",
        tipoDanio: "Fisico",
        precio: 32000,
        edad: 22
    },
    {
        name: "Granger",
        rol: "Adc",
        tipoDanio: "Fisico",
        precio: 23000,
        edad: 42
    },
    {
        name: "Franco",
        rol: "Apoyo",
        tipoDanio: "Fisico",
        precio: 30000,
        edad: 10
    },
    {
        name: "Vale",
        rol: "Mago",
        tipoDanio: "Magico",
        precio: 12000,
        edad: 17
    }]

//Crea un objeto   teniendo en cuenta el anterior que contenga nombre y edad

const nameAndAge = heroes.map(({ name, rol, edad }) => ({
    fullName: `${name} ${rol}`, edad
}))
    .filter(heroe => heroe.edad > 10)// del recorrido anterior solo nos trae el mayor que le pongamos
    .sort((primer,segundo) => segundo.edad - primer.edad) // Nos ordena por edades menor a mayor y visebersa
    .reduce()


console.log(nameAndAge);