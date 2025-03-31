// right angle triangle number pattern
//*
//* *
//* * *
//* * * *
//* * * * *

const prompt = require('prompt-sync')();

let n = prompt("Enter a number: ")
for(let i=1;i<=n;i++){
    for(let j= 1 ; j<=i;j++){
        process.stdout.write("* ")
    }
    console.log();    
}




// Time Complexity: O(n^2) :

/*
The outer loop runs from 1 to n, so it executes n times.

The inner loop runs from 1 to i for each value of i, meaning:

1+2+3+...+𝑛 = 𝑛(𝑛+1)​/2
This sum is O(n²) in Big-O notation.
*/


// Space Complexity: O(1) 