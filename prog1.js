//call,apply and bind

let name = {
  firstName: "Sakshi",
  lastName: "Singh",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
name.printFullName();

//second way using call function borrowing

let name2 = {
  firstName: "Rishabh",
  lastName: "Gupta",
};
name.printFullName.call(name2);

//declaring functions inside object is not a good practise instead we can do is below

let name3 = {
  firstName: "Monika",
  lastName: "Singh",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

printFullName.call(name3, "Lucknow", "Uttar Pradesh"); //good practise
printFullName.apply(name3, ["Lucknow", "Uttar Pradesh"]); 
//good practise first arguement reference to this variable second arguement is list of applied variables
