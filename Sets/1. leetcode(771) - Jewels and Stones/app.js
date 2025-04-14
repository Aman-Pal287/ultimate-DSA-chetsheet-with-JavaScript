const prompt = require('prompt-sync')();

// leetcode(771) - Jewels and Stones 


//method : 1
// let jewels = "aA"
// let stones = "aAAbbbb"

// let set = new Set(jewels);
// for(let i=0;i<jewels.length;i++){
//     set.add(jewels.charAt(i))
// }
// let count = 0;
// for(let i=0;i<stones.length;i++){
//     let ch = stones.charAt(i)
//     if(set.has(ch)) count++;    
// }
// console.log(set);



//method : 2 of leetcode(771) - Jewels and Stones 
let jewels = "aA"
let stones = "aAAbbbb"
let count = 0;
for (let i = 0; i < stones.length; i++) {
    let ch = stones.charAt(i);
    if (jewels.includes(stones[i])) {
        count++;
    }
}
console.log(count);