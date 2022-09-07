# What are generics?

An array in TS is a generic.

The normal way of declaring an array:

> ` const names: string[]`

Another valid way, but using the generic:

> ` const names: Array<string> = []`

A promise is also a generic.

# Creating a generic function

In this example, TS knows that we will produce an object, but if we try and store the result of this function TS won't know what properties it will produce.

> `function merge(objA: object, objA: object) { return Object.assign(objA, objB) }`

We can use generics to solve this:

> `function merge <T, U> (objA: T, objB: U) { return Object.assign(objA, objB) }`

We normally define the first generic type as "T", and use alphabetic order to define the rest.
TS can infer that we are merging objects. But he doesn't know what kind of object are we joining, so he has a general overview of the object type.
With generics, we give more information to TS. He still knows we will join objects, due to the assign method, but he also gets the information that despite both being objects they are different data structures. And we don't need to specify which properties they have, just that "objA" and "objB" are different. Keeping it generic.
When we call the function to use it, we can then specify the values of the generic types we used. Normally it is not needed, because TS infers it.

# Working with constraints

We can set a constraint to our generic types, using the extends keyword:

> `function merge <T extends object, U extends object> (objA: T, objB: U) { return Object.assign(objA, objB) }`

This is optional and very flexible.

# "Keyof" constraint

> `function extractAndConvert <T extends object, U extends keyof T>(obj: T, key: U) { return 'Value: ' + obj[key] } `

With this constraint, we can use in the specific case of keys in objects.

# Title

> `Code`

# Title

> `Code`

# Title

> `Code`
