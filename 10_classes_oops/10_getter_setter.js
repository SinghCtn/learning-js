// https://youtu.be/t6vLhF-iSxQ?si=gS41BZmZUpxF-BGz

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const chetan = new User("c@chetan.ai", "123");
console.log(chetan.password);
