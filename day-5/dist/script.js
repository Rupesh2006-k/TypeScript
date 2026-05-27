// permitives
let a = 45;
let b = "string";
let c = null;
let d = undefined;
let e = true;
//Refrence :- arrays
let arr = [112, 23, 4, 5];
// Tuples
let str = ["A", 12, "B"];
// Enums
var Student;
(function (Student) {
    Student["name"] = "user name";
    Student["gaust"] = "gust ";
})(Student || (Student = {}));
// unknown
// let x: unknown;
// x = 12;
// x = "Str";
// x = true;
// if (typeof x === "string") {
//   console.log(x.toUpperCase());
// }
// if (typeof x === "boolean") {
//   console.log(x);
// }
// any
let x;
x = 12;
x = "Str";
x = true;
// console.log(x);
// void
// function check(): void {
//   console.log("test");
// }
// check();
function check() {
    return true;
}
// null
let z;
z = null;
// union
let un;
un = true;
un = "str";
un = 12;
// undefined
let und;
// never = never un jaghao pr use hota hai jaha pr koi value return nhi hoti hai
function abcd() {
    while (true) { }
}
abcd();
console.log("====================================");
// type interface
let inf = "Rupesh";
// type annotations
let age = 21;
let name = "Rupesh";
let isActive = true;
function annotations(params) { }
function Test(obj) {
    return console.log(obj);
}
Test({
    name: "Rupesh",
    email: "r@gmail.com",
    password: "123456",
    mobile: 1234567898,
    gender: "male",
});
function extending(obj) {
    obj;
}
let aliases = 45;
// union
let union;
union = "Str";
union = 122;
let myBoss = {
    name: "Rupesh",
    email: "rupesh@example.com",
    getData: true,
};
export {};
//# sourceMappingURL=script.js.map