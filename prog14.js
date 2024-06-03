// source https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// sumRange(3) returns 6, since 1 + 2 + 3 = 6


function sumRange(number) {
  let result;
  if (number == 1) {
    result = number;
  } else {
    result = number + sumRange(number - 1);
  }

  return result;
}
// console.log(sumRange(-1));

// console.log(power(2, 4)); // 16

function power(num, pow) {
  if (pow === 0) return 1;
  else {
    return num * power(num, pow - 1);
  }
}

// 2 * power(2,3)
// 2* 2 *power(2,2)
// 2 * 2 * 2 *power(2,1)
// 2* 2*2*2*power(2,0)
// 2*2*2*2*1

const obj = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
const value = "foo2";

function checkObjProperty(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      console.log(obj);
      return checkObjProperty(obj[key], value);
    }
    if (obj[key] == value) {
      return true;
    }
  }
}

// console.log(checkObjProperty(obj, value));

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
  let count = 0;
  for (let el of arr) {
    if (Array.isArray(el)) {
      count += totalIntegers(el);
    } else if (typeof el == "number") {
      count += 1;
    }
  }

  return count;
}

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

// var l = [1,2,3];

function SumSquares(l) {
  let sum = 0;
  for (let el of l) {
    if (Array.isArray(el)) {
      sum += SumSquares(el);
    } else {
      sum += el * el;
    }
  }
  return sum;
}

l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

function replicate(times, number) {

  if (times <= 0) return [];
  
  return [number].concat(replicate(times-1,number))
}

console.log(replicate(3, 5)) // [5, 5, 5]
