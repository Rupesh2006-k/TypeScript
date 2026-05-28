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
    name;
    constructor(name) {
        this.name = name;
    }
    get value() {
        return this.name;
    }
    set value(v) {
        this.name = v;
    }
}
let u1 = new User("rupesh");
u1.value = "j";
// static members
class Music {
    static category = "Entertainment";
}
class AskWellBing {
    static sayMorning = "Good morning sir";
    static sayAfternoon = "Good Afternoon sir";
    static sayEvening = "Good Evening sir";
}
// console.log(AskWellBing.sayMorning); // ✅
// console.log(AskWellBing.sayAfternoon); // ✅
// console.log(AskWellBing.sayEvening); // ✅
// Abstact classes
class Vehicle {
    name;
    constructor(name) {
        this.name = name;
    }
    stop() {
        console.log(this.name + " stopped"); // normal method
    }
}
class Car extends Vehicle {
    start() {
        console.log(this.name + " started with key");
    }
}
let c1 = new Car("BMW");
c1.start(); // BMW started with key
c1.stop(); // BMW stopped
export {};
//# sourceMappingURL=script.js.map