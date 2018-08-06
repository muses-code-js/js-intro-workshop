---
layout: step
number: 8
part: 1
title: Arrays
permalink: step8/

---
## What is an Array?

Arrays are another way to store data, like variables. Unlike variables, they store a list of values. It can keep any type of data
inside such as numbers, strings, objects.

```javascript
var animals = ['cat', 'dog', 'horse'];
var randomThings = [2, 'book', 'today is Saturday', 10];
var numbers = [1, 2, 8, 19];
```
### Length Of An Array
We can easily check how many items we have in our array with the `length` property:

```javascript
var randomThings = [2, 'book', 'today is Saturday', 10];
console.log(randomThings.length); // We will get 4.
```

### Accessing and Modifying Array Items

It's useful to keep all of these values in one place. But what if we want
to use only 1 item from the array?

We can get them out using `bracket notation`. Array indices start counting from 0. The usage looks like this.

```javascript
var randomThings = [2, 'book', 'today is Saturday', 10];
var firstItem = randomThings[0];
console.log(firstItem);
var secondItem = randomThings[1];
console.log(secondItem);
```

We also can replace values inside of the arrays by assigning a new value to
a specific index.

```javascript
var animals = ['cat', 'dog', 'horse'];
// let's replace 'dog' with 'fish'
animals[1] = 'fish';
console.log(animals); // Now our animals array will be ['cat', 'fish', 'horse']
```

### Adding Items To An Array

If you want to add new values to an existing array you can use the method
'.push()'. Push will add a new value to the end of the array.

```javascript
var animals = ['cat', 'dog', 'horse'];
animals.push('rabbit');
console.log(animals); // animals will be ['cat', 'dog', 'horse', 'rabbit']
```

### Tasks

1. Create your own array, named `favouriteFood`, and write in a couple of things you like.
2. Check how many values you have in your array `favouriteFood`. Log the result (console.log())
3. Get third element from your array favouriteFood and print on the console.
4. Take your array favouriteFood and replace the first value with anything else. Log the whole array to check.(Don't forget, index positions start from 0!)
5. Let's extend your list of favouriteFood and add one more value to it. console.log list your favouriteFood and check it. 
