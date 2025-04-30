const prompt = require('prompt-sync')();

//^problem 2: print 1-n recursively
function temp(n){
    if(n == 0) return 
    temp(n-1);
    process.stdout.write(n + " ")
}
let n = Number(prompt("enter a number:  "))
temp(n)