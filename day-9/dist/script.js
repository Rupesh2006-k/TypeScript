// primitives - number , string ,   boolean,any
// let variable:type
let n = 12;
let str = "hey";
let bool = true;
let an = "chill ka mouth  ";
let pro = {
    name: "chocklate",
    price: 200,
    brand: "Amul",
    quantity: "5kg"
};
function checkProduct(pro) {
    console.log(pro);
}
// checkProduct(pro)
// Array
let strArray = ["a", "b", "c", "D", "E"];
let numArray = [1, 2, 3, 4, 5, 6, 7, 8];
// Tuple
let tupleArr = ["rupesh", 20];
// enum
var CheckRole;
(function (CheckRole) {
    CheckRole["admin"] = "Rupesh";
    CheckRole["user"] = "other's";
})(CheckRole || (CheckRole = {}));
let objPr = {
    name: "ad",
    isAvilable: true,
    waight: "5kg",
    quintity: 8,
    exp: false
};
function human(person) {
    if ("noBirth" in person) {
        person.noBirth(); // call function
    }
    else if ("birth" in person) {
        person.birth(); // call function
    }
    else {
        console.log("Unknown type");
    }
}
// ---- Usage ----
const maleObj = {
    noBirth: () => {
        console.log("Male logic executed");
    }
};
// function calls
// human(maleObj);
// generics
function generics(data) {
    console.log(data);
}
generics("hey");
generics(12);
generics(true);
export {};
//# sourceMappingURL=script.js.map