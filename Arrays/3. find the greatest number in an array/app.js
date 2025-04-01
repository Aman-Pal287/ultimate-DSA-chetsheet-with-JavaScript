// find greatest element of an array

const prompt = require('prompt-sync')();


let arr = [123,15,41,58,1,56,54,56,1,312,54,744,1,65,4,84,874,654,654,654,654,486]
let max = arr[0]
for(let i= 1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max);

// Time Complexity: O(n)
// Space Complexity: O(1)
