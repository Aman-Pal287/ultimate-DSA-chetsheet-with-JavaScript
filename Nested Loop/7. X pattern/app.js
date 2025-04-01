// problemm :X pattern
const prompt = require('prompt-sync')();
let n = Number(prompt("enter a number : "));
for(let i= 1;i<=n;i++){
        for(let j=1;j<=n;j++ ){
                if(i==j || i+j === n+1){
            process.stdout.write("* ")
        }else process.stdout.write("  ")
    }
    console.log();

}

// Time Complexity: O(n^2)
// Space Complexity: O(1) 