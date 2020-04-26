---
layout: step
number: 8
level: 1
title: Arithmetic Operators
permalink: step8/
---
There are a bunch of different 'operators' in programming. Let's have a look
through arithmetical operators now. JavaScript includes several standard
arithmetical operators (+, -, /, *) that you can use to do maths with your
numbers.

```const sumOfNumbers = 1 + 3;
console.log(sumOfNumbers);
```

This will print the number 4 in our console.

##### Tip: 
Note how we didn't put 1 and 3 in quotes, because they are numbers.

##### Challenge: 
Create 3 variables:
- 1st variable named ten with value 10
- 2nd variable named three with value 3
- And finally 3rd variable named multipleOfNumbers that will be equal to
the 1st variable multiplied by the 2nd variable.

<details><summary>Answer</summary>
<code>const ten = 10;
<br/>
const three = 3;
<br/>
const multipleOfNumbers = ten * three</code>
</details>

##### Challenge: 
Display the value of multipleOfNumbers.

<details><summary>Answer</summary>
<code>const ten = 10;
<br/>
const three = 3;
<br/>
const multipleOfNumbers = ten * three
<br/>
console.log(multipleOfNumbers)</code>
</details>

##### Tip: 
One operator not often covered is the modulo - `%`. This calculates the 
remainder when one number is divided by the other. For example, `7 % 3 = 1`
as 7 can be divided by 3 twice with 1 remainder.