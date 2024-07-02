// Write a function that takes two arrays of numbers and returns a new array containing only the numbers that are present in both arrays.

function getCommonNumbers(arr1, arr2){
    const commonNumbers = [];

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                commonNumbers.push(arr1[i]);
                break;
            }
        }
    }
    return(commonNumbers)
}

const arr1 = [1, 100, 2, 3, 4, 5];
const arr2 = [1, 8, 9, 4, 5, 8, 100, 600];

const result = getCommonNumbers(arr1, arr2);

console.log(result)
