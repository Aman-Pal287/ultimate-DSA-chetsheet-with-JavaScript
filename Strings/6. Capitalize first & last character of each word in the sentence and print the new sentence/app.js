const prompt = require('prompt-sync')();


// Capitalize first & last character of each word in the sentence and print the new sentence

// example : input= "hello bhai" , output = "HellO BhaI"

let s = "hello bhai kaise ho";
let arr = s.split(" ");
let ans = "";
console.log(arr);
for(let i=0;i<arr.length;i++){
    let word = arr[i];
    if(word.length<=2) ans += word.toUpperCase() + " ";
    else {
       ans +=   word.charAt(0).toUpperCase() 
              + word.substring(1,word.length-1) 
              + word.charAt(word.length-1).toUpperCase() + " ";
    }
}
console.log(ans);



// time complexity : O(n)
// space complexity: O(n)