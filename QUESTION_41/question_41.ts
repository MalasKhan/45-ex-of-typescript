/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/

var array =  ["David Copperfield", "Penn & Teller","Ricky Gervais"];

function showMagicians(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

showMagicians(array);
