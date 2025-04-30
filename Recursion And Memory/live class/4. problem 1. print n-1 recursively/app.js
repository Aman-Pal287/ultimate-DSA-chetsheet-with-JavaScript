const prompt = require('prompt-sync')();
//^ problem 1: print n-1 recursively 
let n = Number(prompt("enter a number: "));
temp(n)
function temp(a){
    if(a==0) return;
    process.stdout.write(a  + " ")
    temp(a-1)
}
