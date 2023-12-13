"use strict";
let fname;
fname = "sozan";
let newName = fname.toUpperCase();
console.log(newName);
let age;
age = 10;
console.log(age);
let db = "25";
console.log(db + 5);
let result = parseInt(db);
console.log(result + 5);
let isValid = true;
console.log(isValid);
//Array
let emList;
emList = ["sdd", "dfd", "qas"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7];
let results = numList.filter((num) => num > 2);
let number2 = numList.find((num) => num === 5);
console.log(results);
console.log(number2);
// reduce array
let sumResult = numList.reduce((accu, num) => accu + num);
console.log(sumResult);
let c = 0 /* Color.Red */;
//tuple data types
// funtion in typescript
