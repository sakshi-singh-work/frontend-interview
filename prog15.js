// [1,2,2,2,1,1,3,3,4,4,5] =>[1,2,3,4,5]
function uniqueArray(arr) {
  let newArr = [];
  let mapObj = {};
  let set = new Set(arr);
  
console.log([...set])
  // for(let el of arr){
  //    if(mapObj[el]){
  //     mapObj[el]=mapObj[el]+1 ||1 ;
  //    }else{
  //     mapObj[el]=1
  //    }
  //     if(!newArr.includes(el)) {
  //          newArr.push(el)
  //     }
  // }
  console.log(mapObj);
  return newArr;
}

console.log(uniqueArray([1, 2, 2, 2, 1, 1, 3, 3, 4, 4, 5]));
