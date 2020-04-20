---
layout: step
number: 6
part: 1
title: Functions
permalink: step6/

#keywords:
#  - term:
#    define:

---

A function is a type of procedure or routine. While some of the functions only perform some operations, some of them return a value after the operations as well.
Functions can take input variables called `arguments` to perform the action that is defined inside of the function.
To create a function use the following format:

```javascript
function functionName(argument) {
    // Performing an operation
    var double = argument * 2;
    // Returning a value
    return double;
};
```

This function will take one argument and return the argument multiplied by 2.
Our function won't actually run unless we 'call' it.
To 'call' the function we write:
```javascript
functionName(10);
```

Now we will call our function with argument that is 10. And our function
will return us 20. To see what our function returns us we can console.log
it, for example:
```javascript
console.log(functionName(10));
```

----

### Tasks
1. Create a function to add multiple numbers.
 * Name it `add` and pass in two arguments (num1 and num2). To pass multiple arguments into function we separate them with a comma.
 * This function should return us a sum of num1 and num2.
 * Call the function passing 2 numbers that you prefer as arguments.
 * Log the result to see it. (`console.log()`)
2. Create a function to subtract numbers from each other.
 * Name it `subtract` and pass in two arguments (num1 and num2)
 * This function should return us a subtraction of num1 and num2.
 * Call the function passing 2 numbers that you prefer as arguments.
 * Log the result to see it. (`console.log()`)
3. Instead of numbers to pass as arguments, create variables that store
those numbers and pass them as an arguments to your function. Call your function and log your result.
