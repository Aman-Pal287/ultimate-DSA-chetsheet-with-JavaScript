//SELECTION SORT


let arr = [11, 1, 3, 5, 10, 15]
for (let i = 0; i < arr.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[small] > arr[j]) {
            small = j;
        } 
    }
    if (i != small) {
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
}
console.log(arr);