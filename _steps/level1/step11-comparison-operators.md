---
layout: step
number: 11
level: 1
title: Comparison Operators
permalink: step11/
---

Earlier we introduced JavaScript's *arithmetic operators*. Now comes time to
introduce you to the next set of operators. *Comparison operators* are used
to compare values and include:
- `>` means greater than 
- `<` means less than
- `>=` means greater than or equal to
- `<=` means less than or equal to
- `===` means equal to (two values are equal)
- `!==` means not equal to (two values are not equal)

##### Tip: 
Don't mix up `=` and `===` as they have different meanings.
`=` means to assign, `===` checks for equality.

There are also `==` and `!=` operators, which are very similar to `===`
and `!==`, but with a slightly different meaning that is more prone to
programming errors. You should always aim to use `===` and `!==` to 
avoid these errors.

The result of a comparison operator is a `boolean value` - it is either true or false.

For Answer:
- `3 < 4` is true
- `1 + 1 === 3` is false

##### Challenge: 
So now we have 2 functions from the previous task - add and subtract.
Using what we've learned about if/else statements, comparison operators
and boolean values, let's tell the machine to decide which to run 
depending on the arithmetical operator (+,-,/, * etc). If the operator 
is '+', we should use the add function, else we should use 
the subtract function.
- Create a variable called operator and let it be equal to `+`.
- Create 2 variables with any 2 numbers.
- Create an if/else statement based on what operator we have.
- If we have an operator equal to '+', we call the add function with 
our numbers, else we call the subtract function with our numbers.
- Don't forget to console.log it to see the result.

<details><summary>Answer</summary>
<code>const operator = "+"
<br/>
const number1 = 10
<br/>
const number2 = 6
<br/>
<br/>
if (operator === "+") {
<br/>
    console.log(add(number1, number2))
<br/>
} else {
<br/>
    console.log(subtract(number1, number2))
<br/>
}
</code>
</details>




##### Challenge: 
Change your operator to '-', and check that it calls the
subtract function instead.

<details><summary>Answer</summary>
<code>const operator = "-"
<br/>
const number1 = 10
<br/>
const number2 = 6
<br/>
<br/>
if (operator === "+") {
<br/>
    console.log(add(number1, number2))
<br/>
} else {
<br/>
    console.log(subtract(number1, number2))
<br/>
}
</code>
</details>