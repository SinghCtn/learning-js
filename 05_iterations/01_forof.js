// for of loop

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}

for (const char of "Chetan") {
  console.log(char);
}

// Maps
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const key of map) {
  console.log(key);
}

/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */

for (const [key, value] of map) {
  console.log(key, ": ", value);
}
/*
IN :  India
USA :  United States of America
Fr :  France
*/

const obj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const game of obj) {
//   console.log(game);
// }

// ‼️ objects are not iterable
