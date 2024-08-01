const arr = [1, "chetan", true];
console.log(arr);

const arr1 = new Array(0, 1, 2, 3, 4, 5, 6);

const sliceArray = arr1.slice(1, 3);
console.log(sliceArray);
console.log("A", arr1);

const spliceArray = arr1.splice(1, 3);
console.log(spliceArray);
console.log("B", arr1);
