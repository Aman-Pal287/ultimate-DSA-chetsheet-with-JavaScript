//  find the second max number from an array

const prompt = require('prompt-sync')();

let arr = [28,28,6,74,2,4,79]
let max = Math.max(arr[0] , arr[1]);
let sMax = Math.min(arr[0] , arr[1]);
for (let i =  2 ; i<arr.length;i++ ){
    if(arr[i]>max){
        sMax = max
        max = arr[i]
    }else if(arr[i]>sMax && arr[i] != max){
        sMax = arr[i]
    }
}
console.log("Second max is =  " + sMax);

// Time Complexity: O(n)
// Space Complexity: O(1)