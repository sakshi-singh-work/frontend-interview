//step(3)
// *
// **
// ***

function step(n) {
  for (let row = 1; row <= n; row++) {
    let space = "";
    for (let col = 1; col <= n; col++) {
      if (row >= col) {
        space += "*";
      }else{
        space+=""
      }
    }
    console.log(space);
  }
}

console.log(step(3));
