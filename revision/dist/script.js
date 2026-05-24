"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tr = require("motion/react-client");
let a = "rupesh";
let b = null;
let c = 12;
let d = true;
let e = undefined;
let arr = [1, 2, 3, 4];
let obj = {
    key: "value",
};
let tuple = [1, "S", true, null, 4];
let an;
an = 12;
an = "str";
an = true;
an = null;
an = undefined;
let unk;
unk = "string";
unk = 45;
unk = true;
unk = null;
if (typeof unk === "string") {
    console.log(unk.toUpperCase()); // ✅ safe
}
function checkVoid() {
    console.log("Test");
}
function infiniteLoop() {
    while (true) {
        console.log("Running...");
    }
}
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
})(Status || (Status = {}));
function checkStatus(status) {
    if (status === Status.Active) {
        console.log("User is active");
    }
}
checkStatus(Status.Active);
let name = "Rupesh";
let union;
union = 12;
union = "harsh";
union = null;
union = true;
let Z = {
    name: "stiring",
    age: 12,
    isActive: true,
};
class ClassName {
    name;
    constructor(name) {
        this.name = name;
    }
}
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
//# sourceMappingURL=script.js.map