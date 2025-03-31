// inverted right angle triangle star pattern
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

const prompt = require('prompt-sync')();

let n = prompt("Enter a number: ")
for(let i = 1 ;i<=n;i++){
    for(let j=0 ; j<=n-i;j++){
        process.stdout.write("* ")
    }
    console.log();
    
}

// Time Complexity: O(n^2)
// Space Complexity: O(1) 