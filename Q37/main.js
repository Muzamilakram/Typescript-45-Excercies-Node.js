// Makeing a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// Calling a Function with by default values
make_shirt();
// Calling a Function now with Medaium size and defualt message
make_shirt("Medaium");
// Calling a Function now with small size and defualt message
make_shirt("Small", "I Love JavaScript");
