let guestList = ["Ali", "HAmza", "Muzamil", "Ahmed"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Ahh Sakta");

guestList.splice(0, 1,);

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));