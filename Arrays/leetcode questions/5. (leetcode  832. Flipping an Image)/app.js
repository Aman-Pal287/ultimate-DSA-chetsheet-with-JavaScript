//(leetcode: 832. Flipping an Image)


let image = [[1,1,0],[1,0,1],[0,0,0]];


for (let i = 0; i < image.length; i++) {
    let start = 0, end = image[i].length - 1;
    while (start <= end) {
        let temp = image[i][start] ^1;
        image[i][start] = image[i][end] ^1;
        image[i][end] = temp;
        
        start++;
        end--;
        
    }
}

console.log(image);
