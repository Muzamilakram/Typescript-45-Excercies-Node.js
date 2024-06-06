// Array of Current Users
let current_users = ["Usman", "Ali", "Areeb", "zain", "Osman"]

// Array of New Users
let new_users = ["Hamza", "ayesha", "Ali", "Mahad", "Areeb"]

// Loop through new_user to check for usernames avaibilty
new_users.forEach(new_one_user => {

    // Making a Candition for username already exsit and save is our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different message using IF-Else Statements
        if(our_condition){
            console.log(`Sorry ${new_one_user} is already taken!`)
        }else{
            console.log(`This Username ${new_one_user} is available`)
        }
})
