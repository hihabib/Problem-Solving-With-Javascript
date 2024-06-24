// Write a function to convert temp C to F
function convertCelsiusToFahrenheit(celsius) {
    return ( (9 * celsius) / 5 ) + 32;
}
const C1 = 37;
const F1 = convertCelsiusToFahrenheit(C1);
console.log(F1)


// Write function to convert F to C
function convertFahrenheitToCelsius(fahrenheit) {
    return ( (fahrenheit-32) * 5 ) / 9;
}
const F2 = 100;
const C2 = convertFahrenheitToCelsius(F2);
console.log(C2)
