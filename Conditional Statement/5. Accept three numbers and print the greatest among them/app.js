// Accept three numbers and print the greatest among them


let prompt = require("prompt-sync")(); // Import prompt-sync for user input

// Take three numbers as input from the user
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));

// Find the greatest number using conditional statements
let greatest;

if (num1 >= num2 && num1 >= num3) {
    greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
} else {
    greatest = num3;
}

// Print the greatest number
console.log(`The greatest number is: ${greatest}`);


// Time Complexity: O(1) 
// Space Complexity: O(1) 