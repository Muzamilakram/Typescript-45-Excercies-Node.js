// Define the function to show magicias names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Hamza", "Ali", "Harry"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
console.log(great_magicians);
