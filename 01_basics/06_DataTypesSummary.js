/*
two types:
#1 Premitive:
7 Types: String, Boolean, Number, null, undefined, Symbol, BigInt

👆 JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

#2 Reference (non premitive):
 Array, Objects, functions

*/

/*
❓Symbol: In JavaScript, symbols are a unique and immutable primitive type introduced in ECMAScript 6 (ES6). They are primarily used to create unique property keys for objects, which helps avoid property name collisions, especially when working with multiple libraries or components.
*/

// Symbols
const id = Symbol("123");
const newId = Symbol("123");

console.log(id == newId);

// BigInt
const bigNumber = 43562763546576897754n;

console.log(typeof bigNumber);

// Array
const arr = ["Shaktiman", "Nagraj", "Doga"];

// Object
const Obj = {
  name: "Chetan",
  age: 23,
  berojgaar: true,
};

// function
const func = function () {
  console.log("Hello World");
};

console.table([
  typeof id,
  typeof bigNumber,
  typeof arr,
  typeof Obj,
  typeof func,
]);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
// Memory in js

// Stack (for premitive datatypes) & Heap (for non premitive datatypes)

// when using premitives we get copy of the variable but in case of non-premitive we directly get the reference of the original value from the heap

let surname = "singh";
let familyName = surname;

familyName = "Samkaria";

console.log(familyName);
console.log(surname);

const user1 = {
  email: "chetan@gmail.com",
  upi: "chetan@ybl.com",
};

const user2 = user1;

user2.email = "new@gamil.com";

console.log(user1.email);
console.log(user2.email);
