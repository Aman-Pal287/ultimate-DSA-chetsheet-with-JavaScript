// Accept name and age from the user. Check if the user is a valid voter or not.

let prompt = require("prompt-sync")(); // Import prompt-sync for taking user input

// Take user input for name and age
let name = prompt("Enter your name: ");
let age = parseInt(prompt("Enter your age: ")); // Convert input to an integer

// Check if the user is eligible to vote
if (age >= 18) {
    console.log(`${name}, you are a valid voter ✅`);
} else {
    console.log(`${name}, you are NOT a valid voter ❌`);
}

//Time Complexity: O(1) 
//Space Complexity: O(1)