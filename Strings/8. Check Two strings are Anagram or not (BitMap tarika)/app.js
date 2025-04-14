const prompt = require('prompt-sync')();

// Check Two strings are Anagram or not (BitMap tarika)
//           ex: "arc" & "car" , "taste" & "state" => means length and frequency dono same ho tab anagram kehlata hai

let s1 = prompt("Enter 1st string : ")
let s2 = prompt("Enter 2st string : ")
let freqArr = new Array(123).fill(0);
let isAnagram = true;
if(s1.length !== s2.length) {
    isAnagram = false;
}
else{

    for(let i=0;i<s1.length;i++){
        let ascii = s1.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii] + 1;
    }
    for(let i=0;i<s2.length;i++){
        let ascii = s2.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii] - 1;
    }
    for(let i=0;i<freqArr.length;i++){
        if(freqArr[i] !== 0){
            isAnagram = false;
            break;
        }
    }   
}
if(isAnagram) console.log("yes it is a Anagram");
else console.log("Not a Anagram");

