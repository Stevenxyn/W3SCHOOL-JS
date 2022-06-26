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

    //Con filter podemos poner condicionales y nos retorna 
    
    //forma noob 
    // const desarrolladores = []
    // for (let i = 0; i < heroes.length; i++) {
    //     if (heroes[i].precio === 30000) {// de heroes con recorrido i precio === 30k muestre el if
    //         desarrolladores.push(heroes[i]);//guarda los datos dentro de desarrolladores
    //     }
    // }
    // console.log(desarrolladores);


    //forma semi pro // si se usa filter pero no usamos condiciones retorna vacio

     const result = heroes.filter(function (heroe) {
        return heroe.name === 'Fanny'
    })

    console.log(result);

    //Forma senior pro master // traiga diferentes a Mago
    // const resultado = heroes.filter (heroe => heroe.rol != 'Mago');
    // console.log(resultado);