class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const chetan = new Teacher("chetan", "chetan@google.com", "123");
chetan.addCourse();
chetan.logMe();
