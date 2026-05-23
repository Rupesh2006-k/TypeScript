// // Type Aliases
// // 1) premitive aliases
// type num = number;
// type str = string;
// type nu = null;
// let a: num = 12;
// console.log(typeof a, a);
// // 2) object aliases
// type human = {
//   name: string;
//   age: number;
//   email: string;
//   isVarify: boolean;
// };
// let obj: human = {
//   age: 45,
//   name: "rupesh",
//   isVarify: true,
//   email: "test@test.com",
// };
// console.log(obj)
// --------------------------------------------------------------
// --------------------------------------------------------------
// Interfaces
// interface User {
//   name: string;
//   age: number;
//   isVarify: boolean;
// }
// function check(user: User) {
//   ((user.name = "rupesh"), (user.age = 12), (user.isVarify = true));
// }
// let userData: User = {
//   name: "Rupesh",
//   age: 21,
//   isVarify: false,
// };
// check(userData);
// interface employee {
//   name: string;
//   age: number;
// }
// interface staff extends employee {
//   id: number | string;
// }
// function checks(user: staff) {
//   ((user.age = 365), (user.id = "101"), (user.name = "rupesh"));
// }
// let u1: staff = {
//   name: "test",
//   age: 12,
//   id: "2",
// };
// console.log(u1);
// --------------------------------------------------------------
// --------------------------------------------------------------
// Object Oriented Programing
// class AirConditioner {
//   temperature = 10;
//   turnOn(name: string) {
//     console.log(`Ac tuning on .. ${name}`);
//   }
//   turnOff(name: string) {
//     console.log(`Ac tuning off .. ${name}`);
//   }
//   increase() {
//     this.temperature++;
//     console.log(this.temperature);
//   }
//   decrease() {
//     this.temperature--;
//     console.log(this.temperature);
//   }
// }
// let ac1= new AirConditioner();
// let ac2 = new AirConditioner();
// ac1.increase();
// ac1.decrease();
// ac1.turnOn("AC1")
// ac2.turnOn("AC2")
// class Earbuds {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
// let e1 = new Earbuds("Apple" , 25000)
// let e2 = new Earbuds("Mi" , 2500)
// console.log(e1);
// console.log(e2);
// class Bottle {
//   constructor(public shape: string) {
//     this.shape = shape;
//   }
// }
// let b1 = new Bottle("circle")
// console.log(b1);
class PenDrive {
    price;
    byDate;
    constructor(a, byDate) {
        this.price = a;
        this.byDate = byDate;
    }
    getter() {
        console.log("the price is : ", this.price);
    }
}
class PendDriveUser extends PenDrive {
    name;
    age;
    constructor(name, age, price, byDate) {
        super(price, byDate); // ✅ parent constructor call
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.byDate); // ✅ protected access allowed
    }
}
let val = new PendDriveUser("rupesh", 20, 50, 24);
val.price = 5000;
console.log(val);
export {};
// 2:21
//# sourceMappingURL=script.js.map