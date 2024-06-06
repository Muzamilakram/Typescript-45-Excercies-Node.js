// Creating a Array
let userNames = ["Mahad", "Ali", "Zeshan", "Admin", "Usman"];

// Using Foreach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})