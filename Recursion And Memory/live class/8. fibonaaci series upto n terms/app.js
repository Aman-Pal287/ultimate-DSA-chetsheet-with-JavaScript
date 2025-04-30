const prompt = require('prompt-sync')();


//^ fibonaaci series upto n terms

//& with for loop
/** 
 let n = prompt('Enter a number')
let first = 0 , second = 1;
process.stdout.write(first + " " + second + " " )
for(let i=0;i<=n-2;i++){
    let third = first + second
    process.stdout.write(third + " ")
    first = second
    second = third    
}


*/ 


//& recursive apprach
function fiboNTerms(){
    if(n==0 ) return 
    let third = second + first
    process.stdout.write(third+" ")
}
let n=10
let first = 0 , second = 1;
process.stdout.write(first + " " + second + " ")
fiboNTerms(n-2,first,second)