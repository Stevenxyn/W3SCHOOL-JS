// Estudiar comportamiento del alcance o contexto funcional
//Las variuables dentro de funciones no se pueden llamar 

function funcion1(){
    var  a = 5;

    function funcion3() {
        var b = 78;

        function funcion5() {
            console.log(a,b);
        }
    }  
}


function funcion2(){
   var a = 4;

   function funcion4 (){

   }

}

//console.log(a); //ReferenceError: e is not defined

funcion1();
funcion2();