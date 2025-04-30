let prompt = require('prompt-sync')();

//^ interesting concept imp or interview  (a-- likhu ya --a)
let n = prompt('Enter a number : '  )
temp(n)
function temp(n){
    if(n==0) return
    console.log("hello world");
    temp(n--)
}
