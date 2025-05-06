//! leetcode(88) Merge Sorted Array

//example 1:
let nums1 = [11,22,33,0,0,0]
let nums2 = [8,20,30]
let m = 3 , n=3;
//NOTE - here m+n is the length of nums1 and m is number of elements of nums1 and n is number of elements of nums2

let i = m-1, j=n-1, k=nums1.length-1;

while(i>=0 && j>=0){
    if(nums1[i]>nums2[j]){
        nums1[k--] = nums1[i--]
    }else{
        nums1[k--] = nums2[j--]
    }
}
while(j>=0){
    nums1[k--] = nums2[j--]
}
console.log(nums1);
