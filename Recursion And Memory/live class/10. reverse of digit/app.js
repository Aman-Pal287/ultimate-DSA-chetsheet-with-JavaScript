//! reverse of digit ex: 123 -> 321

function reverseDigit(n,rev){
    if(n==0) return rev;
    return reverseDigit(Math.floor(n/10), rev*10 +(n%10))
}
let n=123
console.log(reverseDigit(n,0));
