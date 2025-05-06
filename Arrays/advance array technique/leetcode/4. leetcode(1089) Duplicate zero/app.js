//! leetcode(1089) Duplicate zero

//brut force method
// let arr = [1,0,2,3,0,4,5,0]
// let ans = new Array(arr.length)
// let i=0,j=0;
// while(j<ans.length){
//     if(arr[i] == 0){
//         ans[j] = arr[i]
//         ans[j+1] = arr[i]
//         i++
//         j +=2
//     }else{
//         ans[j] = arr[i]
//         i++
//         j++
//     }
// }
// console.log(ans);



//^optimized and efficient code
let arr = [1,0,2,3,0,4,5,0]
let zeroes = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i] == 0) zeroes++;
}

let i=arr.length-1
let j=(arr.length-1) +zeroes
while (i!=j) {
    if(j<arr.length){
        arr[j] = arr[i]
    }
    j--
    if(arr[i]==0){
        if(j<arr.length){
            arr[j] = arr[i]
        }
        j--
    }
    i--
}
console.log(arr);
