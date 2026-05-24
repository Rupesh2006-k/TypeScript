import tr = require("motion/react-client");

let a: string = "rupesh";
let b: null = null;
let c: number = 12;
let d: boolean = true;
let e: undefined = undefined;
let arr: Array<number> = [1, 2, 3, 4];
let obj: object = {
  key: "value",
};

let tuple: [number, string, boolean, null, number] = [1, "S", true, null, 4];

let an: any;
an = 12;
an = "str";
an = true;
an = null;
an = undefined;

let unk: unknown;
unk = "string";
unk = 45;
unk = true;
unk = null;

if (typeof unk === "string") {
  console.log(unk.toUpperCase()); // ✅ safe
}

function checkVoid(): void {
  console.log("Test");
}

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

enum Status {
  Active,
  Inactive,
}

function checkStatus(status: Status) {
  if (status === Status.Active) {
    console.log("User is active");
  }
}

checkStatus(Status.Active);

let name = "Rupesh";

let union: string | number | null | boolean;
union = 12;
union = "harsh";
union = null;
union = true;

type persion = {
  name: string;
  age: number;
};

type user = {
  isActive: boolean;
};

type staff = persion & user;

let Z: staff = {
  name: "stiring",
  age: 12,
  isActive: true,
};

class ClassName {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class PenDrive {
  private price: number;
  protected byDate: number;

  constructor(a: number, byDate: number) {
    this.price = a;
    this.byDate = byDate;
  }

  getter() {
    console.log("the price is : ", this.price);
  }
}

class PendDriveUser extends PenDrive {
  private name: string;
  private age: number;

  constructor(name: string, age: number, price: number, byDate: number) {
    super(price, byDate); // ✅ parent constructor call

    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.byDate); // ✅ protected access allowed
  }
}
