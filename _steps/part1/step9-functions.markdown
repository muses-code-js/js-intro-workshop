---
layout: step
number: 9
part: 1
title: Functions
permalink: step9/

#keywords:
#  - term:
#    define: 

---

A function is like a blueprint, an action that you want to do.
It takes some input variables called arguments, does some manipulation on
it and returns the output. Use the keyword 'return' to define the return value.
To create a function use the following format:

```javascript
function functionName(argument) {
    return argument * 2;
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

#### TASKS TO DO
1. Create a function to add multiple numbers. 
 * STEP 1 : Name it 'add' and pass in two arguments (num1 and num2). To pass multiple arguments into function we separate them with a comma.
 * STEP 2 : This function should return us a sum of num1 and num2.
 * STEP 3 : Call the function passing numbers 2 and 3 as arguments.
 * STEP 4 : Log the result to see it. (Console.log())
2. Create a function to subtrack numbers from each other. 
 * STEP 1 : Name it 'subtrack' and pass in two arguments (num1 and num2)
 * STEP 2 : This function should return us a subtraction of num1 and num2.
 * STEP 3 : Call the function passing numbers 5 and 1 as arguments.
 * STEP 4 : Log the result to see it. (Console.log())
3. Instead of numbers to pass as arguments, create variables that store
those numbers and pass them as an arguments to your function. Call your function and Log your result.