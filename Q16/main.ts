// Creating a Guest List Arry
let guestList = ["Muzamil", "Asif", "Nabeel", "Hamza"];

// Making Variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi ahh sakta hm");

// Add or remove values from Guest List Arry
guestList.splice(0, 1, "Amir");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger table for dinner");

// Adding a new value at starting index of Arry
guestList.unshift("Ali");

// Adding a new value at ending index of Arry
guestList.push("Ahmed");

// Get a middle index of Arry
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new Guest to middle index Arry
guestList.splice(middleIndex, 0, "Osama");

// Print Message of updated list
console.log("Updated List of our Guest");

// Sending a invitation message to our guest one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));
