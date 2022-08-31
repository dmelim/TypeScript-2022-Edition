// Basic TS types.

//TS numbers example, and how to state types

function add(n1: number, n2: number): number {
  return n1 + n2;
}

const number1 = 5;

const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// Working with Numbers, Strings, booleans
// same as JS. To declare type just do as above.

// Type assignment and inference
/* If it's a const, it assignes the number to it. If let or var it assigns the type. 
We only need to declare the type directly if we dont assign a value to it on initialization. 
Or if we want a union type or something like that.
*/
