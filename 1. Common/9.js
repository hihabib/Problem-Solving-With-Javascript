// Write a function that takes an array of numbers and returns a new array with each number squared.
function makeArraySquare(nums){
    const squaredArray = [];
    for(let i = 0; i < nums.length; i++){
        squaredArray.push(nums[i] ** 2);
    }
    return squaredArray;
}


const arr = [2,3,4, 5 , 8];
const newArr = makeArraySquare(arr)

console.log(newArr)
