function User(email, password) {
  this._email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const chetan = new User("c@chetan.ai", "123");
console.log(chetan.email);
