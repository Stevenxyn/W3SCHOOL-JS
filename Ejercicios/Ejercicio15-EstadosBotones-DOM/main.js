//apenas cargues todo inicia esto
window.onload=inicio;

function inicio() {
    //aca creo todos los eventos de la pagina web
    
    //Al dar click en btn1 vaya a la funcion que digo ahi
    document.getElementById('boton1').onclick = accionBtn1;

    //segundo evento del btn2 vaya a la funcion que le digo
    document.getElementById('boton2').onclick = accionBtn2;

    //tercer evento del btn3 agrega mas botones
    document.getElementById('boton3').onclick = accionBtn3;

    //cuarto evento btn elimina todo lo que exista en pantalla
    document.getElementById('boton4').onclick = BORRAR;


}

function accionBtn1(){
    //.innerHTML es perfecto para poner textos
    document.getElementById('cajaResultado').innerHTML = "Hola mundo!!"
}

function accionBtn2 (){
    //De esta manera al oprimit no me trae un texto sino una imagen
    document.getElementById('cajaResultado').innerHTML = " <img src='./JavaScript-logo.png'  height='150px'>"
}

function accionBtn3() {
    //concateno un boton a lo que ya existe en el DOM podemos usar +=
    //document.getElementById('cajaResultado').innerHTML  += "<button class='btn'>Un boton mas</button>"

    //correcto usar .insertAdjacentHTML("beforebegin", "LO QUE QUIERO QUE INSERTE")
    document.getElementById('cajaResultado').insertAdjacentHTML("beforeend","<button class='btn'>Un boton mas</button>")
}

function BORRAR (){
    document.getElementById('cajaResultado').innerHTML = "";
}