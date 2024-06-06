// Define a function with a rest paremeter that accept items arugment srespesenting our 
function makeaSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 items with 3 different number og arugments
makeaSandwich("Chiken", "Chesse", "Mayo", "Egg");
makeaSandwich("Bread", "Butter");
makeaSandwich("Bread", "Butter", "Mayo", "Egg", "Chiken");
