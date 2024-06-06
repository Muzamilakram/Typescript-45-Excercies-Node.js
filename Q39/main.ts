// Creating a function with perameters which return a values in string

function city_country(city: string, country: string): string{
    return `${city} , ${country}`;
}

// Calling a function and print the returned values
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Mumbai", "Indai"));
console.log(city_country("Tokyo", "Japan"));