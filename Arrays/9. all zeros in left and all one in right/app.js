// all zeros in left and all one in right


let arr = [1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1]
let i= 0 , j=0 , temp;
while(i<arr.length){
    if(arr[i] == 0){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++;
}
console.log(arr);

// Time Complexity: O(n)
// Space Complexity: O(1)