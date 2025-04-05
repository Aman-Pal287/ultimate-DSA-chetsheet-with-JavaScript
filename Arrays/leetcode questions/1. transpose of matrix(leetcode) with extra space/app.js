// transpose matrix with extra space

// method 1: 
// let arr = [[2,4] , [5,11], [-7,6]]
// let row = arr[0].length
// let coloumn = arr.length
// let ans = new Array(row)
// for(let i=0;i<ans.length;i++){
//     ans[i] = new Array(coloumn);
// }
// for(let i=0;i<ans.length;i++){
//     for(let j=0;j<ans[i].length;j++){
//         ans[i][j] = arr[j][i];
//     }
// }
// console.log(ans);





//method 2:with lamda expression
let arr = [[2,4] , [5,11], [-7,6]]
let ans = Array.from({length:arr[0].length}, ()=> Array(arr.length))

for(let i=0;i<ans.length;i++){
    for(let j=0;j<ans[i].length;j++){
        ans[i][j] = arr[j][i];
    }
}
console.log(ans);


// time complexity : O(n^2)
// space complexity: O(n*m)