// let a: number = 12;
// let b: string = " 12";
// let c: boolean = true;
// let d: null = null;

// let arr: Array<number> = [1, 2, 3, 4];

// let tuple:[number , string , boolean , null] = [1 , "dgf" , true , null]

// let typeAny:any
// typeAny = 12
// typeAny =" 12"
// typeAny = null
// typeAny = undefined
// typeAny = true

// let un:unknown
// un = 12
// un = null

// function infiniteRun():never {
//   let o = 0;
//   while (true) {
//     console.log("run infinite loop :", o);
//     o++;
//   }
// }

// infiniteRun();
// console.log("test");

// function typeVoidCheck():void {
//   console.log("check void");
// }
// console.log(typeVoidCheck());

enum Direction {
  left = "LEFT",
  right = "RIGHT",
}

console.log(Direction.left);
console.log(Direction.right);
