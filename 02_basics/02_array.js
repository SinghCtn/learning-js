const marvelHeros = ["thor", "ironman", "hulk"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.push(dcHeros); // [ 'thor', 'ironman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

const allHeros1 = [...marvelHeros, ...dcHeros];
console.log(allHeros);

const arr = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
console.log(arr);
const flatArray = arr.flat(Infinity);
console.log(flatArray);

console.log(Array.isArray("chetan"));
console.log(Array.from("chetan")); // [ 'c', 'h', 'e', 't', 'a', 'n' ]
console.log(Array.from({ name: "chetan" })); // [] interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
