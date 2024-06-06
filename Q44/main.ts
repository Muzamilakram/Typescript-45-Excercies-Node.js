// Define a function with a rest paremeter that accept items arugment srespesenting our Sandwich
function makeaSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 items with 3 different number og arugments
makeaSandwich("Chiken", "Chesse", "Mayo", "Egg");
makeaSandwich("Bread", "Butter");
makeaSandwich("Bread", "Butter","Mayo", "Egg", "Chiken", )
