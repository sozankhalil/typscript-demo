"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class employee5 {
    constructor(id, name, address) {
        (this.id = id), (this.name = name), (this.address = address);
    }
    //using method
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let zana = new employee5(8, "zanyar", {
    city: "suly",
    state: "aa",
    street: "ddd",
    pin: 5,
});
console.log(zana);
let user = { name: "sozan", id: 7, email: "sozan.civil@" };
console.log(user);
let employees = {
    name: "sozan",
    id: 7,
    email: "sozan.civil@",
    salary: 800,
};
// array destructuring
let [user1, user2, ...restUser] = [
    { name: "sozan1", id: 1, email: "" },
    { name: "sozan2", id: 2, email: "" },
    { name: "sozan3", id: 3, email: "" },
    { name: "sozan4", id: 4, email: "" },
];
console.log(user1);
console.log(restUser);
let result = restUser.filter((user) => user.id > 3);
console.log(result);
