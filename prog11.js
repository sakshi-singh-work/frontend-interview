function memoiseOne(fn) {
  let cache = {};
  //{'[2,3]':5},{'[5,6]':11}

  return function (...args) {

     args.sort()
    if (cache[args]) {
      return cache[args];
    } else {
      let result = fn(...args);
      cache[args] = result;
    }
    console.log(cache);
  };
}

const add = (a, b) => a + b;

const result = memoiseOne(add);

console.log(result(100, 323));

console.log(result( 323,100));


