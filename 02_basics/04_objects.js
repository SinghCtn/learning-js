// here we are making objects singleton or declaring them with the help of constructor

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "restro";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "chetan@gamil.com",
  fullName: {
    userFullName: {
      firstName: "Chetan",
      lastName: "Singh",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// const obj3 = Object.assign({}, obj1, obj2); // here the first argument act's as the target in which all the other sources are merged in so it's not important but is a good practice
// console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

const obj3 = { ...obj1, ...obj2 };

const users = [
  {
    id: 1,
    email: "user@gmail.com",
  },
  {
    id: 1,
    email: "user@gmail.com",
  },
  {
    id: 1,
    email: "user@gmail.com",
  },
];

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  course: "js in hindi",
  price: 999,
  courseInstructor: "hitesh choudhary",
};

const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);
