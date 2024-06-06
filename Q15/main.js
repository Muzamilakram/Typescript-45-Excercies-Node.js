var guestList = ["Ali", "HAmza", "Muzamil", "Ahmed"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Ahh Sakta");
guestList.splice(0, 1);
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
