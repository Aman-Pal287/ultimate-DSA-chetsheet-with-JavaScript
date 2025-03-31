// abc pattern
// A
// A B
// A B C
// A B C D
// A B C D E


const prompt = require('prompt-sync')();

let n = prompt("Enter a Number : ")

for(let i=1;i<=n;i++){
    let alpha = 65;
    for(let j=1; j<=i ; j++){
        process.stdout.write(String.fromCharCode(alpha)+ " ");
        alpha++;
    }
    console.log();    
}


// Time Complexity: O(n^2)
// Space Complexity: O(1) 