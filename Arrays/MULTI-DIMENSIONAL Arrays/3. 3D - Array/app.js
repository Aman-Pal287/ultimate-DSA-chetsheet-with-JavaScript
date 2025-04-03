// 3D - Array

// printing 3d array
let arr = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]],
    [[13, 14, 15], [16, 17, 18]]
]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++ ){
        for (let k = 0; k<arr[i][j].length; k++) {
            process.stdout.write(`[ ${arr[i][j][k]} ]`)
        }
        console.log();        
    }
    console.log("----");
}


// Time Complexity: O(n^3)
// Space Complexity: O(1)


