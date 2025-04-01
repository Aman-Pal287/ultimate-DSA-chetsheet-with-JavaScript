// find the minimum value of an array

const prompt = require('prompt-sync')();

let arr = [123,15,41,58,2,56,54,56,2,312,54,744,2,65,4,84,874,654,654,654,654,486]
let min = arr[0]
for(let i= 1;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(min);

// Time Complexity: O(n)
// Space Complexity: O(1)