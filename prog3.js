// [11113434 ac cc] =1
function countReps(str) {
  let obj = {};
  let maxValue = 0;
  let maxKey = null;

  //1 METHOD
  //   str.split("").forEach((el) => {
  //     obj[el] = (obj[el] || 0) + 1;
  //   });
  //   console.log(obj)
  //   for (let [key, value] of Object.entries(obj)) {
  //     if(value>count){
  //         count=value
  //         maxKey=key
  //     }
  //     console.log(maxKey, count);
  //   }
  for (let char of str) {
    // if (obj[char]) {
    obj[char] = obj[char] + 1 || 1;
    // }
    // else {
    //   obj[char] = 1;
    // }
  }
  console.log(Object.entries(obj));
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }
  console.log(maxKey, maxValue);
}

console.log(countReps("11113434accc"));
