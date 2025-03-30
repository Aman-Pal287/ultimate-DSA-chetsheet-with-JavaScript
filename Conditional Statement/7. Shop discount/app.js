// Shop discount 

//   Amount            discount
//    0-5000                0%        
//    5001-7000             5%    
//    7001-9000             10%  
//    more than 9000        20%  


let prompt = require('prompt-sync')()
let amount = prompt("Enter amount")
let discount = 0;
if (amount >= 0 && amount <= 5000) discount = 0;
else if (amount > 5000 && amount <= 7000) discount = 5;
else if (amount > 7000 && amount <= 9000) discount = 10;
else if (amount > 9000) discount = 20;
console.log(amount - (amount * discount) / 100);
