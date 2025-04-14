const prompt = require('prompt-sync')();


// (leetcode 1832) Check if the sentence is Pangram 

let sentence = "thequickbrownfoxjumpsoverthelazydog"
let set = new Set();
for(let i=0;i<sentence.length;i++){
    let ch = sentence.charAt(i)
    set.add(ch);
}
if(set.size == 26) console.log("yes sentece is a panagram");
else console.log("sentece is not a panagram");

