// Print the sum of all even & odd numbers in a range seperately


let prompt = require("prompt-sync")();

let start = prompt("Enter start number: ");
let end = prompt("Enter the end number: ");

if(start> end){
    [start , end] = [end , start]
}
let oddSum = 0 , evenSum = 0;
for(let i= start ;i<=end ;i++){
    if(i % 2 == 0) evenSum += i;
    else oddSum += i;
}

console.log("the odd sum is : "+oddSum);
console.log("the even sum is : "+evenSum);

// Time Complexity	O(n)
// Space Complexity	O(1)

