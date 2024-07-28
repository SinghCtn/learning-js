let score1 = "33";
let score2 = "33asc";
console.log(typeof score1);
console.log(typeof score2);

let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber1);
console.log(valueInNumber1);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); //NaN

// "33" => 33
// "33asc" => NaN
// true => 1  ,  false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

console.log(Boolean(isLoggedIn));

console.log(Boolean(0));

console.log(Boolean(32));
console.log(Boolean(""));
console.log(Boolean(" "));
