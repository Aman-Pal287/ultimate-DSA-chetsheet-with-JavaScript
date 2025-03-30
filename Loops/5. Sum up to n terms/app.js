// Sum up to n terms.

// let prompt = require("prompt-sync")(); //Importing module

// let n = prompt("Enter a number: ")
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum += i;
// }
// console.log("sum upto n terms is = " + sum);

// Time Complexity	O(n)
// Space Complexity	O(1)

// Optimized Approach (O(1) Time Complexity)
let prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
let sum = (n * (n + 1)) / 2; // O(1) time complexity

console.log("Sum up to n terms is = " + sum);


// Time Complexity	O(1)
// Space Complexity	O(1)