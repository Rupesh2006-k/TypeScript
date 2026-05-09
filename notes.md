## types=>

1. premitive
2. refrence - objects , classes , functions , tuples , arrays

## Basic Types:-

. Number, String, Boolean
. Arrays, Tuples
. Any, Unknown, Never, Void
. Enums

---

## 📦 Tuple in TypeScript :-

Tuple ek special array hota hai jisme values ka datatype aur order fixed hota hai.

## syntax:-

🧩 Tuple Syntax in TypeScript
let variableName: [datatype1, datatype2] = [value1, value2];

---

## 🔹 any in TypeScript:-

any ka matlab → variable me kisi bhi datatype ki value store kar sakte ho ✅
🧩 Syntax
let variable: any;

---

## 🔹 unknown in TypeScript

unknown ek datatype hai jisme kisi bhi type ki value store ho sakti hai, lekin use karne se pehle uska type check karna padta hai. ✅
🧩 Syntax
let variableName: unknown;

---

## ⚡ Difference Between any and unknown

any → directly use kar sakte ho 😅
unknown → use karne se pehle type check karna padta hai ✅

---

## 🔹 void in TypeScript

void ka use un functions me hota hai jo koi value return nahi karte. ✅
🧩 Syntax
function functionName(): void {}

---

## 🔹 never in TypeScript

never un functions ke liye use hota hai jo kabhi bhi complete nahi hote ya kuch return nahi karte. ✅
🧩 Syntax
function functionName(): never {}

---

## 🔹 Enums in TypeScript
Enum ek special datatype hai jo fixed named values ka group banata hai. ✅

🧩 Syntax
enum EnumName {
   value1,
   value2,
   value3
}
