// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three function and creating 3 variables with differnt values

let album1 = make_album("Muzamil", "Album title 1");
let album2 = make_album("Usman", "Album title");
let album3 = make_album("Ali", "Artist", 109);

// Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);