//problem 2: Accept a string and print it in  reverse order
let str = prompt("Enter a string : ")
let ans = "";
for(let i=str.length-1;i>=0;i--){
    ans += str.charAt(i)
}
console.log(ans);


// time complexity : O(n)
// space complexity: O(n)