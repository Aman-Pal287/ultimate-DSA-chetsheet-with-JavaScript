// guess the number

const prompt = require('prompt-sync')();
let com = Math.floor(Math.random() * 100) + 1;
let userInput;
do {
    userInput = Number(prompt("Guess the number in b/w 1 to 100 : "))
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        console.log("please enter a valid number");
        continue
    }
    if (userInput > com) console.log("too high, try again");
    else if (userInput < com) console.log("too low, try again");
    else console.log("congrats 🎉 and number was " + com);
} while(userInput !==   com); 

// Time Complexity:
// ✅ Best Case (User guesses correctly on the first try): O(1)
// ✅ Average Case (User follows a binary search approach): O(log N)
// ✅ Worst Case (User guesses all numbers sequentially): O(N)



// Space Complexity: O(1) (constant space, no extra data structures used)