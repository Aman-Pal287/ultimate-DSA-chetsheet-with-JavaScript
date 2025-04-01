// problem 1 : Array left rotation by K element

const prompt = require('prompt-sync')();


// method 1: brut  force method (gahtiya tarika)
// let arr = [1, 2, 3, 4, 5]
// let k = prompt("Enter a number : ")

// for (let j = 1; j <= k; j++) {
//     let copy = arr[0]
//     for (let i = 0; i <= arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy;
// }
// console.log(arr);

// Time Complexity: O(k*n)
// Space Complexity: O(1)



// method 2: method 1 ka hi soution hai but k % arr.length karenge taaki unncessary loop naa chale
// let arr = [1, 2, 3, 4, 5]
// let k = prompt("enter a number: ")
// k = k % arr.length;
// for (let j = 1;j<=k; j++) {
//     let copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);

// Time Complexity: O(k*n)
// Space Complexity: O(1)


// method 3 : efficient tarika
// let arr = [1,2,3,4,5]
// let temp = new Array(arr.length);
// let k = prompt('enter a number : ')
// k = k % arr.length;
// for (let i=0 ; i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp);

// Time Complexity: O(n)
// Space Complexity: O(n)


// method 4(block-swap reverse algorithm): method 3 se bhi optimize solution aur effiecnt tarika (two pointer algorithm reverse ka tarika se banayenge ye solution)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = prompt("enter a number : ");
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length - 1);


function reverse(arr , i ,j) {
   while(i<j){
    let temp = arr[i];
    arr[i] =arr[j];
    arr[j] = temp;
    j--;
    i++;
   }
}
console.log(arr);

// Time Complexity: O(n)
// Space Complexity: O(1)