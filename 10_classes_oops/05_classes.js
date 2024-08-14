// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chetan = new User("chetan", "chetan@google.com", "124");
// console.log(chetan.changeUserName());

// Behind the sceenes
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const chetan = new User("chetan", "chetan@google.com", "124");
console.log(chetan.encryptPassword());
console.log(chetan.changeUserName());
