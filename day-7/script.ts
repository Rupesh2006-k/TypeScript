// function ovrloading

// function check(a: string): void;
// function check(a: number): number;

// function check(a: any): any {
//   if (typeof a === "string") {
//     // console.log(a);
//   } else if (typeof a === "number") {
//     return a * 2;
//   }
// }

// generics
// generics functions

// function val<T>(a:T){
  
//     console.log(a);
// }

// val<string>("hey hello")

// generics interfaces
// interface Human<T> {
//   name: T,
//   age: number,
//   gender: T
// }

// function genInf<T>(arg: Human<T>) {
//   // console.log(arg);
//   arg
// }

// genInf({
//   name: "Rupesh",
//   age: 12,
//   gender: "male"
// });

// generics classes
// class Bottle<T> {
//   constructor(public key: T) {}
// }

// let b1 = new Bottle<string>("hey");
// // console.log(b1.key); // better output



// MODULES

import sayHello from './index.js'

// sayHello()

// Type assertion
let value:any = "12";

let strLength: number = (value as string).length;
console.log(strLength)

// non-null assertion operator

let a :null | undefined |string
a = "12"
// a!  is se sirf wahi method show hoge jo type diya gaya hai 

