class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `123${this.username}`;
  }
}

const chetan = new User("chetan");
// console.log(chetan.createId());

class Teacher extends User {
  constructor(email, usename) {
    super(usename);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
console.log();
