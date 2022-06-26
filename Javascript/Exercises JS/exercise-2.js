//Transforme el dia obtenido por el metodo de Date().getDay  a los dias de la semana en string
const diasArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let fecha = new Date();

//Manera extensa
/*
function asignarDia() {
    if (diaSemana === 1) {
        return 'Lunes'
    } else if (diaSemana === 2) {
        return 'Martes'
    } else if (diaSemana === 3) {
        return 'Miercoles'
    } else if (diaSemana === 4) {
        return 'Jueves'
    } else if (diaSemana === 5) {
        return 'Viernes'
    } else if (diaSemana === 6) {
        return 'Sabado'
    } else {
        return 'Domingo'
    }
}
console.log("Manera Extensa" + asignarDia());
*/
//Dependiendo la posicion que tenga le asignara el dia de la semana, recordar empieza a contrar desde 0
let dia = diasArray[fecha.getDay()]
console.log(dia);

//Show month
let month = months[fecha.getMonth()]
console.log(month);

//Show Hour
let hour = fecha.toLocaleTimeString();
console.log(hour);

console.log(`The hour is ${hour} of day ${dia.toUpperCase()} in the month ${month.toUpperCase()}`);

