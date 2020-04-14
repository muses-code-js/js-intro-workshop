/*
    Introduction
    ============

    WooHoo, you got so far on your first day! Great!
    Welcome to level 3!

    But we still have more things for you. First of all, open index.html, and
    replace our script from level2.js to our current file — level3.js.

    TIP: If you want to use multiple js files simultaneously, simply add more
    script tags.

    In this level you will learn about

    * Arrays,
    * Array Length,
    * Changing Values in Arrays,
    * Note about constant Arrays

    Let's get started with arrays!
*/

/*
    Arrays
    ======

    An array is an ordered list of values. It can keep any number of values
    inside. And also any type of values — Numbers, Strings, Objects, even
    other Arrays.

    Example:

    let animals = ['cat', 'dog', 'horse'];
    let randomThings = [2, 'book', 'today is Saturday', 10];
    let numbers = [1, 2, 8, 19];
*/

// TODO: Create your own array, named favouriteFood, and write in a couple of
//       things you like.






/*
    Array Length
    ============

    We can easily check how many items we have in our array with a property:
    '.length'

    Example:

    let randomThings = [2, 'book', 'today is Saturday', 10];
    console.log(randomThings.length); // We will get 4.
*/

// TODO: Check how many values you have in your array favouriteFood.
//       console.log the result.






/*
    Array Usage
    ===========

    It's useful to keep all of these values in one place. But what if we want
    to use only 1 item from the array?

    We can get them out using 'bracket notation'. Thanks to a guy named Edsger
    Dijkstra*, array indices start counting from 0. The usage looks like this.

    Example:

    let randomThings = [2, 'book', 'today is Saturday', 10];
    let firstItem = randomThings[0];
    let secondItem = randomThings[1]; and so on

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TODO: Get the third element from your array favouriteFood and console.log it.






/*
    Changing Values in Arrays
    =========================

    We also can replace values inside of the arrays by assigning a new value to
    a specific index.

    Example:

    let animals = ['cat', 'dog', 'horse'];

    // let's replace 'dog' with 'fish'
    animals[1] = 'fish';

    // now our animals array will be ['cat', 'fish', 'horse']
*/

// TODO: Take your array favouriteFood and replace the first value
//       with anything else.






// TODO: console.log the whole array to check.






// TIP: Don't forget, index positions start from 0!

/*
    Array.push()
    ============

    If you want to add new values to an existing array you can use the method
    '.push()'. Push will add a new value to the end of the array.

    Example:

    let animals = ['cat', 'dog', 'horse'];
    animals.push('rabbit');

    // animals will be ['cat', 'dog', 'horse','rabbit']
*/

// TODO: Let's extend your list of favouriteFood and add one more value to it.






// TODO: console.log the whole array to check.






/*
    Note about constant Arrays
    ==========================

    An array is what is known as a "reference type".  What this means is that
    even if an array is declared (created) using 'const', the values *inside* that
    array can still be changed; only the array itself cannot be overwritten.

    Example:

    const animals = ['cat', 'dog', 'horse'];

    // These are both legal, and works the same way as when animals is a variable:
    animals[1] = 'fish';
    animals.push('rabbit');

    // This is illegal, and will return an error the same as changing any constant:
    animals = [ 'mouse', 'elephant' ];
 */

// TODO: Try creating an array as a constant and modifying the values in it.






// TODO: See what happens if you add something with .push(), change something
//       with bracket notation (array[1]) and
//       assigning a new whole new array to the constant





////////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Level 3 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// The next step will be following up the instructions in level4.js.      //
////////////////////////////////////////////////////////////////////////////
