//  Write a prgram to take two inputs x & y  and find the value of x raised to the power of y.
const prompt  = require('prompt-sync')();


let x  = Number(prompt("Enter a number(x)"))
let y = Number(prompt("Enter a number(y)"))
let power = powerFun(x,y);
function powerFun(x,y){
    console.log("the answer value of x raised to the power y is =  "+ Math.pow(x,y));
}
// Time Complexity: O(1)
// Space Complexity: O(1)