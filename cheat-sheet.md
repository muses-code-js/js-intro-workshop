# JavaScript Cheatsheet

## JavaScript (or JS)

A popular programming language commonly used to create interactive effects within web browsers.

## variable

A place to store values, can store any kind of information (data types): numbers, words, collections of data

### undefined variable

A variable that has no value

### to declare variable

To create a variable - done by using:

```
let variableName = value;
```

### to initialize variable

Set (give) some value to a variable.

## value types

### string

A set of characters, word(s), phrase. To initialize variable with a string you need to put this string into quotes.

### boolean

Boolean variable represent a logical value True or False

### array

An ordered list of values, can store different types of data inside

### operator

Mathematical operators, such as: +, -, *, /, >, <, = etc

## comments

Comments are notes that you can leave for yourself or another person, a note that a computer will not read. You can write a comment on a new line or on the same line after code as so:

```
let variableName; // I’m your comment
```
Single line comments start with `//` and continue for the entire line
Multi line comments are placed between `/* .. */` and can end at any point on a line

## function

A separable, reusable piece of code. It takes some input, does some manipulation on it and returns an output.

### to declare function

To create a function

### argument

A value input that functions can accept

## if/else statement

`if` is used to decide if lines of code should be executed, `else` - gives an alternative set of instructions.

Example:

```
if (x > 5) {
  console.log("X bigger than 5");
}
else {
  console.log("X smaller than or equal to 5");
}
```

## Iterating/Loops

### while loop

It repeats code over and over again until some condition is met.

### for loop

This loop is similar to ‘while loop’, just with a set amount of repetition. You declare counter in the statement as so:

```
for (let i = 0; i < 5; i++) {
  do something 5 times
}
```

### infinite loop

This is an error which means that a loop does not stop.

In order to avoid this error each loop should have some condition so it can stop, and contain some way to trigger the condition.

## object

A collection of properties

## event

A type of object that is created when a user interacts with a web page. For example, JavaScript creates an event when a user clicks on a button.

## CSS

Stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen. It is presentation.

## HTML

Stands for Hyper Text Markup Language. It is a structure of the elements on the page.

## DOM

Stands for Document Object Model. It defines the logical structure of documents and the way a document is accessed and manipulated.

## scope

Scope is the set of variables, objects, and functions that you can access.

## console

A method of interacting with the system. In order to write to the browser console, you could use console.log(‘Hello World’). This would write Hello World in the browser console.
