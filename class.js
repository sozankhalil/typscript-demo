"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class employee {
}
let john = new employee();
john.id = 2;
john.name = 'john';
john.address = 'highway 71';
console.log(john);
// using constructor
class employee2 {
    constructor(id, name, address) {
        this.id = id,
            this.name = name,
            this.address = address;
    }
    //using method
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let sozan = new employee2(3, 'sozan', 'highway 50');
let sakar = new employee2(4, 'sakar', 'highway 500');
let dana = new employee2(5, 'dana', 'highway 501');
let ahmed = new employee2(7, 'ahmed', 'highway 40');
let zanyar = new employee2(8, 'zanyar', 'highway 25');
console.log(dana);
// using method
let address = sozan.getNameWithAddress();
console.log(address);
// private variable in class
class employee3 {
    constructor(id, name, address) {
        this.id = id,
            this.name = name,
            this.address = address;
    }
    //using method
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
    static getEmplyeeCount() {
        return 50;
    }
}
let sozan2 = new employee3(4, 'hh', 'aaaa');
//we can not acess id and name in this instance
// protected is avilable only inside a class and extended class but not in instances
class manager extends employee3 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
//we have this function in the parent and working for the extended as well
let mike = new manager(2, 'ff', 'dfff');
console.log(mike.getNameWithAddress());
//using static is something that can be accessed through class name
console.log(employee3.getEmplyeeCount());
// using getter and setter
class employee4 {
    constructor(id, name, address) {
        this.id = id,
            this.name = name,
            this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
let steve = new employee4(500, 'ss', 'aaa');
console.log(steve.empId);
//you can also change the value
steve.empId = 100;
console.log(steve.empId);
//importing login interface and implementing
class employee22 {
    constructor(id, name, address) {
        this.id = id,
            this.name = name,
            this.address = address;
    }
    //using method
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
    login() {
        return { name: 'sozan', id: 7, email: 'sozan.civil@' };
    }
}
