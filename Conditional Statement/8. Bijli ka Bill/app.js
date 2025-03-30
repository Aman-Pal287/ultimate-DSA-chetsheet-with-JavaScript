// bijli ka bill

//     unit                    price
//     up to 100              4.2/unit
//     101 - 200              6/unit
//     201- 400               8/unit
//     more than 400          13/unit


let prompt = require("prompt-sync")(); // O(1) -> Importing module

// let unit = prompt("Enter electricity unit: ");
// let amount = 0;
// if(unit >0 && unit <=100){
//     amount = unit*4.2
// }else if(unit>100 && unit<=200){
//     amount = (100*4.2) + (unit-100)*6;
// }else if(unit>200 && unit<=400){
//     amount = (100*4.2) + (100*6) + (unit - 200)*8 ;
// }else if(unit>400){
//     amount = (100*4.2) + (100*6) + (200)*8 + (unit-400)*13 ;
// }

// console.log("the total amount of electricity bil = " + amount);



//efficient method
// let unit = prompt("Enter electricity unit: ");

let unit = prompt("Enter electricity unit: ");
let amount = 0;

if(unit > 400){
    amout = (unit-400)*13
    unit = 400;
}
if(unit>200 && unit <=400){
    amount = amount + (unit-200)*8
    unit  = 200;
}
if(unit >100 && unit<=200){
    amount = amount +(unit-100)*6;
    unit = 100;
}
amount = amount + (unit*4.2);
console.log("The total amount of electricity bill = " + amount);
