//https://www.w3schools.com/js/js_if_else.asp

/*
Para validar cadenas de texto hay que tener en cuenta que se debe validar si tienen los mismos caracteres lo recomendado es con los metodos de convertir a minusculas se podra hacer una validacion entre cadenas mas prolija validando si es igual una que la otra  o para que nos arroje un resultado de una condicional como el siguiente ejemplo
*/

let espacioHorario = "Mañache";

if (espacioHorario == "Mañana") {
    console.log("Buenos dias");
} else if (espacioHorario == "Medio dia") {
    console.log("Buenas tardes");
} else if (espacioHorario.toLowerCase() == "Noche".toLowerCase()) {
    console.log("Buenas noches");
} else {
    console.log("No sabria que hora es :/");
}