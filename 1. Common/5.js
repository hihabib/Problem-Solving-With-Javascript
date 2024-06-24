// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sumArray(nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

const nums = [10, 20];


console.log(  sumArray(nums)  )
