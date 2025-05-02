//! Sum of digits recursively
function SOD(n){
    if(n<10) return n;
    return (n%10) + SOD(Math.floor(n/10));
}
let n = 123;
console.log(SOD(n))