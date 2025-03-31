// sum of digit

const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number : "))
let rem = 0;
let sum = 0;
let i = 1;
while (n > 0) {
    rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
    i++;
}
console.log("the sum is : " + sum);


// Time Complexity: O(log N)
// Space Complexity: O(1) 

/*

Why is the Time Complexity O(log N)?

The loop runs while n > 0, and in each iteration, n is divided by 10 using Math.floor(n / 10).

Let’s analyze how many times the loop executes:

Initially, n has D digits.

In each iteration, n is divided by 10, reducing the number of digits by 1.

The loop continues until n becomes 0.

So, the number of iterations is equal to the number of digits in n, which is D.

How Many Digits Does a Number Have?
The number of digits D in a number N is given by:

𝐷=⌊log⁡10𝑁⌋+1D=⌊log 10​ N⌋+1

Since D = O(log N) (base 10), the loop runs O(log N) times.

*/