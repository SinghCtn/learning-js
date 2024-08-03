// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthly values

// "0", "false", " ", [], {}, function() {}

// check if an array and object are empty

const arr = [];

if (arr.length === 0) console.log("Empty array");

const obj = {};

if (Object.keys(obj).length === 0) console.log("Empty object");

console.log(false == 0);
console.log(false == "");
console.log(0 == "");

// Nullish coalescing Operator (??)

// The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.
// If a is null or undefined, result will be b.
// If a has any other value (even falsy values like 0, NaN, or an empty string), result will be a.
