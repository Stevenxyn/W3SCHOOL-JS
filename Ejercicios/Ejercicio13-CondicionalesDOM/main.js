window.onload = btnClickCrear();
function btnClickCrear() {
    let btnCreaUsuario = document.getElementById('btnCreaUsuario');
    btnCreaUsuario.addEventListener('click', crearUsuario)
}

window.onload = btnClickValidar();
function btnClickValidar() {
    let btnValidarUsuario = document.getElementById('btnValidarUsuario');
    btnValidarUsuario.addEventListener('click', confirmarUsuario)
}

window.onload = btnModificar();
function btnModificar(){
    let  btnModificar = document.getElementById('btnModificar')
    btnModificar.addEventListener('click', registroModificado)
}

var crearUsuario = document.getElementById('crearUsuario');
var crearClave = document.getElementById('crearClave');
function crearUsuario() {
    alert(`el usuario ${crearUsuario.value} se creo correctamente!`)
}

//confirmar usuario
let validarUsuario = document.getElementById('validarUsuario');
let validarClave = document.getElementById('validarClave');
function confirmarUsuario() {
    if((crearUsuario.value !== validarUsuario.value)&&(crearClave.value !== validarClave.value)){
        alert("Usuario y clave incorrectos, por favor valide");
    }else if(crearClave.value !== validarClave.value){
        alert("La claves son distintas por favor revisa")
    }else if(crearUsuario.value !== validarUsuario.value){
        alert("Los usuarios son distintos, por favor revisa");
    }else{
        alert("Usuarios son identicos")
    }
} 

//Modificar registro
function registroModificado(){
     crearUsuario = usuarioModificado;
     crearClave = claveModificado;  
     document.getElementById('')
    alert(`Usuario nuevo: ${usuarioModificado.value}, Clave Nueva: ${claveModificado.value}`) 
}

