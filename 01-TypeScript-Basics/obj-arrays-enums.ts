// TypeScript objects and object types.

const person = {
  name: "Pedro",
  age: 89,
};

console.log(person.name);

// Object types are like JS objects, but specify what is inside an object and their types, declared like this:

const person2: {
  name: string;
  age: number;
} = {
  name: "Pedro",
  age: 89,
};
/* 
The ; is needed at the end, contrary to the , at the object declaration.
1But the best thing to do is to let TS infere the type objects. 
*/

// Arrays example, infered
const person3 = {
  name: "Pedro",
  age: 89,
  hobbies: ["Sports", "Cooking"],
};

// Arrays example, explicit

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Cinema"];

/* If we init the array with a certain type we cant put other types in the array */

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase());
}

/* In this for loop we can see that TS knows that hobby will be a string, 
because person3.hobbies is an array of strings, so it offers auto complete methods that we can use on strings.
It also shows an error if we try to use a method that we cant use on that type 
*/

// Working with tuples(they dont exist in vanilla JS), they have exactly 2 elements, the first is a numeric value and the second is a string

const person4 = {
  name: "Pedro",
  age: 89,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/* TS considers that it is a Type union of string and number, so we need to overwrite the types */

const person5: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Pedro",
  age: 89,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/* We declare a tuple like stated. ([number, string]) This type also has auto complete and support for it */

// The Enum type, only in TS

// How to declare, we start the enum name with an upper case. It's normal to see the names inside all uper case but it's not demanded.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// This data types associated a description, in this case a Role to a number

const person6 = {
  name: "Pedro",
  age: 89,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// The last type is ANY, it can be used for anything. In TS it needs to be avoided. Because it makes the TS advantages useless.
//
