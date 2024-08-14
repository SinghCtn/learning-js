// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

const promiseOne = new Promise(function (resolve, reject) {
  // Handle async tasks
  // DBCalls, cryptography, networks

  setTimeout(function () {
    console.log("async task complete.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ user: "Chetan", Password: "gutsy" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const err = true;
    if (!err) {
      resolve({ userName: "Chetan", pass: "123" });
    } else {
      reject("ERROR!!! Something went wrong.");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then(function (userName) {
    // here the returned value from previous then is taken as an argument
    console.log(userName);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const err = false;
    if (!err) {
      resolve({ userName: "javascript", pass: "123" });
    } else {
      reject("ERROR!!! JS went wrong.");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("E: something went wrong");
  });
