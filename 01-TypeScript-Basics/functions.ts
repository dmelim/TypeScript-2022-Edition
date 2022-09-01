// Func return types
function addNum(n1: number, n2: number): number {
  return n1 + n2;
}

// We should let TS infer the return type.

// if a func doesen't return anything it has the return value of void
function printResult(num: number): void {
  console.log("Result: " + num);
}

// Functions as types, we can go even further and use the arrow function syntax to define the number of arguments and what the func returns

let combinedValues: Function;
let combinedValues2: (a: number, b: number) => number;

combinedValues2 = addNum;
// combinedValues2 = printResult; => Doesn't work.

console.log(combinedValues2(8, 8));

// Function types and callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
