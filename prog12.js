//recursion

//[1,2,3,[4,[5,6,7,[8,9]]]]=> [1,2,3,4,5,6,7,8,9]

let arr = [1, 2, 3, [6, 7]];
function flatArray(arr) {
  let flat_array = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
       flat_array.push(...flatArray(el));
    } else {
      flat_array.push(el);
    }
  }

  return flat_array;
}

console.log(flatArray(arr));
