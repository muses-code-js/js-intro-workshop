// Level 2

/*
    Introduction
    ============

    Welcome to level 2! It is time to interact with HTML.

    Hyper Text Markup Language (HTML) files are the backbone of the internet.
    Every website you visit is loaded first as an HTML file.

    We won't talk too much about HTML today. What you need to know is that HTML
    files function as a sort of skeleton for your page. Our index.html file
    combines all the files from this project together so that you can open them
    in your web browser.

    This project has a file called index.html. At the bottom of index.html you
    will see the following tag:

    <script src="js/level1.js"></script>

    That is how you have been running the level1.js file in a browser. Now change
    level1.js to point to this file — level2.js.

    Now you are ready to start!
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






/*
    Loops
    =====

    People have always been lazy, but sometimes it moves progress forward! We
    don't like to repeat the same boring actions again and again, so we look
    for ways to avoid it.

    Programming is the same. For example, if I want to print 'JavaScript is
    awesome!' 10 times, what are my options? Of course, I can type ten lines of
    code repeating the same instruction, but I can also tell the computer to
    repeat it instead of me writing it 10 times!

    For this we have loops.

    Each loop should have three main things:
    - a starting point
    - a condition (finishing point)
    - a counter (a step)

    If you miss one of these, you can get into an infinite loop!

    Let's look into different looping structures.
*/

/*
    While Loops
    ===========

    'While' loop will do an action forever until some condition is met.

    Example:

    // starting point
    let number = 0;

    while (number < 10) {
      // 'less than 10' is a condition (finishing point)

      console.log('JavaScript is awesome!');

      number = number + 1;
      // + 1 is a counter/size of the step
    }
*/

// TODO: Using a 'while loop', tell your computer to log the numbers from
//       ten to one.






/*
    For Loops
    =========

    For loops are very similar to the 'while loop'. In a for loop, you
    declare a counter in the statement.

    Example:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (starting point; condition; step)
      console.log('Purr');
    }
*/

// TODO: Log every 3rd number from three to 22 using a 'for loop'.






/*
    Iterating Through Arrays
    ========================

    Now we know about loops, I want to use each value from my animal list
    and express my love for each. How shall I do it?

    We can use a 'for loop' to iterate through our array and get each value
    from it.

    Note: i++ is another way of writing i = i + 1.

    Example:

    const animals = ['cats', 'dogs', 'horses'];
    for(let i = 0; i < animals.length; i++){
        console.log('I love ' + animals[i]);
    }
*/

// TODO: Try it out with your favouriteFood array.






/*
    Loops and Logic
    ===============

    Let's bring loops together with the if/else statements we learned in
    level 1, and make something interesting.

    Let's count from 10 to 0 and log all the numbers. But, when we get to the
    middle (5) print 'Woohoo, we are in the middle!'.

    Example:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('WooHoo, we are in the middle!');
        } else {
            console.log(i);
        }
    }
*/

// TODO: Time has come for a classic exercise — 'FizzBuzz'.

// Count from 1 to 50 and print the numbers out:
//
// * If a number is a multiple of three, print 'Fizz'.
// * If it's a multiple of 5, print 'Buzz'.
// * If it's a multiple of 3 and 5, print 'FizzBuzz'.
// * For everything else, print the number itself.

// P.S. You may wish to use arithmetic operator remainder (%):
// It calculates the remainder when dividing.
//
// 10 % 3 = 1 — in 10 we have 3*3 + 1
// 16 % 4 = 0 — in 16 we have 4*4
// 19 % 4 = 3 — in 19 we have 4*4 + 3 etc






////////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Level 2 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// The next step will be following up the instructions in level3.js file. //
////////////////////////////////////////////////////////////////////////////
