//! josepheous problem based , leetCode(1823) Find the Winner of The Circular game
/**
 * Find the last remaining person in the Josephus problem
 * @param {number} n - Total number of people
 * @param {number} k - Step count
 * @return {number} - The position of the last remaining person
 */

var solve = function (k, arr, i) {
    if (arr.length === 1) return arr[0]
    i = (i + k) % arr.length
    arr.splice(i, 1)
    return solve(k, arr, i)
}

var findTheWinner = function (n, k) {
    let arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1
    }
    k--;
    return solve(k, arr, 0)
};

