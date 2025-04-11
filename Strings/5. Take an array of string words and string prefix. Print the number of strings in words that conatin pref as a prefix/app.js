const prompt = require('prompt-sync')();


// Take an array of string words and string prefix. Print the number of strings in words that conatin pref as a prefix
            //exapmle : words = ["pay","attention","practice","attend"] , pref="at"  , output:2

let words = ["pay","attention","practice","attend"];
let prefix =  "at";
let count = 0;
for(let i=0;i<words.length;i++){
    if( words[i].startsWith(prefix)){
        count ++;
    }
}
console.log(count);

// time complexity : O(n)
// space complexity: O(1)