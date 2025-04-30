const prompt = require('prompt-sync')();
// ^print in number up to n terms in reverse order
let n = Number(prompt("Enter a Number: "));
temp(n)
function temp(a){
    if(a == 0) return;
    process.stdout.write(a + " ")
    temp(--a)
}
