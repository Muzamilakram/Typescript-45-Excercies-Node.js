// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and creating 3 variables with differnt values
var album1 = make_album("Muzamil", "Album title 1");
var album2 = make_album("Usman", "Album title");
var album3 = make_album("Ali", "Artist", 109);
console.log(album1);
console.log(album2);
console.log(album3);
