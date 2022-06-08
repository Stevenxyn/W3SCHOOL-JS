//https://www.w3schools.com/js/js_events.asp

/*
Eventos HTML
Un evento HTML puede ser algo que hace el navegador o algo que hace un usuario.

Estos son algunos ejemplos de eventos HTML:

Una página web HTML ha terminado de cargarse
Se cambió un campo de entrada HTML
Se hizo clic en un botón HTML
A menudo, cuando suceden los eventos, es posible que desee hacer algo.

JavaScript le permite ejecutar código cuando se detectan eventos.

HTML permite que los atributos del controlador de eventos, con código JavaScript , se agreguen a los elementos HTML.

*/


/*
Al dar click nos mostrara la hora y fecha con Date(), aca cambiamos lo que tenga el elemento con el id demostracion

<button type="button" onclick="document.getElementById('demostracion').innerHTML = Date()">
Oprime aqui!
</button>
<p id="demostracion"></p>
*/

/*
<h2>Prueba evento agregar contenido de su propio elemento</h2>

        <button type="button" onclick='this.innerHTML = Date()'>
            Oprime y cambia lo que hay ya escrito!
        </button>
*/

//Esta funcion nos muestra el apodo dentro del mismo boton al oprimirlo
function mostrarApodo() {
    document.getElementById("verApodo").innerHTML = 'Tu apodo es Mercy Synthesis One';
}


//Funcion         <h2>Cambiar el fondo de una caja en CSS con JS</h2>
function cambiarFondo() {
    document.getElementById("bgJs").style.backgroundColor="gray";
}

function fondoAnterior() {
    document.getElementById("bgJs").style.backgroundColor="red";
}


/*
//Mas eventos en HTML

Evento              Descripcion
onchange            	An HTML element has been changed
onclick	                 The user clicks an HTML element
onmouseover	        The user moves the mouse over an HTML element
onmouseout          	The user moves the mouse away from an HTML element
onkeydown           	The user pushes a keyboard key
onload          	The browser has finished loading the page


Controladores de eventos de JavaScript
Los controladores de eventos se pueden usar para manejar y verificar la entrada del usuario, las acciones del usuario y las acciones del navegador:

Cosas que se deben hacer cada vez que se carga una página
Cosas que se deben hacer cuando la página está cerrada
Acción que se debe realizar cuando un usuario hace clic en un botón
Contenido que debe verificarse cuando un usuario ingresa datos
Y más ...
Se pueden usar muchos métodos diferentes para permitir que JavaScript funcione con eventos:

Los atributos de eventos HTML pueden ejecutar código JavaScript directamente
Los atributos de eventos HTML pueden llamar a funciones de JavaScript
Puede asignar sus propias funciones de controlador de eventos a elementos HTML
Puede evitar que los eventos se envíen o se manejen
Y más ...


*/