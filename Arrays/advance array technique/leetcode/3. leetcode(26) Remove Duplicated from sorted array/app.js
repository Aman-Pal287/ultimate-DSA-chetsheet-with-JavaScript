//! leetcode(26) Remove Duplicated from sorted array
//example 1:
let nums = [0,0,1,1,1,2,2,3,3,4];
let j=1
for(let i=0;i<nums.length-1;i++){
    if(nums[i] != nums[i+1]){
        nums[j] = nums[i+1]
        j++
    }
}
console.log(nums);
console.log(j+" unique elements " + " , "+nums);