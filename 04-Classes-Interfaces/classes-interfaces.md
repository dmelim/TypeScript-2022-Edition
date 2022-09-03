# Creating a class

> `class Classname { property: type(ts) = VALUE; construtctor(n: string) {this.name = n} }`

We can then create an object using the class:

> `new Object("The value of the property we defined")`

# Compiling the class to Javascript

ES6 and ES5 have different class structures.

# Constructor Funcs and "this"

We can also crete a method in the class. Like a normal func.
To refere to a variable inside a class we need to use the this keyword.
"This" normally refers to the method that called the method it is associated with.

> `describe(this: Classname) {}`

if we use this syntax we will lock the use of "this" to the class.

# Private and Public access modifiers.

We can use the private keyword in properties and methods. This will signal the TS compiler that we can only use the marked property/method from inside the class, for example when used by other method or property inside the class.

> `private property: type` or `private method() {}`

# Creating a class

> `Code`

# Creating a class

> `Code`

# Creating a class

> `Code`

# Creating a class

> `Code`