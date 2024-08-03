const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter
const filteredNums = myNums.filter((num) => num > 4);

console.log(filteredNums);

// map
const mappedNums = myNums.map((num) => num + 10);

console.log(mappedNums);

// reduce

/*

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

*/

const numArr = [1, 2, 3];

const reducedNums = numArr.reduce((acc, curr) => {
  console.log(acc);
  return acc + curr;
}, 0);
console.log(reducedNums);
