const vowels = ["a", "e", "i", "o", "u"];

// function checkVowels(str) {
//   let count = 0;
//   for (char of str) {
//     for(vowelsChar of vowels){
//         if (char === vowelsChar) {
//           count += 1;
//         }
//     }
//   }
//   return count;
// }

function checkVowels(str) {
  let count = 0;
  for (let char of str.tolowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(checkVowels("aeiouf"));
