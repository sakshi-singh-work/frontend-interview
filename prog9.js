// checkNum("the boyoy boyoyy boyhf") //boyhf [the][boyoy][boyoyy][boyhf]
function checkNum(str) {
  let result = "";
  let count = 0;
  const arr = str.split(" ");

  for (let word of arr) {
    const unique = new Set(word);
 
    if (unique.size > count) {
      count = unique.size;
      result = word;
    }
  }

  return result;
}
// console.log(checkNum("the boyoy bovcseryoyy boyhf"));
// function checkNum(sentence) {
//   const words = sentence.split(" ");

//   let maxUniqueCount = 0;
//   let wordWithMaxUnique = "";

//   for (let word of words) {
//     const charCount = {};

//     for (let char of word) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }

//     console.log(charCount);
//     const uniqueCount = Object.keys(charCount).length;
//     console.log(uniqueCount);

//     if (uniqueCount > maxUniqueCount) {
//       maxUniqueCount = uniqueCount;
//       wordWithMaxUnique = word;
//     }
//   }

//   return wordWithMaxUnique;
// }

// Example usage:
console.log(checkNum("the boyoy boyoyy boyhf")); // Output: "boyhf"
