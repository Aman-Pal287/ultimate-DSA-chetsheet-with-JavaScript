// 2. Accept two numbers and print the greatest between them

let prompt = require("prompt-sync")();

let num1 = prompt("Enter num1")
let num2 = prompt("Enter num2")

if(num1>num2) console.log("num1 is the greatest");
else console.log("num2 is the greatest");

//time complexity - O(1)
//space complexity - O(1)

