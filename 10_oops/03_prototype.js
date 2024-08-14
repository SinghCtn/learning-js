// https://youtu.be/uMI5cNeHTOc?si=UIES1mdn5R7LNmes&t=1630

// imlementing a truelength property with a string whch gives lengthof the string by removing the empty spaces

let myHeros = ["thor", "spiderman"];

let HeroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`spiderman power is ${spiderman}`);
  },
};

Object.prototype.chetan = function () {
  console.log("Chetan is present in all objects");
};

HeroPower.chetan(); // Chetan is present in all objects
myHeros.chetan(); // Chetan is present in all objects

Array.prototype.heyChetan = function () {
  console.log("Chetan Say's Hello");
};

myHeros.heyChetan(); // Chetan Say's Hello
// HeroPower.heyChetan(); //this won't work as the power is not with the object

// Inheritance

const User = {
  userName: "user0",
  email: "user@redifmail.com",
};

const Teacher = {
  makeVedio: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignments",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.userName);

// the solution for our initial problem

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};

const anotherUserName = "Chetan    ";

anotherUserName.trueLength();

"kitu  ".trueLength();
