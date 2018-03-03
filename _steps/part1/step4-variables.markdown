---
layout: step
number: 4
part: 1
title: Variables
permalink: step4/

#keywords:
#  - term: variable
#    define: 

---

All most all of the code you write will be manipulating or examining data of some sort.  That data might come from a file, or from a 3rd party service, or from the user selecting something on a page or typing into a text box.  Regardless of where it comes from we need a place to put it so we can refer to it. 

**Variables** are the place where we keep information in our program.

Think of variables are being little boxes.  Each variable has a unique name that you specify and it holds one distinct piece of information (AKA the variable's **value**).

## Creating Variables

To create a variable you use the keyword `var`:

```javascript
var greeting;
```

So, we created a variable named `greeting`, but it has no value inside.  It is empty. To give our variable a value 
using `=` sign:

```javascript
greeting = 'Hello everyone!';
```

This is called **assigning a value** to the variable.  The `=` is called the **assignment** operator.  We'll learn more about operators in the next part.  

<!-- Note that `=` is not an equals sign like you might be used to from algebra.   -->

The first time variable is assigned a value the variable is said to be **initialized**.

We also can create and give value to a variable in one step, as follows:

```javascript
var whatTheFoxSays = 'yow-wow-wow-wow';
```

## Using Variables

So now we can create variables and can assign values to them.  So what can we do with them?  

We can use a variable in anyplace where we could use a value, like in `alert()` & `console.log()` for example.  

```javascript
var greeting = 'Hello everyone!';
alert(greeting);
```

And since you can use a variable anyplace you can use a value, you can of course use variables to assign values too:

```javascript
var whatTheFoxSays = 'yow-wow-wow-wow';
var mysterySound = whatTheFoxSays;
```

What do you think the value of `mysterySound` is here?  Try it out and display it with `console.log()` or `alert()`.

### Tasks
1. Create two empty variables named `animalName` and `animalNoise`
2. Assign them appropriate values.
3. Display them each using `alert()`


## Data Types and Strings

You might notice that all the values we are used so far have quote characters (`'`) around them.  Why is that?

Values have a quality what we refer to as **type**. Type indicates what kind of value it is.  Different types have slightly different behaviour and can be used in different ways. 

Putting single or double quotes around a value indicates that has the type of **string**, or "a string of characters".  We use strings for literal representations of words.

So what will happen if you don't put the quotes in?  Like this example?

```javascript
var message = Hello;
console.log(message)
```

You'll get a error something like `ReferenceError: Hello is not defined` because JavaScript assumes that `Hello` is a variable and tries to assigns it's value to `message`.  And `Hello` doesn't exist, so `not defined`.

It gets even more confused if you try to do something like:

```javascript
var message = Hello There;
console.log(message)
```
 
**Short version:** if your value is a bunch of literal characters that belong together, then wrap them in quotes.  

**Should I use single or double quotes?**  It mostly doesn't matter so long as you use the same ones at the beginning and the end.  It's mostly personal preference but it does matter when the string itself contains quote characters.

```javascript
var message = 'Say "Hello" to my little friend.';
var warning = "Don't swim here.  There are sharks!";
```

What do you think happens if the first string was wrapped in double-quotes, or if the second was in single quotes?

Try it out and see.

In the next step when we talk about operators we will also talk about another data type: Numbers.




<!-- #### DATA STRUCTURES AND TYPES

As you can notice, we can give different types of values to our variables.

| DATA TYPE        | DESCRIPTION        |
| -----------------|--------------------|
| **String**       |A sequence of characters that represent a text value. For example:  "Hello World!"|
| **Number**       |An integer or floating point number. For example: 42 or 3.14159. Not wrapped in quotes |
| **Boolean**      |true or false|
| **null**         | A special keyword denoting a null value.  |
| **undefined**    |A top-level property whose value is not defined. |
| **Symbol**       |A data type whose instances are unique and immutable. |
| **Object**       |some description |
 -->


<!-- You also can use your variables to represent information that they have inside.

```javascript
var hello = 'Hello World';
alert(hello);
```

This will pop-up an alert box with the string 'Hello World!' -->


