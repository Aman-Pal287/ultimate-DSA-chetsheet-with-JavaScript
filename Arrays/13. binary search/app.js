//binary search


const prompt = require('prompt-sync')();

// binary search ki demands - array sorted hona chahiye
let arr = [10, 23, 45 , 67 , 69 , 190 , 200];
let target = Number(prompt("Enter a target : "))
if(binarySearch(arr,target) === -1) console.log("Not Found");
else console.log("element found");

// // binarySearch(arr, target);// isko hum if else laga ke call karenge.

function binarySearch(arr , target){
    let s = 0 , e =arr.length-1;
    while(s<=e){
        let mid = Math.floor((s+e)/2)  
        //let mid = s + (e-s)/2;      // mid ko hum aise bhi likh sakte hai cause other language mein dikkat dega agar upar waal tarike se mid nikalenge toh but JavaScript mein upar wala mid nikalne ka tarika chal jayega  
        if(arr[mid] == target) return mid;
        else if(arr[mid]>target) e = mid-1;
        else s = mid +1;
    }
    return -1
}


// Time Complexity: O(log n)
// Space Complexity: O(1)

