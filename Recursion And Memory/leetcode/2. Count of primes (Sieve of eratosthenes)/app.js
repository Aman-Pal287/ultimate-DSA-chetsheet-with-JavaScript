let prompt = require('prompt-sync')();

//! Count of primes (Sieve of eratosthenes)

let n = Number(prompt("enter a number : "))

function checkRangeInPrime(n){
    let isPrime = new Array(n+1).fill(true);
    isPrime[0] = false
    isPrime[1] = false
    for(let i=2 ;i<Math.floor(Math.sqrt(n));i++){
        if(isPrime[i] === true){
            for(let j=i*i;j<isPrime.length;j+=i){
                isPrime[j] = false;
            }
        }
    }

    for(let i=0;i<isPrime.length;i++){
        if(isPrime[i]){
            process.stdout.write(i+ " ")
        }
    }
}
checkRangeInPrime(n)