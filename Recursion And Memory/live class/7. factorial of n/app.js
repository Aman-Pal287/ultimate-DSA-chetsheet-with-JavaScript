const prompt = require('prompt-sync')();


//^ problem 3: factorial of n
function temp(n){
    if(n == 1) return n;
    return n * temp(n-1)
}
let n = Number(prompt("enter a number:  "))
console.log(temp(n))