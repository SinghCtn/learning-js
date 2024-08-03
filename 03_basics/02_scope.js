let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a); // 300
// console.log(b); tey are out of scope
console.log(c); // 30

function one() {
  const userName = "Chetan";

  function two() {
    const website = "Github";

    console.log(userName);
  }
}

// ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷ INTERESTING ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷

console.log(addOne(1));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(2));

// const addTwo = function (num) {
//   return num + 2;
// };

// now the first will run just fine but the second one would not as it's being declared as variable and there is problem with hoisting (rules that allows use of functions before declaration)
