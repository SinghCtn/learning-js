// Singleton
// Object.create

// object literals

const mySym1 = Symbol("key1");
// now if we want to use symbol as key then we need to use ["...symbol name..."]as syntax.

const jsUser = {
  name: "Chetan",
  "full name": "Chetan Singh",
  age: 23,
  [mySym1]: "key2",
  location: "H.P.",
  email: "chetan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // we can only access the key string using this way
console.log(jsUser[mySym1]);

console.log(jsUser);
/*
{
    name: 'Chetan',
    'full name': 'Chetan Singh',
    age: 23,
    location: 'H.P.',
    email: 'chetan@gmail.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'key2'   (we can see that if we define symbol inside [] as key then it is treated as a symbol otherwise it will be treated as a normal string key)
}
*/

jsUser.email = "chetan@google.com";
console.log(jsUser.email);

// Object.freeze(jsUser); // this function freezes the object so that no further updates could be done
// jsUser.email = "chetan@adobe.com";
// console.log(jsUser.email);

jsUser.greetingsOne = function () {
  console.log("hello world");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this["full name"]}`); // when we want to access the values from the same variable we use this keyword
};

console.log(jsUser.greetingsOne()); // hello world
console.log(jsUser.greetingsOne); // [Function (anonymous)]  indecates that function is not been executed but we have the reference of the function.
console.log(jsUser.greetingTwo()); // Hello JS user, Chetan Singh
