const prompt = require('prompt-sync')();


//^ print n time hello world using recursion

let n = prompt("Enter a number");
function temp(a){
    if(a == 0) return
    console.log("hello world");
    temp(a-1);
}
temp(n)