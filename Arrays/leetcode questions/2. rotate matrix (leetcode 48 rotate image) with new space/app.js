// rotate matrix (leetcode 48 rotate image) with new space

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
function rotateImage(arr) {
    let ans = Array.from({ length:arr[0].length }, () => Array(arr.length))

    for (let i = 0; i<ans.length; i++) {
        for (let j = 0; j<ans[i].length; j++) {
            ans[i][j] = arr[j][i];
        }
    }
    for (let i = 0; i<ans.length; i++) {
        let start = 0 , end=ans[i].length-1;
        while (start < end) {
            let temp = ans[i][start]
            ans[i][start] = ans[i][end]
            ans[i][end] = temp
            start++
            end--
        }
    }
    return ans;

}
console.log(rotateImage(arr));
