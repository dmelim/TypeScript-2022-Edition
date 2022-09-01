// The unknow type
let userInput: unknown;

// we can store any type of data in it. Unknown is more restrictive than any. If we use a runtime type check we can use unknown on specific variables, exp:
let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}

// Never type

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

// There are functions that never produces a return value, contrary to void that can return undefined.
// Never is more strict, it nevers returns. In this specific case throw breaks the function, stoping it
generateError("An error occurred!", 500);
