// leetcode(2418): sort the people 

//method 1 : using array of object
// let names = ["Mary", "John", "Emma"];
// let heights = [180, 165, 170];

// let people = []
// for(let i=0;i<names.length;i++){
//     people.push({name:names[i],height:heights[i]})
// }
// people.sort((a,b) => b.height - a.height);

// let ans = new Array(people.length)
// for(let i=0;i<ans.length;i++){
//     ans[i] = people[i].name;
// }
// console.log(ans);


//method:2 using map and effienct approach
let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];
let map = new Map()
for(let i=0;i<heights.length;i++){
    map.set(heights[i] , names[i]);
}
heights.sort((a,b)=>b-a);
let ans = new Array(names.length);
for(let i=0 ;i<ans.length;i++){
    ans[i] = map.get(heights[i])
}
console.log(ans);
