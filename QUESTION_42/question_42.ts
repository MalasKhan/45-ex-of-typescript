/* Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to
  each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

var array =  ["David Copperfield", "Penn & Teller","Ricky Gervais"];

function showMagicians2(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function make_great(arr) {
    for (let i=0;i<arr.length;i++) {
        arr[i] = 'The Great ' + arr[i];
    }
}
make_great(array);
showMagicians2(array);
