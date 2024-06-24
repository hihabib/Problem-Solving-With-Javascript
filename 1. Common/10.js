// Write a function that prints all the prime numbers between 1 and 50.

function isPrimeNumber(number) {
    if (number === 1) {
        return false;
    }
    let isPrime = true;
    for (let i = 2; i < number; ++i) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return (isPrime)
}

function getPrimeNumbers(start, end) {
    const allPrimeNumbers = [];
    for (let i = start; i <= end; ++i) {
        if (isPrimeNumber(i)) {
            allPrimeNumbers.push(i);
        }
    }
    return allPrimeNumbers;

}

console.log(getPrimeNumbers(1, 50))
