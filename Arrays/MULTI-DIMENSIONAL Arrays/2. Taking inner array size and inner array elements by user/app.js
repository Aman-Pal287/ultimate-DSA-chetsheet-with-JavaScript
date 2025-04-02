// Taking inner array size and inner array elements by user2. Taking inner array size and inner array elements by user( jagged (irregular) multidimensional array )

const prompt = require('prompt-sync')();

let arrSize = Number(prompt("enter main array size : "));
let arr = new Array(arrSize);
for(let i=0;i<arr.length;i++){
    let innerArraySize = Number(prompt(`Enter ${i}th index array size : `))
    arr[i] = new Array(innerArraySize);
    for(let j=0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt(`Enter ${i}th index array's element one by one : `));
    }
}
console.log(arr);
