// Makeing a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Calling a Function with by default values
make_shirt()

// Calling a Function now with Medaium size and defualt message
make_shirt("Medaium")


// Calling a Function now with small size and defualt message
make_shirt("Small", "I Love JavaScript")