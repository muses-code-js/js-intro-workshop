---
layout: step
number: 6
part: 1
title: Conditional Statements
permalink: step6/

#keywords:
#  - term:
#    define:

---

#### CONDITIONAL STATEMENTS

As we mentioned in the last step, there are lots of different kinds of operator. In this step, we show you how to use operators to help your program make decisions. This lets your program respond in different ways, depending on what the user does.

For example, let's say you have a program that lets your user input numbers. How can you make the program print a different message depending on the number? For example, we want to say "High!" if the number is above 7, and "Low!" if the number is below 7.

Let's think about what the program needs to do to make that happen.

1. It needs to compare the user's number with the number 7, to see if it's higher or lower.
2. It needs to print "High!" when the number is bigger than 7.
3. It needs to print "Low!" when the number is smaller than 7.

We can do the first part of this job with a new type of operator called a comparison operator.

#### COMPARISON OPERATORS

Comparison operators are used to compare values. Javascript's comparison operators are:

* `>` greater than
* `<` less than
* `=>` greater than or equal to
* `<=` less than or equal to
* `==` equal to
* `!=` not equal to

TIP: Remember that the assignment operator `=` is different from the equal to operator `==`. They look similar, but they do different things.

You'll have used some of these in maths, though they might be written differently on a computer to how you're used to writing them by hand.

Comparison operators work a little bit differently from arithmetical operators. When you use a comparison operator, the program tests whether the statement made by the first value, the operator, and the second value, is *true* or *false*.

For example, if you wrote `5 < 6` in a program, the result of the test would be *true*, because five *is* less than six. If you wrote `5 == 6`, the result would be *false*, because five and six are not equal.

For our High/Low program, we need to use a variable to check whether our user has input a number that is higher or lower than seven.

What variable would you use?

What would your statements look like?

#### IF STATEMENTS

Once you have your tests, you need to tell your program what to do after it evaluates your statements. To do this, we use *conditions* - in this case, an `if` statement.

An `if` statement lets a computer reason out what to do when you can't tell it exactly what is going to happen. The same way you might check the weather to determine whether you'll go to the beach or a movie, your program can check whether something is true or false in order to work out what to do next.

The basic structure of an `if` statement is:

```javascript
if (condition) {
    do this
} else {
    do something else
}
```
An example that might work for our High/Low program is:

```javascript
var number = 7;
if (number > 7) {
    console.log('High!');
} else {
    console.log('Low!');
}
```

Hmm, but we've left out one possibility - what if our user enters exactly 7? To make this work, we need to check something else.

If you want to check a bunch of different things, you can put `if` statements together by including a whole new `if` statement after `else`, like this:

```javascript
    var number = 7;
    if (number > 7) {
        console.log('High!');
    } else if (number < 7) {
        console.log('Low!');
    } else {
        console.log('You guessed our number.');
    }    
```

----

#### TASKS TO DO

1. We have 2 functions from the previous task - add and subtract.
Let's tell the machine to decide what action to run depending on the arithmetical
operator(+,-,/, * etc). If the operator is '+', we should use the add function, else we should use the subtract function.
 * STEP 1 : Create a variable called operator and let it be equal to '-'.
 * STEP 2 : Create an if/else statement based on what operator we have. If we have an operator equal to '+', we call add function with any two numbers,
else the subtract function with any 2 numbers.
 * STEP 3 : Log your result. (Console.log())

 2. Create 2 more functions and name them divide and multiply. After
that let's extend our 'if else' check that we already created by checking if
it is equal to '/' - call 'divide' function, if it is '*' call multiply
function, else console.log - "Sorry, we don't know this operator".
