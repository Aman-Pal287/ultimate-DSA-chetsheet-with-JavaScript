// leetcode : two sum

//brut force method
let num = [11,2,15,7]
let target = 9;
let ans = [-1,-1]
for(let i=0;i<num.length;i++){
    for(let j=0;j<num.length;j++){
        if(i !== j && num[i]+num[j] == target){
            ans[0] = j;
            ans[1] = i;
            break;
        }
    }
}
console.log(ans);
