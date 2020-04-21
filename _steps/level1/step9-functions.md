---
layout: step
number: 9
level: 1
title: Functions
permalink: step9/
---

A function is a set of instructions that performs the same task every time
we call it. It takes input in the form of `arguments`, calculates a result
based on the input and returns the result as output.

To create a function use the following format:

```javascript
function functionName(argumentName) {
return argumentName * 2;
};
```

This function will take one 'argument' and 'return' the argument multiplied
by 2. An argument works like a variable, if something is passed to the
function the argument contains that value, and if nothing is passed then
the argument is undefined.

Our function won't actually run unless we 'call' it.
To 'call' the function we write parentheses at the end, enclosing any
arguments the function asks for:

`functionName(10);`

This will call our function with the argument 10. And our function
will return 20. To see what our function returns we can console.log it,
for Answer:

`console.log(functionName(10));`

This takes the result of our function and sends it to console.log.

##### Tip: 
The keyword 'return' is used to define the return value, we can do
things before the line with 'return' on it, but after we 'return' the function ends.

##### Tip: 
We can accept multiple arguments by separating them with a comma:
`function functionName(argument1, argument2) {}`

##### Challenge: 
It's your turn to create a function.
- Create a function called 'add'.
- Tell it to accept two arguments (number1 and number2).
    - To pass multiple arguments into function we separate them with a comma.
- Tell it to return a sum of number1 and number2.
- Call the function passing numbers 2 and 3 as arguments.
    - To see the result you can console.log it.

<details><summary>Answer</summary>
<code>function add(number1, number2) {
<br/>
    const sum = number1 + number2
<br/>
    return sum
    <br/>
}<br/>
const results = add(2, 3)
<br/>
console.log(results)
</code>
</details>

##### Challenge: 
Great, you made it! Now let's: 
- Create another function named 'subtract'
- Tell it to accept 2 arguments, number1 and number2
- Subtract number2 from number1 then return that value.
- Call it with the numbers 5 and 1 and console.log the result.

<details><summary>Answer</summary>
<code>function subtract(number1, number2) {
<br/>
    const subtraction = number1 - number2
<br/>
    return subtraction
    <br/>
}<br/>
const results = subtract(5, 1)
<br/>
console.log(results)
</code>
</details>


##### Tip: 
Leave these functions as they are, don't comment them out.
We will be using them again.

##### Tip: 
Did you know that instead of numbers you can create variables that store
those numbers and pass them as an arguments to your function? Try it out!

##### Tip: 
Did you know that you can `return` the results of your function without 
needing to save them to a variable first? Instead of saving the results 
of our `subtract` function to the variable `results`, we can just 
directly return them by using `return subtract(5,1)`.