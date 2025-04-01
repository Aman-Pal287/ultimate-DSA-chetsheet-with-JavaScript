// bubble sort

let arr = [5,3,1,9,7,8,4,3,1,1,4,3,1,8]
for(let j= 0;j<arr.length-1;j++){
    for(let i = 0 ; i<arr.length-1-j;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }    
    }
}
console.log(arr);

// Time Complexity: O(n^2)
// Space Complexity: O(1)




