// 3. Accept an integer and check whether it is an even number or odd

let prompt = require("prompt-sync")();

let num  = prompt("enter a number")
if(num%2 == 0) console.log("the number is even");
else console.log("the number is odd");


// Time Complexity - O(1)
// Space Complexity - O(1)