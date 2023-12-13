interface Address {
  city: string;
  state: string;
  street: string;
  pin: number;
}

class employee5 {
  id: number;
  name: string;
  address: Address;
  constructor(id: number, name: string, address: Address) {
    (this.id = id), (this.name = name), (this.address = address);
  }
  //using method
  getNameWithAddress(): string {
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

/// optional propert by adding question mark
export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}
let user: User = { name: "sozan", id: 7, email: "sozan.civil@" };
console.log(user);

// extend interface
interface addingSalary extends User {
  salary: number;
}
let employees: addingSalary = {
  name: "sozan",
  id: 7,
  email: "sozan.civil@",
  salary: 800,
};

// adding method to interface and exporting

export interface Login {
  login(): User;
}

// array destructuring
let [user1, user2, ...restUser]: User[] = [
  { name: "sozan1", id: 1, email: "" },
  { name: "sozan2", id: 2, email: "" },
  { name: "sozan3", id: 3, email: "" },
  { name: "sozan4", id: 4, email: "" },
];
console.log(user1);
console.log(restUser);
let result = restUser.filter((user) => user.id > 3);
console.log(result);
