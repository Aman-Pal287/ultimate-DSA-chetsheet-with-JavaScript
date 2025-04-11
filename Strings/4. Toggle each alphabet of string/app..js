const prompt = require('prompt-sync')();

// Toggle each alphabet of string
let str = prompt("Enter a string");
console.log(str);
let ans = "";
for(let i=0;i<str.length;i++){
    let asci = str.charCodeAt(i);
    if(asci >= 65 && asci<=90) {
        ans += String.fromCharCode(asci+32);
    }
    else if(asci >= 97 && asci<=122){
        ans += String.fromCharCode(asci-32);
    }
    else{
        ans += str.charAt(i)
    }
}
console.log(ans);

// time complexity : O(n)
// space complexity: O(n)