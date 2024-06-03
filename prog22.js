// Code 1: Remove Duplicate characters from String
const string = "sakkkshiii";

function removeDuplicate(string) {
  let arr2 = [];
  for (let letter of string) {
    if (!arr2.includes(letter)) {
      arr2.push(letter);
    }
  }
  return arr2;
}
// console.log(removeDuplicate(string));

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];

function removeDuplicateNumber(arr){
let set = [...new Set(arr)].length
return set
}

console.log(removeDuplicateNumber(arr));