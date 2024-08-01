console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); //false
console.log(null == 0); //false, the == doesnot convert null but other operators are converting
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// in js == (equality check) works differently then the comparison's

// strinct check
// ===

console.log("2" === 2);
