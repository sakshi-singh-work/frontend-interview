const obj = [
  { Sno: 1, score: 20 },
  { Sno: 2, score: 30 },
  { Sno: 1, score: 50 },
];

//[{Sno:1,score:70},{Sno:2,score:30}]

let newArr = [];
obj.map((item) => {
  const isMatch = newArr.find((x) => x.Sno === item.Sno);
  //  isMatch=   { Sno: 1, score: 20 },,
  if (isMatch) {
    isMatch.score = isMatch.score + item.score;
  } else {
    newArr.push(item);
  }
});
console.log(newArr);
