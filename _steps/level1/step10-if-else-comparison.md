---
layout: step
number: 10
level: 1
title: If/Else Statements
permalink: step10/
---

What if we want our program to make a decision about which function it
should run? This is when we use conditions! If you have a TV you can
watch it in the evening. If not, you might do something else.
It's the same with code. You can give an 'if' condition to a machine to
make a decision about what level of the code to run.

```javascript
    if (condition) {
        do this
    } else {
        do something else
    }
```

We need condition to either be true or false, so if we have something like
a number we need to compare it to something.

```javascript
    const number = 7;
    if (number >= 7) {
        console.log('Our number is bigger than or equal to 7');
    } else {
        console.log('Our number is smaller than 7');
    }
```