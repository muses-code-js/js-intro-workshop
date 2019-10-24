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

    In this level you will learn about

    * Functions,
    * If-Else Statements,
    * Comparison Operators,
    * If - Else if - Else,
    * Boolean Operators

    Let's get started with functions!
*/

/*
    Functions
    =========

    A function is a set of instructions that performs the same task every time
    we call it. It takes input in the form of 'arguments', calculates a result
    based on the input and returns the result as output.

    To create a function use the following format:

    function functionName(argumentName) {
        return argumentName * 2;
    };

    This function will take one 'argument' and 'return' the argument multiplied
    by 2. An argument works like a variable, if something is passed to the
    function the argument contains that value, and if nothing is passed then
    the argument is undefined.

    Our function won't actually run unless we 'call' it.
    To 'call' the function we write:

    functionName(10);

    This will call our function with the argument 10. And our function
    will return 20. To see what our function returns we can console.log it,
    for example:

    console.log(functionName(10));

    This takes the result of our function and sends it to console.log.

    TIP: The keyword 'return' is used to define the return value, we can do
         things before the line with 'return' on it,
         but after we 'return' the function ends.

    TIP: We can accept multiple arguments by separating them with a comma:
         function functionName(argument1, argument2) {}
*/

// TODO: It's your turn to create a function.

// Create a function called 'add'.
// Tell it to accept two arguments (number1 and number2)
//  - To pass multiple arguments into function we separate them with a comma.
// Tell it to return a sum of number1 and number2.
// Call the function passing numbers 2 and 3 as arguments.
//  - To see the result you can console.log it.






// TODO: Great, you made it! Now let's create another function named 'subtract',
//       Tell it to accept 2 arguments, number1 and number2, and subtract
//       number2 from number1 then return that value.
// Call it with the numbers 5 and 1 and console.log the result.






// P.S.: Do you know that instead of numbers you can create variables that store
// those numbers and pass them as an arguments to your function? Try it out!

// P.P.S.: Leave the functions as they are, don't comment them out,
//        we will use them again.

/*
    If-Else Statements
    ==================

    What if we want our program to make a decision about which function it
    should run? This is when we use conditions! If you have a TV you can
    watch it in the evening. If not, you might do something else.
    It's the same with code. You can give an 'if' condition to a machine to
    make a decision about what part of the code to run.

    Structure:

    if (condition) {
        do this
    } else {
        do something else
    }

    We need condition to either be true or false, so if we have something like
    a number we need to compare it to something.

    Example:

    const number = 7;
    if (number >= 7) {
        console.log('Our number is bigger than or equal to 7');
    } else {
        console.log('Our number is smaller than 7');
    }
*/

/*
    Comparison Operators
    ====================

    Earlier we introduced JavaScript's arithmetic operators. Now comes time to
    introduce you to the next set of operators. 'Comparison operators' are used
    to compare values (>, <, <=, >=, ===, !==). Most of them you know from math
    classes in school, some of them can be new for you:

    '===' checks equality, results in true if two values are equal.
    '!==' checks inequality, results in true if two values are not equal.

    TIP: Don't mix up '=' and '===' as they have different meanings.
         '=' means Assign
         '===' means Is it equal

         There are also '==' and '!=' operators, which are very similar to '==='
         and '!==', but with a slightly different meaning that is more prone to
         programming errors, so you should always use '===' and '!=='.

    The result of a comparison operator is a boolean value (true or false).
    For example:

    3 < 4 is true.
    1 + 1 === 3 is false.
*/

// TODO: So now we have 2 functions from the previous task - add and subtract.
//       Let's tell the machine to decide which to run depending on the
//       arithmetical operator (+,-,/, * etc).
//
//       If the operator is '+', we should use the add function,
//       else we should use the subtract function.
//
// Step 1 - Create a variable called operator and let it be equal to '+'.
// Step 2 - Create 2 variables with any 2 numbers.
// Step 3 - Create an if/else statement based on what operator we have.
//
// If we have an operator equal to '+', we call the add function with our numbers,
// else we call the subtract function with our numbers.
//
// Don't forget to console.log it to see the result.






// TODO: Change your operator to '-', and check that it calls the
//       subtract function instead.






/*
    If - Else if - Else
    ===================

    Hmm, but what if we have 4 arithmetical operations in our calculator? Well,
    we can use an if - else if - else structure.

    Example:

    const number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else if (number < 7) {
        console.log('Our number is smaller then 7');
    } else {
        console.log('Our number is equal to 7');
    }

    TIP: We can use any number of 'else if' statements in a row.
         The first one which is true is the only one which happens.
*/

// TODO: Let's create 2 more functions and name them 'divide' and 'multiply'.






// TODO: Then let's extend our 'if else' check that we already created by adding
//       'else if' operator is equal to '+' - call 'add' function,
//       'else if' operator is equal to '/' - call 'divide' function,
//       'else if' operator is equal to '*' - call 'multiply' function
//       else console.log - "Sorry, we don't know this operator".
//       (Copy it to here and comment out the first version)






/*
    Boolean Operators
    =================
    Putting an exclamation (!) before a Boolean variable gives
    the opposite value. The ! is called a "not" operator when
    used this way.

    The result of a comparison is a Boolean value, we can save it to a variable
    const bool = (1 < 2);

    Then we can check if 'bool' is true or false by using console.log

    console.log(bool); // This will return true
    console.log(!bool); // "not true", therefore returns false
    console.log(bool); // The original value isn't affected, still returns true

    We can also assign a Boolean value straight to a variable with the keywords
    true and false:

    const aLie = false;
    let previousStatement = true;
*/

// TODO: Try inverting a true or false value and print the result to the console






////////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Level 2 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// The next step will be following the instructions in level3.js          //
////////////////////////////////////////////////////////////////////////////
