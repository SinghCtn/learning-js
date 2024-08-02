const user = {
  userName: "Chetan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();

console.log(this); // now in browser this object is window but in the node or deno as js is running stand alone this is an empty object. and this window object allows us to capture all the events.

// https://youtu.be/9ksqBa8_txM?si=VszK_f96PHbtaSZX

const fun1 = function () {
  console.log(this); // here we are getting the result object
};
fun1();

const fun2 = () => {
  console.log(this); // here we are getting {} as a result as this can't be used inside the arrow function
};
fun2();

// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) scope at the time they are defined. This means that this inside an arrow function is the same as this outside the function
