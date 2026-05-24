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

```tsx
let variableName: [datatype1, datatype2] = [value1, value2];
```

---

## 🔹 any in TypeScript:-

any ka matlab → variable me kisi bhi datatype ki value store kar sakte ho ✅
🧩 Syntax
let variable: any;

---

## 🔹 unknown in TypeScript

unknown ek datatype hai jisme kisi bhi type ki value store ho sakti hai, lekin use karne se pehle uska type check karna padta hai. ✅
🧩 Syntax

```tsx
let variableName: unknown;
```

---

## ⚡ Difference Between any and unknown

any → directly use kar sakte ho 😅
unknown → use karne se pehle type check karna padta hai ✅

---

## 🔹 void in TypeScript

void ka use un functions me hota hai jo koi value return nahi karte. ✅
🧩 Syntax

```tsx
function functionName(): void {}
```

---

## 🔹 never in TypeScript

never un functions ke liye use hota hai jo kabhi bhi complete nahi hote ya kuch return nahi karte. ✅
🧩 Syntax
```tsx
function functionName(): never {}
```

---

## 🔹 Enums in TypeScript

Enum ek special datatype hai jo fixed named values ka group banata hai. ✅

🧩 Syntax

```tsx
enum EnumName {
  value1,
  value2,
  value3,
}
```

---

## 🔹 Type Inference in TypeScript

Type Inference ka matlab hai TypeScript automatically variable ka datatype samajh leta hai. ✅
. Matlab hume type likhne ki zarurat nahi padti.
🧩 Example

```tsx
let name = "Rupesh";
```

---

## 🔹 Union in TypeScript

Union ka matlab hai ek variable me ek se jyada datatypes allow karna. ✅

🧩 Syntax

```tsx
let variable: type1 | type2;
```

---

## Type Inference in TypeScript

Type Inference is a feature in TypeScript where the compiler automatically detects the data type of a variable based on its value, without explicitly defining the type.

Example

```tsx
let name = "Rupesh";
```

## 👉 TypeScript automatically infers name as string

## Union Type in TypeScript

Union Type ka matlab hai ki ek variable multiple types hold kar sakta hai.
👉 Isme | (pipe operator) use hota hai.
Example

```tsx
let id: string | number;
id = 101;
id = "TS101";
```

👉 Yaha id ya to number ho sakta hai ya string

---

## Intersection Type in TypeScript

Intersection Type ka matlab hai ki hum multiple types ko combine karke ek naya type banate hain, jisme sabhi types ke properties honge.

👉 Isme & (AND operator) use hota hai

Basic Example

```tsx
type Person = {
  name: string;
};

type Employee = {
  empId: number;
};

type Staff = Person & Employee;

let user: Staff = {
  name: "Rupesh",
  empId: 101,
};
```

👉 Staff me Person + Employee dono ke properties aagaye

---

## Type Aliases

Type Alias ka matlab hai kisi type ko ek custom naam dena, taaki usse baar-baar reuse kiya ja sake.

👉 type keyword use hota hai

Example

```tsx
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Rupesh",
  age: 21,
};
```

## 👉 Ab baar-baar object type likhne ki zarurat nahi

## Class

> **Class** ek blueprint hoti hai jisse hum objects banate hain. Isme properties (data) aur methods (functions) define hote hain.

---

## Basic Syntax

```tsx
class ClassName {
  property: type;
  constructor(value: type) {
    this.property = value;
  }
  method() {
    // logic
  }
}
```

## Access Specifers

### 1️⃣ Public

> **Public** members class ke andar bhi use ho sakte hain aur class ke bahar bhi access kiye ja sakte hain using object (instance).

---

### 2️⃣ Private

> **Private** members sirf class ke andar hi access ho sakte hain. Unhe class ke bahar directly access nahi kiya ja sakta.

---

### 3️⃣ Protected

> **Protected** matlab class ke andar use ho sakta hai aur uski **child class (inheritance)** me bhi access ho sakta hai, lekin class ke bahar direct access nahi kar sakte.

---

# `super` Keyword

> **`super`** ka use parent (base) class ke constructor ya methods ko call karne ke liye hota hai.

✅ Example

```tsx
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
```

---

## readonly, Getter & Setter in TypeScript 
🔹 1. readonly
Definition

readonly property ko sirf initialization (constructor) ke time set kiya ja sakta hai, baad me change nahi kar sakte.

Example

```tsx
class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

let u = new User(1);
// u.id = 2; ❌ Error (readonly)
```

🔹 2. Getter
Definition

Getter ek method hota hai jo property ki value read (get) karne ke liye use hota hai.

Example

```tsx
class User {
  private name: string = "Rupesh";

  get getName() {
    return this.name;
  }
}

let u = new User();
console.log(u.getName); // ✅ call without ()
```

🔹 3. Setter
Definition

Setter ek method hota hai jo property ki value update (set) karne ke liye use hota hai.

Example

```tsx
class User {
  private name: string = "";

  set setName(value: string) {
    this.name = value;
  }

  get getName() {
    return this.name;
  }
}

let u = new User();
u.setName = "Rupesh"; // ✅ set value
console.log(u.getName);
```

---

# Type Assertion in TypeScript

> **Type Assertion** ka use tab hota hai jab hum TypeScript ko manually batate hain ki kisi value ka type kya hai, jab compiler khud sure nahi hota.

### 🔹 Example (DOM)

```tsx
let input = document.getElementById("username") as HTMLInputElement;
input.value = "Rupesh";
```

👉 TS ko nahi pata hota element ka type → hum manually batate hain
