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


// sayHello()

// Type assertion
let value:any = "12";

let strLength: number = (value as string).length;
// console.log(strLength)

// non-null assertion operator

let a :null | undefined |string
a = "12"
// a!  is se sirf wahi method show hoge jo type diya gaya hai 

// Type Guards
// method 1
function TypeNarrowing(arg:string | number ){
    if(typeof arg  === "string"){
        return "string"
    }
   else if(typeof arg  === "number"){
    return "number"
   }
   else {
    return "Sorry"
   }
}

let n = TypeNarrowing(12)
let s = TypeNarrowing("hey")
// console.log(s);
// console.log(n);

// method 2
class Tv {
  switchOnTv() {
    console.log("Switch on the tv");
  }
}

class Ac {
  switchOnAc() {
    console.log("Switch on the ac");
  }
}

let tv = new Tv();
let ac = new Ac();

function check(params: Tv | Ac): string {
  if (params instanceof Tv) {
    params.switchOnTv(); // method call
    return "TV";
  } else if (params instanceof Ac) {
    params.switchOnAc(); // method call
    return "AC";
  }

  return "Unknown"; // safety
}

// function calls
console.log(check(tv)); // TV
console.log(check(ac)); // AC