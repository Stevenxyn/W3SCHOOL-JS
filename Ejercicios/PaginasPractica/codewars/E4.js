/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

n = estudiantes
m = cantidad paginas que hara cada uno
*/

function paperwork (n,m){
    if(n < 0 || m < 0){
        return 0;
    }else{
        return n * m;
    }}
    console.log(paperwork(55,5))


    //solution with arrow function
    var estudiante = 2;
    var paginas = 5;
   const paperworkTwo = (estudiante < 0 || paginas < 0)  ? 0 :  estudiante * paginas;
    console.log(paperworkTwo)