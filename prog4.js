// [1,2,3,4,5],2  ==> [[1,2],[3,4],[5]]

function abc(array, size) {
  let arr2 = [];
  let index = 0;
  // for (let i = 0; i <= array.length; i+=size) {
  // let result = array.slice(i, i + 2);
  //    arr2.push(result)

  // }
  while (index < arr.length) {
    arr2.push(arr.slice(index, index + size));
    index += size;
  }
  return arr2;
}
const arr = [1, 2, 3, 4, 5];
console.log(abc(arr, 2));
