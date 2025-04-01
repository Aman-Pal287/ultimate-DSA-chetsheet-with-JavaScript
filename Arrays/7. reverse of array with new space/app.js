// 7. reverse of array with new space

let arr = [1,2,3,4,5,6,7,8,9,10]
let temp = new Array(arr.lenght)

for (let j=0, i = arr.length-1; i>=0; i--,j++){
    temp[j] = arr[i]
}
console.log(temp);


// Time Complexity: O(n)
// Space Complexity: O(n)