// Print natural number up to n
let prompt = require("prompt-sync")(); // Importing module

let n = prompt("Enter a number: ")
for(let i = 1 ; i<=n;i++){
    console.log(i);    
}

// Time Complexity	O(n)
// Space Complexity	O(1)