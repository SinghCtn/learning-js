const codding = ["C++", "Java", "Python", "Java Script"];

codding.forEach(function (item) {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

codding.forEach(printMe);
// this will work but we need not to call the function and only give the reference.

// also for each has access of the index and the complete array

codding.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
/*
C++ 0 [ 'C++', 'Java', 'Python', 'Java Script' ]
Java 1 [ 'C++', 'Java', 'Python', 'Java Script' ]
Python 2 [ 'C++', 'Java', 'Python', 'Java Script' ]
Java Script 3 [ 'C++', 'Java', 'Python', 'Java Script' ]
*/
