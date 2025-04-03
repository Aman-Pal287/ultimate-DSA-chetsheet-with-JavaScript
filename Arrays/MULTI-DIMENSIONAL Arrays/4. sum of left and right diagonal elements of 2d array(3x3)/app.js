//sum diagonal of matrix(2d array(3x3))




arr = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
]
let leftSum = 0, rightSum = 0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(i==j) leftSum += arr[i][j]
        if(i+j == arr.length-1){
            if(i == j) rightSum += 0;
            else  rightSum += arr[i][j];
            
        } 
    }
}
console.log("leftSum: " + leftSum);
console.log("rightSum: " + rightSum);


// Time Complexity: O(n^2)
// Space Complexity: O(1)

