//! problem 1: merge sorted array glimpse
//NOTE - normal tarika bina post increment

// arr1 = [1,5,8]
// arr2 = [7,10,15,20,80]
// let ans = new Array(arr1.length+arr2.length)
// let i=0 ,j=0,k=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         ans[k] = arr1[i]
//         k++;
//         i++;
//     }else{
//         ans[k] = arr2[j]
//         k++;
//         j++;
//     }

// }
// while(i<arr1.length){
//     ans[k] = arr1[i]
//     k++
//     i++
// }
// while(j<arr2.length){
//     ans[k] = arr2[j]
//     k++
//     j++
// }
// console.log(ans);

//NOTE - post increment wla tarika
arr1 = [1,5,8]
arr2 = [7,10,15,20,80]
let ans = new Array(arr1.length+arr2.length) //*SECTION - merged array
let i=0,j=0,k=0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        ans[k++] = arr1[i++]
    }else{
        ans[k++] = arr2[j++]
    }
}
while(i<arr1.length){
    ans[k++]  = arr1[i++]
}
while(j<arr2.length){
    ans[k++]  = arr2[j++]
}
console.log(ans);
