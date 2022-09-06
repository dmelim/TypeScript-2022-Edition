# A first interface

> `interface Person{name:string; age:number;} method(phrase:string):void;`

An interface doesn't define values, only types. But it can have methods.

We can use it like this:

> `let user1: Person; user1={name:"Max", age: 30, greet(phrase:string){console.log(phrase + ' ' + this.name)}}`

we can then call the method like this:

> `user1.greet('Hi there - I am')`

# Using interfaces with classes

Interfaces are used to describe the structure of an object.

It can be used as a way to make classes follow a certain structure. By using the keyword `implements`.

> `class Name implements InterfaceName{}`

We need to implement everything specified by the interface but we can add new methods or properties.

# ReadOnly

> `readonly property: type `

# Extending Interfaces

> `interface NewInterface extends OldInterface {}`

We can extend interfaces into other interfaces. We can even inherit from multiple interfaces. Contrary to classes.

# Interfaces as Function Types.

We can create interfaces as types for functions. Ex:

With types:

> `type Func = (a: type, b:type) => return type`

With interfaces:

> `interface Func {(a: type, b: type): return type } `

# Optional Parameters and Properties

We can mark properties and methods as optional, with a question mark, for example:

> `property?: string `

# Interface compilation

Interfaces don't compile into nothing. There is no "translation" in JS. Only used during TS dev.
