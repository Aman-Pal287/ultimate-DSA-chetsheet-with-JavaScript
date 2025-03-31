// Automorphic number

const prompt = require('prompt-sync')();

let n = Number(prompt("enter a number"));
let copy = n;
let sq = n*n;
let count = 0;
while(n>0){
    count++
    n = Math.floor(n/10)
}

if(sq%Math.pow(10,count)== copy) console.log("Automorphic Number");
else console.log("Not a automorphic number");

// ✅ Time Complexity: O(log N)
// Space Complexity: O(1)