const prompt = require('prompt-sync')();

// Accept a string and print its each character on a new line
let str = prompt("Enter a string : ")
let ans = ''
for(let i=0;i<str.length;i++){
    console.log(str.charAt(i));    
}