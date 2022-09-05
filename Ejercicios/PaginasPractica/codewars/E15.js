/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.



a mi manera
function decirNumero(n) {
    if(n == 0){console.log("Zero");}
    else if (n == 1){console.log("One");}
    else if (n == 2){console.log("Two");}
    else if (n == 3){console.log("Three");}
    else if (n == 4){console.log("Four");}
    else if (n == 5){console.log("Five");}
    else if (n == 6){console.log("Six");}
    else if (n == 7){console.log("Seven");}
    else if (n == 8){console.log("Eight");}
    else if (n == 9){console.log("Nine");}
    else if (n == 10){console.log("Ten");}
    else{console.log("Ingrese un numero del 0 al 10 unicamente.");}
}
decirNumero(2)


otro ejemplo 
function switchItUp(n){
    console.log( ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]);
  }
  switchItUp(6)


*/
var entrada = 3;

switch (entrada) {
    case 0:
        console.log("Cero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 10:
        console.log("Ten");
        break;
    default:
        console.log("Ingrese un dato");
}


