"use strict";
// types of creating function
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 4));
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log(multi(4, 5));
// optional parameter
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(1, 1, 1));
//required parameters
const sub2 = (num1, num2, num3 = 5) => num1 + num2 + num3;
console.log(sub2(2, 2, 2));
// rest operator
function add3(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
let numbers = [3, 3, 3];
console.log(add3(1, 1, ...numbers));
console.log(add3(1, 1, ...[1, 2, 3]));
console.log(add3(1, 1, 2, 2, 2, 2));
// generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatNumber = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd']);
// or you can specify the data type by yourself
let concatString2 = getItems(['a', 'b', 'c']);
