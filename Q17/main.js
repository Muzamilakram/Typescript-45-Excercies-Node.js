// Creating a Guest List Arry
var guestList = ["Muzamil", "Asif", "Nabeel", "Hamza"];
// Making Variable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new Guest to middle index Arry
guestList.splice(middleIndex, 0, "Osama");
// Print Message of updated list
console.log("Updated List of our Guest");
// Sending a invitation message to our guest one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me")); });
// Inform that only guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner wish me");
// Using while-loop to remove guest from the arry until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guest on the list
console.log("Invitations to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
