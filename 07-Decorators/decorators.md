# Class Decorators

Decorators are all about classes.

Decorators are funcs, normally they are named with a capital letter.

Decorators run when classes are defined.

> `function Logger(constructor: Function) { console.log('Logging...'); console.log(constructor) }`

> `@Logger` and then the class right after the decorator.

# Decorator Factories

Decorator factories follow the same conventions that normal ones do. The big difference is that the decorator is a function that is inside another function. This is useful because we can pass other arguments to the first function, and the class constructor only in the second function.

> `function Logger(logString: string) { return function(constructor: Function) {console.log(logString); console.log(constructor)} }`

## Other useful information

A good example of this is Angular, which uses some advanced decorators.

It is possible to add multiple decorators.

# Property Decorators

A decorator function for a property needs to receive 2 args, one is the target structure the other is the property name.

> `function Logger(target: any, propertyName: string | Symbol) { console.log('Logging...'); console.log(target, propertyName) }`

Then the decorator is placed before the property we want to target.

# Accessor & Parameter Decorator

Better see the [documentation](https://www.typescriptlang.org/docs/handbook/decorators.html).

# Changing a class in a decorator

We can change a class by changing the return to a class that extends the constructor.

# Useful Resources and Links

> https://www.typescriptlang.org/docs/handbook/decorators.html
