[2, 3, 4, 5]
  .at(1) // 3 ,  returns you the element with index 1.
  [(2, 3, 4, 5)].pop() // [2,3,4] ,  removes the last element.
  [(2, 3, 4, 5)].push(6) // [2,3,4,5,6] ,  adds the element at the last position.
  [(2, 3, 4, 5)].fill(1) // [1,1,1,1] , fills all the array values.
  [(2, 3, 4, 5)].join("-") // '2-3-4-5' , concatinates all the elements with the char passed in arg.
  [(2, 3, 4, 5)].shift() // [3,4,5] , deletes the first element.
  [(2, 3, 4, 5)].reverse() // [5,4,3,2] , reverses the array.
  [(2, 3, 4, 5)].unshift(1) // [1,2,3,4,5] , adds new elements to the beginning of an array.
  [(2, 3, 4, 5)].includes(5) // true , returns true if an array contains a specified value. / false if not found
  [(2, 3, 4, 5)].map((num) => num + 6) // [9,10,11,12] , allows you to iterate over an array and modify its elements using a callback function.
  [(2, 3, 4, 5)].find((num) => num > 4) // 5 , returns the value of the first element that passes a test.
  [(2, 3, 4, 5)].some((num) => num > 5) // true , tests whether at least one element in the array passes the test implemented by the provided function.
  [(2, 3, 4, 5)].filter((num) => num > 4) // [5,6] , creates a new array filled with elements that pass a test provided by a function.
  [(2, 3, 4, 5)].every((num) => num > 5) // false , executes a function for each array element.
  [(2, 3, 4, 5)].findindex((num) => num > 4) // 2 ,  returns the index of a first array element that satisfies the provided condition.
  [(2, 3, 4, 5)].reduce((acc, num) => acc + num); // 18 , returns a single value: the function's accumulated result.
