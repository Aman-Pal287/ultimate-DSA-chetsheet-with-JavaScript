// problem 1: strong number


const prompt = require('prompt-sync')();
let n = prompt("Enter a Number")
let copy = n;
let sum = 0;
while(n>0){ 
    let rem = n%10;
    let fact = 1
    for(let i=1 ;i<=rem;i++){
        fact = fact*i
    }
    sum = sum + fact;
    n = Math.floor(n/10);
}   
if(sum == copy) console.log("strong number");
else console.log("not a strong number");


// Time Complexity: O(n^2)
// Space Complexity: O(1) 