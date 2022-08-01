//Formula para calcular imc IMC = Peso (kg) / altura (m)2

//cuando cargue la pagina llame la funcion
window.onload = iniciar;

function iniciar() {
    //recibo el valor del input 
    var btnCalcularImc = document.getElementById("btnCalcularImc")
    //escuchar el evento click y nos traiga esa funcion
    btnCalcularImc.addEventListener('click', clickBtnCalcularImc)
}

//funcion que me dara un resultado cuando se oprima el boton
function clickBtnCalcularImc() {
    let txtPeso = document.getElementById('txtPeso');
        var peso = parseInt(txtPeso.value);
    let txtAltura = document.getElementById('txtAltura');
        var altura = txtAltura.value;
    var imc =  peso / Math.pow(altura,2);
    alert(`Tu Imc es de: ${Math.round(imc)}`)
}
//para acceder a una variable hay que llamar la funcion antes
/*
clickBtnCalcularImc()
console.log(nombre);
*/




