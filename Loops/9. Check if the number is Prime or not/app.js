// Check if the number is Prime or not.

const prompt = require('prompt-sync')();

//brut force method
// let n = Number(prompt("Enter a number"));
// let isPrime = false;
// for(let i=1 ; i<=n;i++){
//     if(n%i == 0){
//         isPrime = true;
//         break;
//     }
// }
// console.log(isPrime ? "prime number" : "Not a prime number");
// Time Complexity: O(N)
// Space Complexity: O(1)




//method 2 
// let n = Number(prompt("Enter a number"));
// let isPrime = false;
// for(let i=2 ; i<=n/2;i++){
//     if(n%i == 0){
//         isPrime = true;
//         break;
//     }
// }
// console.log(isPrime ? "prime number" : "Not a prime number");
// Time Complexity: O(N)
// Space Complexity: O(1)

//method 3:
let n = Number(prompt("Enter a number"))
let isPrime = isPrimeFun(n);
if(isPrime) console.log("Prime Number");
else console.log("not a prime number");

function isPrimeFun(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2 == 0) return false;
    for(let i = 3; i<Math.floor(Math.sqrt(n));i+=2){
        if(n%i == 0) return false;
    }
    return true;
}

// Time Complexity: O(sqrt(N))
// Space Complexity: O(1)