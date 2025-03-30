// Factorial of a number

let prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
let fact = 1;

for(let i = 1;i<=n;i++){
    fact = fact*i;
}
console.log("the factorial is = " + fact);

// Time Complexity	O(n)
// Space Complexity	O(1)