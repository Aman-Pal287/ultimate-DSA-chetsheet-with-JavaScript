//Jacked array
const prompt = require('prompt-sync')();

let arr = new Array(4)
for(i=0;i<arr.length;i++){
    let size = Number(prompt("inner array's size"))
    arr[i] = new Array(size)
}
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j]= Number(prompt("Enter array element"))
    }
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);    
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)


