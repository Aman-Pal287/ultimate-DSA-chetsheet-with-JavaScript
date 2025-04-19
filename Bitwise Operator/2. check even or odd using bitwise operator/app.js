// check even or odd using bitwise operator
let n = prompt("Enter a number")
if((n&1) == 0) console.log("even");
else console.log("odd");

// note : agar LSB(Least significnt bit) 0 hoga toh number even hoga aur MSB(Most significant bit) agar 1 hoga toh number odd hoga