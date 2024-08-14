// https://youtu.be/uMI5cNeHTOc?si=vmt1aamAQ65opeCC

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

//this above shows that a function is also object

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`${this.userName} has a score of ${this.score}`);
};

const chetan = new createUser("Chetan", 23);
const ketan = new createUser("Ketan", 21);

// here the new keyword is the reason that the prototype is added to object otherwise if created without new the prototypes will not be added
chetan.increment();
chetan.printMe();
console.log(chetan);
console.log(ketan);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
