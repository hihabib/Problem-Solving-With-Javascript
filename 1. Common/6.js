// Write a function that takes an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(nums){
    const evenNums = [];
    for(let i =0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            evenNums.push(nums[i]);
        }
    }
   return evenNums;
}
const nums = [3,4,6,7,8,9,120,29];

console.log(getEvenNumbers(nums))

