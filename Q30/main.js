// Creating a Array
var userNames = ["Mahad", "Ali", "Zeshan", "Admin", "Usman"];
// Using Foreach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
