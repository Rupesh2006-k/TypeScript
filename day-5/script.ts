// permitives

let a: number = 45;
let b: string = "string";
let c: null = null;
let d: undefined = undefined;
let e: boolean = true;

//Refrence :- arrays
let arr: number[] = [112, 23, 4, 5];

// Tuples

let str: [string, number, string] = ["A", 12, "B"];

// Enums

enum Student {
  name = "user name",
  gaust = "gust ",
}

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

function check(): boolean {
  return true;
}

// null

let z: null;
z = null;

// union
let un: string | number | boolean;

un = true;
un = "str";
un = 12;

// undefined

let und: undefined;

// never = never un jaghao pr use hota hai jaha pr koi value return nhi hoti hai

function abcd(): never {
  while (true) {}
}
abcd();
console.log("====================================");

// type interface

let inf = "Rupesh";

// type annotations
let age: number = 21;
let name: string = "Rupesh";
let isActive: boolean = true;

function annotations(params: string): void {}

// Interfaces and Type Aliases
// • Defining interfaces
// • Using interfaces to define object shapes
// • Extending interfaces
// • Type aliases
// • Intersection types

// ------------------------------------------------------

// • Defining interfaces
// • Using interfaces to define object shapes
interface User {
  name: string;
  email: string;
  password: string;
  mobile: number;
  gender?: string; // ? is used for the optional passing the value;
}

function Test(obj: User) {
  return console.log(obj);
}

Test({
  name: "Rupesh",
  email: "r@gmail.com",
  password: "123456",
  mobile: 1234567898,
  gender: "male",
});

// • Extending interfaces

interface Users {
  name: string;
  email: string;
  password: string;
}

interface Admin extends Users {
  role: String;
  isVerify: boolean;
}

function extending(obj: Admin) {
  obj;
}

// • Type aliases

type valTypes = number;

let aliases: valTypes = 45;

// union

let union: string | null | number;

union = "Str";
union = 122;

// intersection type

type user = {
  name: string;
  email: string;
};

type admin = {
  getData: boolean;
};
type boss = user & admin;

let myBoss: boss = {
  name: "Rupesh",
  email: "rupesh@example.com",
  getData: true,
};

