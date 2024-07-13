// Write a function that can swap two numbers in an array of numbers
function swapNumbers(arr){
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}

const arr = [89, 88];
const newArr = swapNumbers(arr);


console.log(arr)
