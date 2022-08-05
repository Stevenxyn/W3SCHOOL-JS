/*Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/
function findNeedle(haystack) {
    // your code here
  }

//Solution
function searchElement (){
const arrayTrash = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
 for(let i of arrayTrash){
  if(arrayTrash == "needle"){
    console.log("Se encontreo" + arrayTrash + " en posicion" + i.length);
  }
 }
}
searchElement()