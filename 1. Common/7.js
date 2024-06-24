// Write a function that takes an array of numbers and returns the largest number in the array.
function getLargestNumber(nums) {
    let largestNumber = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largestNumber){
            largestNumber = nums[i];
        }
    }
    return largestNumber;
}

const numbers = [5,6,8,7,4,2,85,56];

console.log(getLargestNumber(numbers));
