let date = new Date();

console.log(date);
console.log(date.toString());

let date1 = new Date(2024, 0, 21);
console.log(date1.toDateString());

let date2 = new Date(2024, 0, 21, 3, 1);
console.log(date2.toLocaleString());

let date3 = new Date("01-27-2024");
console.log(date3.toDateString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(date3.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
