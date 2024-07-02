// Write a function that takes a 2D array (array of arrays) of numbers and returns the sum of all the numbers.

function getSumOf2DArray(arrOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
        for (let j = 0; j < arrOfNumbers[i].length; j++) {
            sum += (arrOfNumbers[i][j]);
        }
    }
    return (sum)
}

console.log(getSumOf2DArray([  [466,78] , [1,2,3,4,5,6] , [8,9,77,4] ]))
