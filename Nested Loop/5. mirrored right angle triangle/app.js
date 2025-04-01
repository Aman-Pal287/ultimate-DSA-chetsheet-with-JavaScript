// mirrored right angle triangle

//        *
//      * *
//    * * *
//  * * * *
//* * * * *

const prompt = require('prompt-sync')();

let n = prompt("Enter a number: ")
for(let i=1 ;i<=n;i++){
    for(let k=1;k<=n-i;k++){
        process.stdout.write("  ")
    }
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log();
    
}


// Time Complexity: O(n^2)
// Space Complexity: O(1) 