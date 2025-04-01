// find the second minimum number from an array


const prompt = require('prompt-sync')();

let arr = [28,28,6,74,2,4,79]
let min = Math.min(arr[0] , arr[1])
let sMin = Math.max(arr[0] , arr[1])
for(let i = 2;i<arr.length;i++){
    if(arr[i]< min){
        sMin = min;
        min = arr[i]
    }else if(arr[i]<sMin &&arr[i] != min){
        sMin = arr[i]
    }
}
console.log("second minimum number is = " + sMin);

// Time Complexity: O(n)
// Space Complexity: O(1)