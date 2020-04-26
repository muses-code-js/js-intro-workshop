---
layout: step
number: 12
level: 1
title: If/Else Loops
permalink: step12/
---

Hmm, but what if we have 4 arithmetical operations in our calculator? Well,
we can use an if - else if - else structure.

```javascript
const number = 7;
if (number > 7) {
console.log('Our number is bigger then 7');
} else if (number < 7) {
console.log('Our number is smaller then 7');
} else {
console.log('Our number is equal to 7');
}
```

##### Tip: 
We can use any number of 'else if' statements in a row.
The first one that is true will be the only one that runs.

##### Challenge: 
Let's create 2 more functions and name them 'divide' and 'multiply'.

<details><summary>Answer</summary>
<code>function divide(number1, number2) {
<br/>
return number1 / number2
<br/>
}<br/><br/>
function multiply(number1, number2) {
<br/>
return number1 * number2
<br/>
}<br/>
</code>
</details>

##### Challenge: 
Then let's extend our 'if else' check that we have already created by adding
- 'else if' operator is equal to `-` - call `subtract` function,
- 'else if' operator is equal to `/` - call `divide` function,
- 'else if' operator is equal to `*` - call `multiply` function
- else console.log - "Sorry, we don't know this operator".

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
} else if (operator === "-") {
    <br/>
    subtract(number1, number2)
    <br/>
} else if (operator === "/") {
    <br/>
    divide(number1, number2)
    <br/>
} else if (operator === "*") {
    <br/>
    multiply(number1, number2)
    <br/>
} else {
    <br/>
    console.log("Sorry, we don't know this operator")
    <br/>
}
</code>
</details>