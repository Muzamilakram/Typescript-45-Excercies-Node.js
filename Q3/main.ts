let personeName: string= "muzamil"

console.log("lowercase:", personeName.toLowerCase());

console.log("uppercase:", personeName.toUpperCase());

console.log("titlecase:", personeName.replace(/\b\w/g, (char) => char.toUpperCase()));