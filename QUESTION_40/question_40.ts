/* Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these
 two pieces of information. Use the function to make three dictionaries representing different albums.
  Print each return value to show that Objects are storing the album information correctly. 
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
    Make at least one new function call that includes the number of tracks on an album.
*/

function  make_album(artist, title) {
    let album = {};
    album['Artist']=artist;
    album['Title']=title;
    
    if (arguments.length >2){
        album['Tracks']= arguments[2];
    }
    return album;
}

let album1 = make_album("The Beatles", "Please Please Me");
console.log(album1); //{ Artist: 'The Beatles', Title: 'Please Please Me' }

let album2 = make_album("David Bowie", "Hunky Dory");
console.log(album2); //{Artist: 'David Bowie', Title: 'Hunky Dory', Tracks: 6 }