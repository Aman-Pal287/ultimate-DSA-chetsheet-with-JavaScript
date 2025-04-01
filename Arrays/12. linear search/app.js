// linear search
const prompt = require('prompt-sync')();

// method 1 : brutforce method puree array ke element pe itration karna hoga 
let target = Number(prompt("Enter a target value : "));
let arr = [10,5,3,15,19,69,20]
let index = -1;
for(let i =0 ; i<arr.length;i++){
    if(arr[i] == target ){
        index = i;  
        break;
    }
}
if(index == -1) console.log("Element not found");
else console.log("Element found at index at " + index+' index');