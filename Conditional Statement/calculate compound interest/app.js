function compoundInterest(P, r, n) {
    // Final amount A 
    let A = P * Math.pow((1 + r / 100), n);

    // Compound Interest (CI)
    let CI = A - P;

    return CI;
}

// Example use case
let P = 10000, r = 5, n = 3; 
let CI = compoundInterest(P, r, n);

console.log("Compound Interest:", CI.toFixed(2)); // 2 decimal places