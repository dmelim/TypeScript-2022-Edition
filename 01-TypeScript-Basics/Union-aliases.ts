// Union Types

function combine(input1: number | string, input2: number | string) {
  // TS doesen't see inside the union types we defined, so it gives an error if we try to add these to values, to work around it:
  //return input1 + input2;
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// Literal Types
// It enables us to define a certain type with a name defined by us. It then can be used elsewhere.

let resultConversion: "as-number" | "as-text";

// Type Aliases / Custom Types

type Combinable = number | string;

// we then can use this type aliases instead of the union type. We can save some code and repeat less, making it more reusable.
