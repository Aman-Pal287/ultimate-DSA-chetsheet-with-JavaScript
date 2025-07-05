//! leetCode(78) Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function solve(nums, ans, cur, i) {
    if (i === nums.length) {
        ans.push([...cur])
        return
    }
    //pick
    cur.push(nums[i])
    solve(nums, ans, cur, i + 1)
    cur.pop()

    //not pick
    solve(nums, ans, cur, i + 1)

}


function generateSubsets(nums) {
    // Write your code here
    let ans = []
    let cur = []
    solve(nums, ans, cur, 0)
    return ans.sort()

}