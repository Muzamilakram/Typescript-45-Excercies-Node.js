let userNames = ["Mahad", "ALi", "Zeshan", "Admin", "Usman"];
userNames = []

if (userNames.length === 0){
    console.log("Your Array in Empty we need to find some users!")
}else{
    // Using ForEach Loop on Array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like to see a status reports?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}