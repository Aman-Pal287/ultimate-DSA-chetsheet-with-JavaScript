// Accept a year and check if it a leap year or not (google to find out what's a leap year)

let prompt = require("prompt-sync")(); // Import prompt-sync for user input

let year = prompt("Enter a year: ")
let isLeap = false;

if(year%4 == 0){
    if(year % 100 == 0 ){
        if(year % 400 == 0) isLeap = true;
        else isLeap = false;
    }
    else isLeap = true;
}
else isLeap = false

console.log(isLeap? "Leap Year":"Not a Leap Year")
