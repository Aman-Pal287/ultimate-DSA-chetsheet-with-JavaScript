// Print all the factors of a number
const prompt = require('prompt-sync')();
//brut force  method
// let n = Number(prompt("Enter a number"))
// for(let i=0;i<=n;i++){
//     let j = 1
//     if(n%i == 0){
//         console.log(`the ${j}th factors is ${i}`);
//         j++;        
//     }
// }


// optimze method
let n = Number(prompt("Enter a number"))
console.log(`the factors is 1`);

for(let i=2;i<=n/2;i++){
    if(n%i == 0){
        console.log(`the factors is ${i}`);
    }
}
console.log(`the factors is ${n}`);

// Time Complexity: O(N)
// Space Complexity: O(1)