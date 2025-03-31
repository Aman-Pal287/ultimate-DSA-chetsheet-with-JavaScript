// reverse of number
const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number : "))
let rem = 0;
let reverse = 0;
while (n > 0) {
    rem = n % 10;
    reverse = (reverse*10) + rem
    n = Math.floor(n / 10);
    
}
console.log("the reverse is : " + reverse);

// ✅ Time Complexity: O(log N)
// Space Complexity: O(1)