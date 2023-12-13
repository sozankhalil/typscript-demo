// types of creating function
function add(a:number, b:number):number{
return a+b
}
console.log(add(2,4))

const sub=(num1:number,num2:number)=> num1-num2;
console.log(sub(5,4))

const multi = function (num1:number,num2:number):number{
return num1*num2
}
console.log(multi(4,5))

// optional parameter

function add2(num1:number,num2:number,num3?:number):number{
    return num3? num1 +num2+num3 :num1+num2
}
console.log(add2(1,1,1))

//required parameters
const sub2= (num1:number,num2:number,num3=5):number=> num1+num2+num3;
console.log(sub2(2,2,2))

// rest operator
function add3(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+ num3.reduce((a,b)=>a+b);
}

let numbers=[3,3,3]
console.log(add3(1,1,...numbers))
console.log(add3(1,1,...[1,2,3]))
console.log(add3(1,1,2,2,2,2))

// generic function

function getItems<T>(items:T[]):T[]{
return new Array<T>().concat(items);
}
let concatNumber= getItems([1,2,3,4,5])
let concatString= getItems(['a','b','c','d'])

// or you can specify the data type by yourself

let concatString2 = getItems<string>(['a','b','c'])






