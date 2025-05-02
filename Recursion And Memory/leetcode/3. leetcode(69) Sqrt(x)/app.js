let prompt = require('prompt-sync')();

//! problem 2: leetcode(69) Sqrt(x) = bina koi inbuilt method ka use kiye bina sqrt nikal kisi bhi non negative integer ka
//NOTE take nearest interger of unperfect sqrt integer ex 15 ka sqrt 3 lelo

//  / optimized tarika
let n = Number(prompt("enter a number : "))
function sqrt(n){
    let i=1
    for(;i*i<=n;i++){
        if(i*i == n) return i
    }
    return (i-1);
}
console.log(sqrt(n));
