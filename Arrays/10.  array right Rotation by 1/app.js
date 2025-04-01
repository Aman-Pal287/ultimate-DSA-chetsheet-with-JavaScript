// array right Rotation by 1

let arr = [1,2,3,4,5,6,7,8,9,10]
let temp = arr[arr.length-1];
for(let i = arr.length -1 ; i>0;i--){
    arr[i] = arr[i-1]
}
arr[0] = temp;
console.log(arr);


// Time Complexity: O(n)
// Space Complexity: O(1)