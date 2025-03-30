// Reverse for loop. Print n to 1

let prompt = require("prompt-sync")(); // Importing module

let n = prompt("Enter a number: ")
for(let i = n ; i>0;i--){
    console.log(i);    
}

// Time Complexity	O(n)
// Space Complexity	O(1)