// primitives - number , string ,   boolean,any
// let variable:type
let n:number = 12
let str:String = "hey"
let bool:boolean = true
let an:any = "chill ka mouth  "

// console.log(n , str , bool)

// function
// parameter type
// return type (void & never)

//   function check(name:string , price:number)
//   {
//     console.log(name , price);
//   }

//   check("mouse" , 200)


// function ReturnVal():void{
//     console.log("you're welcome");
// }
// ReturnVal()


// function test():never{
//     throw Error("some thing went wrong")
//     // console.log("asdsd")
// }
// test()


// OBJECTS

type Obj={
    name:string ,
   price:number,
   brand:string,
   quantity?:number|string
}

let pro:Obj = {
    name:"chocklate",
    price:200,
    brand:"Amul",
    quantity:"5kg"
}

function checkProduct(pro:Obj){
    console.log(pro);
}
// checkProduct(pro)

// Array
 let strArray:string[] = ["a" , "b","c","D","E"]
let numArray:Array<number> = [1,2,3,4,5,6,7,8]

// Tuple
let tupleArr:[string , number] = ["rupesh" , 20]

// enum

enum CheckRole{
    admin="Rupesh",
    user="other's"
}

// interface 
// type vs interface

interface Product{
    name:string,
    quintity:number
}

interface ProductDetails extends Product{
    isAvilable:boolean,
    waight:number|string,
    exp?:boolean,
}

let objPr:ProductDetails={
    name:"ad",
    isAvilable:true,
    waight:"5kg",
    quintity:8,
    exp:false
}

// type narrowing

// function getData(data:string|number |any){
//     if(typeof data === "number") {
//     console.log(data.toFixed(2));
// }
// else if(typeof data === "string") {
//     console.log(data.toLocaleUpperCase());
// }
// }

// getData(12)


// type narroring using "in" operator

type Male = {
    noBirth: () => void;
};

type Female = {
    birth: () => void;
};

function human(person: Male | Female): void {
    if ("noBirth" in person) {
        person.noBirth();   // call function
    } else if ("birth" in person) {
        person.birth();     // call function
    } else {
        console.log("Unknown type");
    }
}

// ---- Usage ----

const maleObj: Male = {
    noBirth: () => {
        console.log("Male logic executed");
    }
};
// function calls
human(maleObj);





























