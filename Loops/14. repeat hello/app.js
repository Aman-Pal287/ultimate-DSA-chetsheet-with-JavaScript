// repeat hello

const prompt = require('prompt-sync')();

let userInput;
do{
    console.log("namaste duniya!");
    userInput = prompt("aap continue karna chahte ho kya? yes/no").toLowerCase();
}while(userInput === 'yes')

// Time Complexity: O(T) (where T is user-dependent)    
// Space Complexity: O(1) (constant space, no extra data structures used)