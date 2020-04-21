---
layout: step
number: 15
level: 2
title: Arrays
permalink: step15/
---

An array is an ordered list of values. It can keep any number of values
inside. These values can even be of any type — Numbers, Strings, Objects, even
other Arrays.

```javascript
let animals = ['cat', 'dog', 'horse'];
let randomThings = [2, 'book', 'today is Saturday', 10];
let numbers = [1, 2, 8, 19];
```

##### Challenge: 
Create your own array, named `favouriteFood`, and write in a couple of
things you like.

<details><summary>Answer</summary>
<code>const favouriteFood = ['lasagna', 'chocolate', 'roast potato']</code>
</details>


### Array Length

We can easily check how many items we have in our array with a property 
by looking at the property `.length`.

```javascript
let randomThings = [2, 'book', 'today is Saturday', 10];
console.log(randomThings.length); // We will get 4 because there are 4 things in the array.
```

##### Challenge:
Check how many values you have in your array `favouriteFood` and 
console.log the result.

<details><summary>Answer</summary>
<code>
console.log(favouriteFood.length)</code>
</details>


### Array Usage

It's useful to keep all of these values in one place. But what if we want
to use only 1 item from the array?

We can get them out using 'bracket notation'. Thanks to a guy named [Edsger
Dijkstra](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html),
_array indices start counting from 0._ The usage looks like this.

```javascript
let randomThings = [2, 'book', 'today is Saturday', 10];
let firstItem = randomThings[0];
let secondItem = randomThings[1]; // and so on
```

##### Challenge:
Get the third element from your array favouriteFood and console.log it.

<details><summary>Answer</summary>
<code>
console.log(favouriteFood[2])</code>
</details>


### Changing Values in Arrays

We also can replace values inside of the arrays by assigning a new value to
a specific index.

```javascript
let animals = ['cat', 'dog', 'horse'];

// let's replace 'dog' with 'fish'
animals[1] = 'fish';

// now our animals array will be ['cat', 'fish', 'horse']
```

##### Challenge: 
Take your array favouriteFood and replace the first value with anything else.
Console.log the whole array to see the change.

<details><summary>Answer</summary>
<code>
const favouriteFood = ['lasagna', 'chocolate', 'roast potato']
<br/>
favouriteFood[0] = 'ricotta'
<br/>
console.log(favouriteFood)</code>
</details>

### Array.push()

If you want to add new values to an existing array you can use the method
`.push()`. Push will add a new value to the end of the array.

```javascript
let animals = ['cat', 'dog', 'horse'];
animals.push('rabbit');

// animals will be ['cat', 'dog', 'horse','rabbit']
``` 

##### Challenge:
Let's extend your list of favouriteFood and add one more value to it.
Console.log the whole array to see your changes.

<details><summary>Answer</summary>
<code>
const favouriteFood = ['lasagna', 'chocolate', 'roast potato']
<br/>
favouriteFood.push('biscuits')
<br/>
console.log(favouriteFood)</code>
</details>

### Constant Arrays

An array is what is known as a `reference type`.  What this means is that
even if an array is declared (created) using 'const', the values *inside* that
array can still be changed; only the array itself cannot be overwritten.

```javascript
const animals = ['cat', 'dog', 'horse'];

// These are both legal, and works the same way as when animals is a variable:
animals[1] = 'fish';
animals.push('rabbit');

// This is illegal, and will return an error the same as changing any constant:
animals = [ 'mouse', 'elephant' ];
```

##### Challenge:
Try creating an array as a constant and modifying the values in it.

<details><summary>Answer</summary>
<code>
const favouriteFood = ['lasagna', 'chocolate', 'roast potato']
<br/>
favouriteFood[2] = 'muffins'
<br/>
console.log(favouriteFood)</code>
</details>


##### Challenge: 
See what happens if you add something with .push(), change something
with bracket notation (array[1]) and assigning a new whole new array 
to the constant.

<details><summary>Answer</summary>
<code>
const favouriteFood = ['lasagna', 'chocolate', 'roast potato']
<br/>
favouriteFood.push('muffins')
<br/>
favouriteFood[1] = 'eggs'
<br/>
favouriteFood = ['cheese', 'bananas', 'spaghetti', 'icecream']
<br/>
console.log(favouriteFood)</code>
</details>