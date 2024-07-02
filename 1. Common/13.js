// Write a function that takes an array of numbers and returns the sum of all the positive numbers in the array.

function sumPositiveNumbers(arrOfNums) {
    let sum = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        if(arrOfNums[i] > 0){
            sum += arrOfNums[i];
        }
    }
    return sum;
}

const result = sumPositiveNumbers([-5,-6,-8,7]);

console.log(result)
