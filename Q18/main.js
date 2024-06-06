var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making Arry of Countries and Print its orignal order
var countriesTovisit = ["China", "Demark", "Brazil", "Argentina"];
console.log("Origanl Order:", countriesTovisit);
// Print the Arry in Alpabetical order without modifiying the actual arry list
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the arry is still in its orignal order 
console.log("Still in Orignal Order:", countriesTovisit);
// Print Arry in reverse order without modifying the actual arry list
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
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
