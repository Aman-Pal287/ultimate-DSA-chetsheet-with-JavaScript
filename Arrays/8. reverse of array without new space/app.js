//reverse of array without new space


let arr = [1,2,3,4,5,6,7,8,9,10]
let i =0 , j= arr.length-1 , temp;
while(i<j){
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);

// Time Complexity: O(n)
// Space Complexity: O(1)