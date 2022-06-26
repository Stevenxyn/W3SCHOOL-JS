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
    

    //Este metodo evalua si existe un valor que le indiquemos, nos devuelve unicamente valores Booleanos :)
 const EvaluacionDePrecio =   heroes.some(function (heroe) {
        if (heroe.precio > 50000) {
                return true
        }
    })
   // console.log(EvaluacionDePrecio);


   //Validamos si existe algun heroe que se llame Fanny si existe retroana true si no retorna false.
   const ExisteONo = heroes.some(heroes => heroes.name == 'Fanny' ?true : false  )
   console.log(ExisteONo);