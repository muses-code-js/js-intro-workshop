---
layout: step
number: 7
level: 1
title: Variables - Constants
permalink: step7/
---

A constant is just like a variable, but it must be given a value when it is
declared (created), and that value can never change. In other words, a
constant always contains the same information.

To declare (create) a constant, we use the keyword `const`.

`const earthRadiusKm = 6371;`

Assigning a new value to the constant will cause an error, we can not do:
`earthRadiusKm = 6400;`

The name of constants can also be used to represent the information they
contain, in the same way as variables.

##### Tip: 
Don't forget to comment out alerts if you don't want them to pop-up
every time.

##### Challenge: 
Create a constant, and display it an alert pop-up box.

<details><summary>Answer</summary>
<code>const dogLegs = 4;
<br/>
alert(dogLegs)</code>
</details>

##### Challenge: 
Try to assign a new value to your constant to see what happens.

<details><summary>Answer</summary>
<code>const dogLegs = 4;
<br/>
dogLegs = 3;
<br/>
alert(dogLegs)</code>
</details>