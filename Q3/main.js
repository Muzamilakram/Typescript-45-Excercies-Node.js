var personeName = "muzamil";
console.log("lowercase:", personeName.toLowerCase());
console.log("uppercase:", personeName.toUpperCase());
console.log("titlecase:", personeName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
