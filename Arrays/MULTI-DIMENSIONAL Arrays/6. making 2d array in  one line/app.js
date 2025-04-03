//making 2d array in  one line
// let arr = Array.from({length:3},()=>Array(4).fill(fill))

const prompt = require('prompt-sync')();


// let arr = Array.from({length:3},()=>Array(4).fill("*")) //yeh bhi hai solution
// console.log(arr);



let arr = Array.from({ length: prompt("Enter main array size") }, () => {
    Array.from({ length: prompt("Enter inner array size") },
        () => prompt("Enter a value: "))
}
);
console.log(arr);
