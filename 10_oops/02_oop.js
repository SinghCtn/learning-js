// object literal

const user = {
  userName: "Chetan Singh",
  loginCount: 8,
  isSignedIn: false,

  getUserDetails: function () {
    console.log(`${this.userName} is the name of the user`);
  },
};

user.getUserDetails();

// Constructor function

function User(userName, loginCount, isSignedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isSignedIn = isSignedIn;

  return this;
}

const user1 = new User("Chetan Singh", 19, false);
const user2 = new User("Kitu", 12, true);

console.log(user1);
console.log(user2);

console.log(user1 instanceof User);
