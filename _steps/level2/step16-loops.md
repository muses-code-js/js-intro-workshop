---
layout: step
number: 16
level: 2
title: Loops
permalink: step16/
---

People have always been lazy, but sometimes it moves progress forward! We
don't like to repeat the same boring actions again and again, so we look
for ways to avoid it.

Programming is the same. For example, if I want to print 'JavaScript is
awesome!' 10 times, what are my options? Of course, I can type ten lines of
code repeating the same instruction, but I can also tell the computer to
repeat it instead of me writing it 10 times!

For this we have loops.

Each loop should have three main things:
- a starting point
- a condition (finishing point)
- a counter (a step)

If you miss one of these, you can get into an infinite loop!

Let's look into different looping structures.


### While Loops

`While` loops will do an action forever until some condition is met.

```javascript
// starting point
let number = 0;

while (number < 10) {
// 'less than 10' is the condition (finishing point)
    console.log('JavaScript is awesome!');
    number = number + 1;
// + 1 is a counter/size of the step
}
```

##### Challenge: 
Using a `while` loop, tell your computer to to log the numbers from
ten down to one.

<details><summary>Answer</summary>
<code>
let number = 0;
<br/>
while (number < 10) {
    <br/>
// 'less than 10' is the condition (finishing point)
<br/>
console.log('JavaScript is awesome!');
<br/>
number = number + 1;
<br/>
// + 1 is a counter/size of the step
<br/>
}
</code>
</details>

### For Loops

`For` loops are very similar to the `while` loop. In a `for` loop, you
declare a counter in the statement.

```javascript
for (let i = 0; i <= 5; i = i + 1) {  // for (starting point; condition; counter)
    console.log('Purr');
}
```

##### Challenge: 
Log every 3rd number from three to 22 using a `for loop`.

<details><summary>Answer</summary>
<code>
for (let i = 3; i <= 22; i = i + 3) {
<br/>
    console.log(i)
<br/>
}
</code>
</details>


### Iterating Through Arrays

Now we know about loops, I want to use each value from my animal list
and express my love for each. How shall I do it?

We can use a `for loop` to iterate through our array and get each value
from it.

Note: `i++` is another way of writing `i = i + 1`. Similarly, `i--`
is another way of writing `i = i - 1`.

```javascript
const animals = ['cats', 'dogs', 'horses'];
for(let i = 0; i < animals.length; i++){
    console.log('I love ' + animals[i]);
}
```

##### Challenge: 
Try it out with your favouriteFood array.

<details><summary>Answer</summary>
<code>const favouriteFood = ['lasagna', 'chocolate', 'roast potato']
<br/>
for(let i = 0; i < favouriteFood.length; i++){
    <br/>
console.log('I love ' + favouriteFood[i]);
<br/>
}
</code>
</details>


### Loops and Logic

Let's bring loops together with the if/else statements we learned in
Level 1, and make something interesting.

Let's count from 10 to 0 and log all the numbers. But, when we get to the
middle (5) print 'Woohoo, we are in the middle!'.

```javascript
for (let i = 10; i >= 0; i--) {
if (i === 5) {
    console.log('Woohoo, we are in the middle!');
} else {
    console.log(i);
}
}
```

##### Challenge:
Time has come for a classic exercise — **FizzBuzz**.

Count from 1 to 50 and print the numbers out:
- If the number is a multiple of 3, print `Fizz`.
- If the number is a multiple of 5, print `Buzz`.
- If the number is a multiple of both 3 and of 5, print `FizzBuzz`.
- For everything else, print the number itself.


<details><summary>Answer</summary>
<code>for (let i = 0; i <= 50; i++) {
    <br/>
     if (i % 3 && i % 5) {
         <br/>
         console.log("FizzBuzz")
         <br/>
     } else if (i % 5) {
         <br/>
         console.log("Buzz")
         <br/>
     } else if (i % 3) {
         <br/>
         console.log("Fizz")
         <br/>
     } else {
         <br/>
         console.log(i)
         <br/>
     }
     <br/>
 }
</code>
</details>

##### Tip:
 You may wish to use arithmetic operator modulo (%) for
 the FizzBuzz challenge - it calculates the remainder when dividing.

 `10 % 3 = 1` — in 10 we have `3*3` + `1`

 `16 % 4 = 0` — in 16 we have `4*4`
 
 `19 % 4 = 3` — in 19 we have `4*4` + `3` etc.