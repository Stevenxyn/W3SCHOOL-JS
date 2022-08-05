/*Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/
function findNeedle(haystack) {
  // your code here
}

//Solution no limpia
function searchElement(elementoBuscar) {
  const arrayTrash = ["hay", "junk", "hay", "hay", "moreJunk", "needlea", "randomJunk"];
  
  arrayTrash.forEach((elemento, i) => {
    if (elemento === (elementoBuscar).toLowerCase()) {
      console.log(`Se encontro ${elemento} en posicion ${i}`);
    }
  });
}
searchElement("NEEDLEA")



//solucion poco mas corta "en E9.js esta una forma diferente"

function findNeedle(haystack) {
  const arrayTrash = ["hay", "junk", "hay", "hay", "moreJunk", "needlea", "randomJunk"];
  console.log(`${haystack} Se encuentra en posicion nuevo modo: ${arrayTrash.indexOf(haystack)}`);
}
findNeedle("needle")



