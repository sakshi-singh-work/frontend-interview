//anagram
//1 st method

// function convertToMapObj(str) {
//   let mapObj = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");

//   for (let char of str) {
//     mapObj[char] = mapObj[char] + 1 || 1;
//   }
//   return mapObj;
// }

// function anagram(str1, str2) {
//   const mapObj1 = convertToMapObj(str1);
//   const mapObj2 = convertToMapObj(str2);
 
//   if (Object.keys(mapObj1).length !== Object.keys(mapObj2).length) return false;

//   for (let keys in mapObj1) {
//     if (mapObj1[keys] !== mapObj2[keys]) return false;
//   }
//   return true;
// }

//2nd method

function cleanStr(str){
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagram(strA,strB){
  return cleanStr(strA)=== cleanStr(strB)
}

console.log(anagram("sakshi is good", "doogihskassi"));