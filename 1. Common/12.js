// Write a function that takes an array of numbers and a target number. The function should return true if the target number is in the array and false otherwise.

function hasTargetedNumber(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
           return true;
        }
    }
    return false;
}

const isAvailable = hasTargetedNumber([5,6,8,9,7,4], 100);
console.log(isAvailable)
