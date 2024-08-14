// https://youtu.be/-owpuf4lbyU?si=Xaal7n7IsgWE87Ye

function setUserName(userName) {
  // complex calculations
  this.userName = userName;
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);

  this.email = email;
  this.password = password;
}

const chetan = new createUser("Chetan", "chetan@fb.com", "124");
console.log(chetan);

// call is used to pass the current execution context to the another funtion
// above the this is the execution context that is passed to the setuserName and there the passed this is used
