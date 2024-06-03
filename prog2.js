//reverse a string

// 1 method
// function reverseString(word) {
//   let reversed = "";
//   for (let i = 0; i < word.length; i++) {
//     reversed = word[i] + reversed;
//   }
//   return reversed;
// }

// 2 method
// function reverseString(word) {
//   let reversed = "";
//   for (char of word) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//3 method
function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log(reverseString("hhahha"));

//reverse integer

function reverseInt(number) {
  const reversed = String(number).split("").reverse().join("");
  return parseInt(reversed) * Math.sign(number);
}
console.log(reverseInt(-123));

//pallindrome for string

function checkPallindrome(str) {
  let reversedStr = "";
  reversedStr = str.split("").reverse().join("");
  return reversedStr === str
    ? `${str} is pallindrome`
    : `${str} is not  pallindrome`;
}

console.log(checkPallindrome("madama"))