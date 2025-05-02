//! GCD/HCF leetcode(1979)

//^loop approach

// let a = 32 , b = 20;
// for(let i=Math.min(a,b);i>=1;i--){
//     if(a%i==0 && b%i==0){
//         console.log("GCD is = " + i);
//         break;
//     }
// }



//NOTE :Importent GCD loop approach (Euclidean alogorith) - ye google kar lena baad mein bhul jao toh
// let a = 32 , b = 20;
// while(a!=b){
//     if(a>b) a = a-b;
//     else b= b-a;
// }
// console.log("The GCD is = " + a);
//time complexity = O(max(a,b))



//^GCD recursive approach (ismein eucclidean alogorithm laga hai)  

// function GCD(a,b){
//     if(a==b) return a;
//     if(a>b) return GCD(a-b,b);
//     return GCD(a , b-a)    
// }
// let a = 20  , b = 32;
// console.log(GCD(a,b));

//^ GCD recursive approach more efficient than previous (ismein eucclidean alogorithm laga hai) 

function gcd(a,b){
    if(b==0) return a;
    return gcd(b,a%b)
}

let a = 20 , b = 32;
console.log(gcd(a,b));
