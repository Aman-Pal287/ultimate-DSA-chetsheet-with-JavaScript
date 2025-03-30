//Accept an integer and Print hello world n times
let prompt = require("prompt-sync")(); // Importing module

let n = prompt("Enter a number: ")
for(let i=1 ; i<=n;i++){
    console.log("Hello world");    
}

// Time Complexity	O(n)
// Space Complexity	O(1)
