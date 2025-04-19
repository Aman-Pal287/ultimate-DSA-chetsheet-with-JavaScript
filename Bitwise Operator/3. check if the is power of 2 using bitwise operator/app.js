// check if the is power of 2 using bitwise operator
let n = prompt("enter a number")
if((n&(n-1)) == 0) console.log("yes it is a power of two");
else console.log("no , it is not a power of two");

// note : negattive number ka koi 2 ka power nhi hota hai isliye ek check bana lena age mera user input 0 se chota hai toh return false mar dena
