# Intersection Types

Intersection types are the result of joining 2 created types.

> `type intersectedType = Type1 & Type2`

# Type Guards

Type guards use if statements to verify the type of variables. In case the vars are of a certain type a specific code will occur.
For example, a function that can add 2 numbers or 2 strings, would get the following body:

> `if(typeof a === "string" || typof b === "string") {return a.toString() + b.toString()}`

We can also use Type guards differently. To check if we defined a certain property in custom types unions.

> ` if ("property" in customType) {console.log(customType.property)}`

Inside the condition, the property name needs to be in "".

We can also do type guards in classes. Using this keyword:

> `instanceof`

This will check if the object we are checking is derived from the class.

# Discriminated Unions

We can define a property, as a literal type, inside an interface. Then if we make a union of 2 of these interfaces we can use this property to check which object is which. And what properties/methods are available.

# Type Casting

Better see a [tutorial](https://www.typescripttutorial.net/typescript-tutorial/type-casting/).

# Index properties

We can add this to an interface for example. It means we don't know yet which name the var will have, or which type it will be. It works as a placeholder. The first string states in which format the key of the property must be. The second is the type that the key holds.

> `[prop:string]: string`

# Function Overload

Func overload in case the args are numbers.

> `function name(a: number, b: number): number;`

Func overload in case the args are strings.

> `function sameName(a: string, b: string): string;`

Normal func call.

> `function sameName(a: unionType, b: unionType){};`

There is an unlimited number of overloads we can make.

# Optional Chaining

Data normally is nested inside objects.
In case we don't know if a property exists we can use a question mark in front of it to check if it exists.

> `object?.property?.nestedProperty`

In this example, we can see Opt. Chaining in action.

# Nullish Coalescing (NC)

Used in case we don't know for sure if the data is null/undefined or defined.

The symbol for nullish coalescing is a double question mark(??).

> `const data = userInput ?? 'DEFAULT`

Even if the value comes back empty (""), the NC will return it. Only in case, it's null or undefined will it return the "default" case.
