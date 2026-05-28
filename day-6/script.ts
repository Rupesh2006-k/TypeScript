// Classes and Objects ✅
// •Class definition✅
// •Constructors✅
// •this.keyword✅
// •Access modifiers (public, private, protected)✅
// •Readonty properties✅
// •Optional properties✅
// •Parameter properties✅
// •Getters and setters✅
// •Static member
// •Abstract classes and methods

// private
// class Music {
//   constructor(
//     public name: string,
//     private avilable: boolean,
//   ) {}
// }

// class Artest extends Music {
//   constructor(
//     name: string,
//     avilable: boolean,
//     public artest: string,
//   ) {
//     super(name, avilable);
//     // console.log(this.avilable)  // yaha avilable nhi hoga
//   }
// }

// let m1 = new Artest("chal chiayan chiayan", true, "Rupesh");

// protected

// class Bottle {
//   protected name: string = "Arsh";
// }

// class MakeBottle extends Bottle{
//   public material: string = "metal";

//   changeName(){
//     this.name = "some other"
//   }
// }
// let b1 = new MakeBottle()
// b1.changeName()
// console.log(b1);

// Readonly  
// getter and setter

class User {
  constructor(public name: string) {}

  get value(): string {
    return this.name;
  }

  set value(v: string) {
    this.name = v;
  }
}

let u1 = new User("rupesh");
u1.value = "j"

// static members
class Music {
static category = "Entertainment";
}


class AskWellBing{
  static sayMorning = "Good morning sir"
  static sayAfternoon = "Good Afternoon sir"
  static sayEvening = "Good Evening sir"
}
// console.log(AskWellBing.sayMorning); // ✅
// console.log(AskWellBing.sayAfternoon); // ✅
// console.log(AskWellBing.sayEvening); // ✅

// Abstact classes
abstract class Vehicle {
  constructor(public name: string) {}

  abstract start(): void; // abstract method (no body)

  stop() {
    console.log(this.name + " stopped"); // normal method
  }
}

class Car extends Vehicle {
  start(): void {
    console.log(this.name + " started with key");
  }
}

let c1 = new Car("BMW");

c1.start(); // BMW started with key
c1.stop();  // BMW stopped