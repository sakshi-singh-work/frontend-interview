const data = [
  {
    firstName: "sakshi",
    lastName: "singh",
    age: 26,
  },
  {
    firstName: "monika",
    lastName: "singh",
    age: 32,
  },
  {
    firstName: "shipra",
    lastName: "singh",
    age: 34,
  },
  {
    firstName: "shikha",
    lastName: "singh",
    age: 36,
  },
];

const output = data.reduce((acc, curr) => {
  if (curr.age > 26) {
    acc.push(curr.firstName);
  }

  return acc;
}, []);

console.log(output);
