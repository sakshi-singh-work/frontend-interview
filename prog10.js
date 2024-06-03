// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log([i, j]);
//       }
//     }
//   }
// };

const arr = [1, 4, 5, 6, 8];
function abc(arr,callback) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  callback(arr)
   
  return newArr;
}
console.log(
  abc(arr, function c(arr) {
  arr.push(90);
  console.log(arr, "hit");
    
  })
);



