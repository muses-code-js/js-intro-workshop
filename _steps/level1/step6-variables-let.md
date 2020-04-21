---
layout: step
number: 6
level: 1
title: Variables - Let
permalink: step6/
---

A variable is a place to store information. To create (also called declare)
a variable use the keyword 'let', as follows:

`let variableName;`

So, we've created a variable named variableName, but it has no information or
value inside. 

It is `undefined`.

If we print the variable to the console we can see that.
`console.log("variableName is " + variableName);`
The result will be "variableName is undefined".

To give our variable a value (assign a value) use the '=' sign:

`variableName = 'Hello world!';`

We also can create and give value to a variable in one step (initialize it):

`let newVariable = 1;`

As you can notice, we can give different types of values to our variables -
Strings, Numbers, Booleans etc.

- **Strings** - a set of characters, word(s), or phrases that we wrap in quotes,
            like 'hello world!'. This can be anything, including numbers.
- **Numbers** - either integer or floating point (decimal). Not wrapped in quotes.
- **Boolean** - it represents logical values - true or false.


You can use the name of your variables to represent what information
that they have inside.

```javascript
let hello = 'Hello World';
alert(hello);
```

This will pop-up an alert box with the string 'Hello World!'.


##### Tip:
You may see code that uses the keyword 'var' instead of 'let'.
This is an older keyword that also creates variables, but with different
rules about where that variable is available ("scope"). For now, consider
'let' and 'var' as essentially equivalent, but use 'let' because it is less
prone to programming mistakes.

##### Tip: 
To display both variables at the same time, you can join them with the '+' sign.

##### Challenge: 
Now create two undefined variables named numberOne and numberTwo.

<details><summary>Answer</summary>
<code>let numberOne;
<br/>
let numberTwo;</code>
</details>

##### Challenge: 
Create 2 new variables, the 1st with your name and the 2nd with your age,
give them appropriate names and display them with an alert pop-up box.

<details><summary>Answer</summary>
<code>let name = "Jane";
<br/>
let age = 29;
<br/>
alert(name + age)</code>
</details>