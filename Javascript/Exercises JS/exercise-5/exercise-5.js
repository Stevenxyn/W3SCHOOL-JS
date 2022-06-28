//Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.


var celcius = parseInt(prompt("Ingrese temperatura en Celcius:"));

//Con ayuda de buscar la formula de convercion de C a F la apropiamos en una funcion flecha

const gFahrenheit = () => { fahrenheit = (celcius * 9 / 5) + 32; alert(fahrenheit); }
gFahrenheit();
