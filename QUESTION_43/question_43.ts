/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 return the new array and store it in a separate array. Call show_magicians() 
 with each array to show that you have one array of the original names and one array
  with the Great added to each magician’s name.
*/

var array =  ["David Copperfield", "Penn & Teller","Ricky Gervais"];

function showMagicians3(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function make_great2(arr) {
    for (let i=0;i<arr.length;i++) {
        arr[i] = 'The Great ' + arr[i];
    }
}
make_great(array);
showMagicians2(array);