//1. visiting and printing all elements of 3X4 2-D array
const prompt = require('prompt-sync')();

let arr = [[1,2,3,4],[4,5,6,10],[7,8,9,9]]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        process.stdout.write(`${arr[i][j]} `)
    }
    console.log();
    console.log("--------");
}


