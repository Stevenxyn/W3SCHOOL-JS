/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.


  let modificacion1 = sentence.replace("5","s");
   modificacion1 = sentence.replace("0","o");
   modificacion1 = sentence.replace("1", "i"); 



*/


function corrector(sentence) {
    if (sentence.includes(5) || sentence.includes(0) || sentence.includes(1)) {
        let corregido = sentence.replaceAll('5', 's').replaceAll('0', 'o').replaceAll('1', 'i')
        console.log(corregido.toLowerCase());
    }
}
corrector("P0l0n1a55")

/*
De mejor manera

function correct(string){
 return string.replace(/0/g,'O').replace(/5/g,'S').replace(/1/g,'I')
}
correct("DUBL1N")

*/


