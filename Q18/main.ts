// Making Arry of Countries and Print its orignal order
let countriesTovisit: string[] = ["China", "Demark", "Brazil", "Argentina"];
console.log("Origanl Order:", countriesTovisit);

// Print the Arry in Alpabetical order without modifiying the actual arry list
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// Show that the arry is still in its orignal order 
console.log("Still in Orignal Order:", countriesTovisit);

// Print Arry in reverse order without modifying the actual arry list
console.log("Reverse Order:", [...countriesTovisit].reverse());

// Show that the arry is still in its orignal order 
console.log("Still in Orignal Order:", countriesTovisit);

// We have changed the orignal Arry order now
console.log("Orignal Arry Reversed:", countriesTovisit.reverse());

// Print the arry to show that its back to its orignal order
console.log("Back to Orignal Order:", countriesTovisit.reverse());

// Print the arry to show that its order has been changed in Alphbetical ortder now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// We have changed again the orignal arry order now in reverse order again
console.log("OrignalArray Reversed Again:", countriesTovisit.reverse());