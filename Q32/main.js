// Array of Current Users
var current_users = ["Usman", "Ali", "Areeb", "zain", "Osman"];
// Array of New Users
var new_users = ["Hamza", "ayesha", "Ali", "Mahad", "Areeb"];
// Loop through new_user to check for usernames avaibilty
new_users.forEach(function (new_one_user) {
    // Making a Candition for username already exsit and save is our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using IF-Else Statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
