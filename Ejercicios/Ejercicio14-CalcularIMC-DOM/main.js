//Formula para calcular imc IMC = Peso (kg) / altura (m)2
window.onload = iniciar;

function iniciar() {
    //apenas cargue la pagina inicie esto
    document.getElementById('btnCalcular').onclick = mostrarDatos;
    document.getElementById('btnBorrar').onclick = borrarDatos;
}

//obtenemos datos y realizamos formula para pintar dichos datos
function mostrarDatos() {
    let peso = document.getElementById('txtPeso');
    peso = peso.value;
    let altura = document.getElementById('txtAltura');
    altura = altura.value;
    //Formula aplicada para calcular IMC
    const IMC = peso / Math.pow(altura, 2);
    resultado = `Tú IMC es de ${IMC.toFixed(1)}`

    //pintar datos en en pantalla
    document.getElementById('cajaResultadoIMC').innerHTML = resultado;

}

//Recargamos pagina y borramos los datos de paso
const borrarDatos = () => location.reload()



