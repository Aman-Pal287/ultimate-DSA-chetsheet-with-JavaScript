let prompt = require('prompt-sync')();

//! leetcode(50) Pow(x,n)
 var myPow = function(x,n){
    if(n==0) return 1.0
    return n<0 ? 1/temp(x,n) :temp(x,n)
 }

 var temp = function(x,n){
    if(n==0) return 1
    let ans = temp(x, parseInt(n/2))
    if(n%2 == 0) return ans*ans
    return ans*ans*x
 }
let x= prompt("enter x = ")
let n= prompt("enter n = ")

console.log(myPow(x,n))