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

    //Ordenar elementos > de mayor a menor < de menor a mayor

//    const ordenandoHeroes = heroes.sort(function (primero,segundo){
//         if (primero.precio < segundo.precio) {
//             return 1
//         }else{
//             return -1
//         }
//     })
//     console.log(ordenandoHeroes);

    //Ordenando mejor  > de mayor a menor < de menor a mayor

    const resultado = heroes.sort ((p,s) =>p.precio < s.precio ? 1 : -1 );
    //ca,biamos los parametros p s A s p
    const resultadoSinCondiciones = heroes.sort ((p,s) =>s.precio - p.precio );

    //console.log(resultado);
    console.log(resultadoSinCondiciones);