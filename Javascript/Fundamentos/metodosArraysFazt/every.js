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
        edad: 20
    }]


    //Every valida si todos tiene el mismo dato que se pide en la condicional retorna true, //pero si solo 1 falla retorna false.

    const validacionEdad = heroes.every(function (heroe) {
        if (heroe.edad === 20) {
                return 1
        }
    })
    console.log(validacionEdad);

    //Validacion si las edades de todos los heroes es igual a 20 si no es asi retornara False.
    const edadesIguales = heroes.every(heroe => heroe.edad === 20);
    console.log(edadesIguales);