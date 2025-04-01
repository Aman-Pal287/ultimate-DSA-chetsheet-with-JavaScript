// Taking array size and element from the user
const prompt = require('prompt-sync')();


let size = Number(prompt("enter array's size"));
let arr = new Array(size)
for(let i= 0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter arrays's values"))
}
console.log(arr);

// Time Complexity: O(n)
// Space Complexity: O(n)