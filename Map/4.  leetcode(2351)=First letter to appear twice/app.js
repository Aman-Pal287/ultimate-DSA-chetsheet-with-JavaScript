// leetcode(2351): First letter to appear twice

let s = "abeebcbaacz"
let map = new Map()
for(let i=0;i<s.length;i++){
    let ch = s.charAt(i);
    if(map.has(ch)){
        console.log(ch);
        break;        
    }
    else map.set(ch,1);
}
