const obj = [
  {
    apple: 2,
    orange: 1,
    banana: 3,
    grapes: 1,
  },
  {
    apple: 2,
    orange: 1,
    banana: 3,
  },
  {
    apple: 2,
    orange: 1,
    banana: 3,
    grapes: 2,
  },
];

// const result = obj.reduce((acc,curr)=>{
// for(let key in curr){
//     acc[key] = (acc[key]||0) +curr[key]
// }return acc
// },{})

// let countObj = {};
// obj.forEach((item) => {
//   Object.keys(item).forEach((value) => {
//     if (countObj[value]) {
//       countObj[value] = countObj[value] + item[value];
//     } else {
//       countObj[value] = item[value];
//     }
//   });
// });

const result = obj.reduce((acc, curr) => {
  Object.keys(acc).forEach((value) => {
    if (acc[value]) {
        acc[value]+=curr[value]
    }else{
        acc[value]=curr[value]
    }
})
return acc;
  
}, {});
console.log(result);
