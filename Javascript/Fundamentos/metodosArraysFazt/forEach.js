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

//El metodo forEach no retorna nada no guarda nada

    // Manera noob
    // for(let i = 0; i < heroes.length; i++ ){
    //     console.log(heroes[i]);
    

    //manera semi pro
    //recibe un callback funcion dentro de una funcion
    // heroes.forEach(function (heroe, indice, heroes) {
    //     console.log(heroe);
    //     console.log(indice);
    //     console.log(heroes);
    // })

    //funcion pro

    const heroesRoles = []

    heroes.forEach((heroe,indice) => { 
        console.log(`${heroe.name.toUpperCase()} es un heroe tipo ${heroe.rol} con posicion ${indice}`);

        //de esta manera enviamos el recorrido a guardar al array vacio creado anteriormente porque este metodo no devuelve nada
        heroesRoles.push(`${heroe.name} tipo ${heroe.rol}`)
    
    })
    console.log(heroesRoles);