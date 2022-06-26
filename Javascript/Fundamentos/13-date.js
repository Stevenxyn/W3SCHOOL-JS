//https://www.w3schools.com/js/js_dates.asp

const fecha = new Date();
console.log("Se muestra en orden de la siguiente manera: " + "year, month, day, hours, minutes, seconds, milliseconds");

console.log("da el dia: " + fecha.getDate());
console.log("Da el dia de la semana: "+fecha.getDay());
//Año completo
console.log(fecha.getFullYear());
//Mes si le sumamos uno empieza desde 1 los meses y no desde 0
console.log(fecha.getMonth() + 1);
//retnorna la cantidad de segundos desde 1970 al año que le indiquemos
console.log(fecha.getTime(2022));
//Retorna la hora local
console.log(fecha.toLocaleTimeString());
//Retorna la fecha en la que nos encontramos
console.log(fecha.toLocaleDateString());
//retorna la fecha con el dia en el que nos encontramos
console.log(fecha.toDateString());
//Retorna el dia de la semana se empieza domingo = 0
console.log(fecha.getDay());
