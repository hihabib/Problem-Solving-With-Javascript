// Write a function that takes a string and counts the number of vowels (a, e, i, o, u) in the string.
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            count++;
        }
    }
    return count;
}


const numberOfVowels = countVowels("A quick brown fox jumps over the lazy dog");
console.log(numberOfVowels)
