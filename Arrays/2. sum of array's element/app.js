// sum of array's element

const prompt = require('prompt-sync')();



let size = Number(prompt("enter array's size"));
let arr = new Array(size)
let sum = 0;
for(let i= 0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter arrays's values"))
    sum += arr[i]
}
console.log("sum is = "+sum);



// Time Complexity: O(n)
// Space Complexity: O(n)