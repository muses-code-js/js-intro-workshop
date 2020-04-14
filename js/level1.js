/*
    Introduction
    ============

    Welcome to level 1!
    In this level you will learn about

    * Comments,
    * Displaying text
    * Variables,
    * Constants,
    * Maths

    Let's get started with comments!
*/

/*
    Comments
    ========

    This is a comment. Comments are notes that people can read
    and computers will ignore.

    They will help us to guide you through the JavaScript introduction
    journey.

    A comment can either be a single line comment, or a multi line comment block
*/

// Single line comments look like this. Just add // to the left of your comment.

/*
    Multi-line comments look like this.

    When you are writing actual code, put it outside these comment blocks,
    so the computer doesn't ignore them.
*/






/*
    Displaying text
    ===============

    Let's start with getting your code on the screen.

    There are a few ways you can do it and we will look into a few of them:

    alert('Hello World!');
        This line of code will pop-up a small window in your browser with the
        text 'Hello World!' in it, when you refresh the opened page.

    console.log('Hello World!');
        This line of code will print 'Hello World!' to the browser's console.

    P.S.: To see the browser's console you can right click on the window of your
    browser (Chrome, Firefox, Opera etc) and select 'Inspect' or 'Inspect element'.
    After that a console will appear on the bottom or right side of the page.
    More info in the file `Readme.md`
*/

// TODO: Now it's your turn! Try to create an alert with any phrase you want.






// TODO: Once the alert works for you, comment it out (put '//' on the line
//       where your code is and save the changes). After you refresh the page,
//       it should not pop-up anymore.

// TODO: Shall we try to console.log a message to the browser?
//       Send any message you want.





// TIP: Shortcut to refresh a browser is 'CMD + R' on Mac and 'CTRL + R' on
//      Windows.


// TIP: Shortcut to save changes to file is 'CMD + S' on Mac and 'CTRL + S' on
//      Windows.


/*
    Variables
    =========

    A variable is a place to store information. To create (also called declare)
    a variable use the keyword 'let', as follows:

    let variableName;

    So, we created a variable named variableName, but it has no information or
    value inside. It is `undefined`.

    If we print the variable to the console we can see that.
    console.log("variableName is " + variableName);
    The result will be "variableName is undefined".

    To give our variable a value (assign a value) use the '=' sign:

    variableName = 'Hello world!';

    We also can create and give value to a variable in one step (initialize it):

    let newVariable = 1;

    As you can notice, we can give different types of values to our variables -
    Strings, Numbers, Booleans etc.

    Strings - a set of characters, word(s), or phrases that we wrap in quotes,
              like 'hello world!'. This can be anything, including numbers.

    Numbers - either integer or floating point (decimal). Not wrapped in quotes.

    Boolean - it represents logical values - true or false.

    P.S. You may see code that uses the keyword 'var' instead of 'let'.
    This is an older keyword that also creates variables, but with different
    rules about where that variable is available ("scope"). For now, consider
    'let' and 'var' as essentially equivalent, but use 'let' because it is less
    prone to programming mistakes.
*/

// TODO: Now create two undefined variables named numberOne and numberTwo.






/*
    You can use the name of your variables to represent what information
    that they have inside.

    Example:

    let hello = 'Hello World';
    alert(hello);

    This will pop-up an alert box with the string 'Hello World!'
*/

// TODO: Create 2 new variables, 1 with your name and the 2nd with your age,
//       give them appropriate names and display them with an alert pop-up box.





// TIP: to display both variables at the same time,
//      you can join them with the '+' sign.






/*
    Constants
    =========

    A constant is just like a variable, but it must be given a value when it is
    declared (created), and that value can never change. In other words, a
    constant always contains the same information.

    To declare (create) a constant, we use the keyword 'const'.

    Example:

    const earthRadiusKm = 6371;

    Assigning a new value to the constant will cause an error, we can not do:
    earthRadiusKm = 6400;

    The name of constants can also be used to represent the information they
    contain, in the same way as variables.
*/

// TODO: Create a constant, and display it an alert pop-up box.






// TODO: Try to assign a new value to your constant to see what happens.






// TIP: Don't forget to comment out alerts if you don't want them to pop-up
//      every time.

/*
    Maths - Arithmetic Operators
    ============================

    There are a bunch of different 'operators' in programming. Let's have a look
    through arithmetical operators now. JavaScript includes several standard
    arithmetical operators (+, -, /, *) that you can use to do maths with your
    numbers.

    Example:

    const sumOfNumbers = 1 + 3;
    console.log(sumOfNumbers);

    This will print the number 4 in our console.

    TIP: Note how we didn't put 1 and 3 in quotes, because they are numbers.
*/

// TODO: Create 3 variables:
//
// * 1st variable named ten with value 10
// * 2nd variable named three with value 3
// * And finally 3rd variable named multipleOfNumbers that will be equal to
// 1st variable multiplied by the 2nd variable.






// TODO: And in the end display the value of multipleOfNumbers.





////////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Level 1 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// The next step will be following the instructions in the file level2.js //
////////////////////////////////////////////////////////////////////////////
