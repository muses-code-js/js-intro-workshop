/*
    Introduction
    ============

    Welcome to level 4!
    In this level you will learn about

    * Loops,
    * While Loops,
    * For Loops,
    * Iterating Through Arrays,
    * Loops and Logic

    Remember to open index.html, and replace our script from level3.js
    to our current file — level4.js.

    Let's get started with loops!
*/

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
// Congratulations! You have finished Level 4 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// The next step will be following up the instructions in level5.js.      //
////////////////////////////////////////////////////////////////////////////
