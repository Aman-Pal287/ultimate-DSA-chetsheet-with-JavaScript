//spiral matrix(leetcode 54):interview favorite

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
 ]


let ans = [];
let top = 0 ;
let bottom = arr.length-1;
let left = 0;
let right = arr[0].length-1

while(top <= bottom && left <=right){
    //left to right
    for(let i=left;i<=right;i++){
        ans.push(arr[top][i])
    }
    top++;
    
    //top to bottom
    for(let i = top;i<=bottom;i++){
        ans.push(arr[i][right])
    }
    right--;

    //right to left
    if(top<=bottom){
        for(let i=right;i>=left;i--){
            ans.push(arr[bottom][i])
        }        
        bottom--;
    }

    //bottom to top
    if(left<=right){
        for(let i = bottom;i>=top;i--){
            ans.push(arr[i][left])
        }
        left++
    }

}
console.log(ans);

