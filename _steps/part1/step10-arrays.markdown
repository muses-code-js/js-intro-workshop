---
layout: step
number: 10
part: 1
title: Arrays
permalink: step10/

#keywords:
#  - term:
#    define: 

---


#### ARRAYS

##### WHAT IS AN ARRAY?

An array is an ordered list of values. It can keep any number of values
inside. And also any type of values — numbers, strings, objects.

```javascript

var animals = ['cat', 'dog', 'horse'];
var randomThings = [2, 'book', 'today is Saturday', 10];
var numbers = [1, 2, 8, 19];

```
##### LENGTH OF AN ARRAY
We can easily check how many items we have in our array with a property:
'.length'

```javascript
var randomThings = [2, 'book', 'today is Saturday', 10];
console.log(randomThings.length); // We will get 4.
```

##### ACCESSING AND MODIFYING ARRAY ITEMS

It's useful to keep all of these values in one place. But what if we want
to use only 1 item from the array?

We can get them out using 'bracket notation'. Array indices start counting from 0. The usage looks like this.

```javascript

var randomThings = [2, 'book', 'today is Saturday', 10];
var firstItem = randomThings[0];
var secondItem = randomThings[1]; 
```

We also can replace values inside of the arrays by assigning a new value to
a specific index.

```javascript
var animals = ['cat', 'dog', 'horse'];
// let's replace 'dog' with 'fish'
animals[1] = 'fish';
// now our animals array will be ['cat', 'fish', 'horse']
```

##### ADDING ARRAY ITEMS

If you want to add new values to an existing array you can use the method
'.push()'. Push will add a new value to the end of the array.

```javascript

var animals = ['cat', 'dog', 'horse'];
animals.push('rabbit');
// animals will be ['cat', 'dog', 'horse','rabbit']
```

#### TASKS TO DO

1. Create your own array, named favouriteFood, and write in a couple of things you like.
2. Check how many values you have in your array favouriteFood. Log the result (console.log())
3. Get third element from your array favouriteFood and print on the console.
4. Take your array favouriteFood and replace the first value with anything else. console.log the whole array to check.(Don't forget, index positions start from 0!)
5. Let's extend your list of favouriteFood and add one more value to it. console.log list your favouriteFood and check it. 