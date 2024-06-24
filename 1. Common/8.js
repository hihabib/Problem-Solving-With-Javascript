const numbers = [3,50,5,6,7,8,9,20, 3,4,65,2,4];

let secondLargestNumber = 0;
let largestNumber = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largestNumber){
        secondLargestNumber = largestNumber;
        largestNumber = numbers[i];
    }
}

console.log(secondLargestNumber)
