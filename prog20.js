// const arr = [1, 2, 3, 4, 4, 1, 11, 1, 2, 3, 3];
// let mapObj = {};
// arr.forEach((el) => {
//   if (mapObj[el]) {
//     mapObj[el] = mapObj[el] + 1;
//   } else {
//     mapObj[el] = 1;
//   }
// });
// console.log(mapObj)

const arr =["abbc","abcd","abcccdd","abe"]
let count=0
let words =null
for(let word of arr){
    const set = new Set(word)
    if(set.size>count){
        count=set.size
        words =word
    }
}
console.log(words)