// Write a function that takes an array of numbers and returns the second largest number in the array.
function getSecondLargestNumber(numbers) {
    let secondLargestNumber = 0;
    let largestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = numbers[i];
        }
    }

   return (secondLargestNumber);
}
const nums = [3,50,5,6,7,8,9,20, 3,4,65,2,4];
console.log(getSecondLargestNumber(nums));

