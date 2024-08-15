console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
// as we can see in the above responce the writeable is false which is preventing us form changing teh value of PI

//  we can also add these properties for our selves also

const chai = {
  name: "Ginger chai",
  price: "30",
  isAvailable: true,
};
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'Ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} 
*/
// here above we can see that the values are true for writeable and enumerable
// we can also define these properties.

for (const [key, value] of Object.entries(chai)) {
  console.log(`${key}: ${value}`);
}
/*
name: Ginger chai
price: 30
isAvailable: true
*/
//now everything is iterable as enumerable is true but if we remove it we can see what happens

Object.defineProperty(chai, "name", { writable: false, enumerable: false });

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'Ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (const [key, value] of Object.entries(chai)) {
  console.log(`${key}: ${value}`);
}
/*price: 30
isAvailable: true*/
// as the enumerable was false the name was not read
