// leetcode : two sum

//brut force method
// let num = [11,2,15,7]
// let target = 9;
// let ans = [-1,-1]
// for(let i=0;i<num.length;i++){
//     for(let j=0;j<num.length;j++){
//         if(i !== j && num[i]+num[j] == target){
//             ans[0] = j;
//             ans[1] = i;
//             break;
//         }
//     }
// }
// console.log(ans);


//efficient method
let num = [11,2,15,7]
let target = 9;
let map = new Map();
let ans = [-1,-1];
for(let i=0;i<num.length;i++){
    if(map.has(target - num[i])){
        ans[1] = i;
        ans[0] = map.get(target - num[i])
        break;
    }
    else map.set(num[i],i)
}
console.log(ans);
