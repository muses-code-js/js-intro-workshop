---
layout: step
number: 13
level: 1
title: Boolean Operators
permalink: step13/
---

Putting an exclamation mark `!` before a Boolean variable gives
the opposite value. The `!` is called a "not" operator when
used this way.

The result of a comparison is a Boolean value, we can save it to a variable
`const bool = (1 < 2);`

Then we can check if `bool` is true or false by using `console.log`

`console.log(bool);` - this will return true
`console.log(!bool);` - "not true", therefore returns false
`console.log(bool);` - The original value isn't affected, still returns true

We can also assign a Boolean value straight to a variable with the keywords
`true` and `false`:

```javascript
const aLie = false;
let previousStatement = true;
```

##### Challenge: 
Try inverting a true or false value and print the result to the console

<details><summary>Answer</summary>
<code>const human = true;
<br/>
console.log(!human) // should return false
</code>
</details>