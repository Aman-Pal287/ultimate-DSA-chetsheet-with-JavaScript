const prompt = require('prompt-sync')();

// check Pallindromic string using Two pointer algorithm(hint : Array reverse algo)
let str = prompt("Enter a string : ");
let isPallindromic = true;
let i=0 , j=str.length-1;
while(i<j){
    if(str[i] !== str[j]){
        isPallindromic = false;
        break;
    }
    i++
    j--
}
if(isPallindromic) console.log("string is Pallindromic");
else console.log("string is not a Pallindromic");

// time complexity : O(n)
// space complexity: O(1)