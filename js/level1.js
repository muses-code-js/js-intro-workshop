// Level 1

/*
    Comments
    ========

    Let's start with comments. Comments are notes that people can read and
    computers will ignore.

    They will help us to guide you through the JavaScript introduction
    journey.
*/

/*
    Multi-line comments look like this.
*/

// Single line comments look like this.


/*
    Let's start with getting your code on the screen.

    There are a few ways you can do it and we will look into a few of them:

    * alert('Hello girls!');
    ** This line of code will pop-up a small window in your browser with the text
    'Hello girls!' in it, but you need to refresh the opened page first.

    * console.log('Hello World!');
    ** This line of code will print 'Hello World!' to the browser's console.

    P.S: To see the browser's console you can right click on the window of your
    browser(Chrome, Firefox etc) and select 'Inspect' or 'Inspect element'.
    After that a console will appear on the bottom right side of the page.
*/


// TODO: Now try to create an alert with any phrase you like.





// TODO: After the alert works for you, comment it out (put '//' on the line where
// your code is and save the changes). After you refresh the page, it should not pop-up
// anymore.

// TODO: Shall we try to console.log the message to the browser?
// Send any message you like.





/*
    Variables
    =========

    A variable is a place to store information. To create (also called declare) a
    variable use the keyword 'var', as follows:

    var variableName;

    So, we created a variable named variableName, but it has no information or
    value inside. It is empty. To give our variable a value (initialize it)
    use the '=' sign:

    variableName = 'Hello world!';

    We also can create and give value to a variable in one step, as follows:

    var newVariable = 1;

    As you can notice, we can give different types of values to our variables -
    strings, numbers, booleans etc.

    A string is a set of characters, word(s) or phrase(s) that we wrap in quotes,
    see 'hello world!' in the previous task.
    Numbers - either integers or floats(decimals)
    Boolean - it represents logical values - True or False
*/

// TODO: Now create two empty variables named numberOne and numberTwo.




/*
    You also can use your variables to represent information that they have inside.

    Example:

    var hello = 'Hello World';
    alert(hello);

    This will pop-up an alert box with the string 'Hello World!'
*/

// TODO: Create 2 variables, 1 with your name and the 2nd with your age and display
// them with an alert pop-up box.





// TODO: Don't forget to comment out alerts if you don't want them to pop-up
// every time.


/*
    Arithmetic Operators
    ====================

    There are a bunch of different operators in programming. We will look
    through arithmetical operators now. JavaScript includes several standard
    arithmetical operators (+, -, /, *) that you can use to do maths with your
    numbers.

    Example:

    var sumOfNumbers = 1 + 3;
    alert(sumOfNumbers);

    This will pop-up an alert box with the number 4.

    (You can see a full list of )
*/

// TODO: Create 3 variables:
//
// * 1st variable named ten with value 10 inside
// * 2nd variable named three with value 3
// * And finally 3rd variable named multipleOfNumbers that will be equal to
// 1st variable multiplied by the 2nd variable. And in the end display the
// value of multipleOfNumbers.





/*
    Functions
    =========

    A function is a reusable piece of code, an action that you want to do.
    It takes some input (arguments), does some manipulation on it and returns
    the output. Use the keyword 'return' to define the return value.

    To create a function use the following format:

    function functionName(argument) {
        return argument * 2;
    };

    This function will take one argument and return the argument multiplied by
    2. Our function won't actually run unless we 'call' it.

    To 'call' the function we write:

    functionName(10);

    Now we will call our function with argument that is 10. And our function
    will return us 20. To see what our function returns us we can console.log
    it, for example:

    console.log(functionName(10));
*/

// TODO: It's your turn to create a function.
// Step 1 - Name it 'add' and pass in two arguments (num1 and num2)
// - To pass multiple arguments into function we separate them with a comma.
// Step 2 - This function should return us a sum of num1 and num2.
// Step 3 - Call the function passing numbers 2 and 3 as arguments.
// - To see the result you can console.log it.






// TODO: Great, you made it! Now let's do another function named 'subtract' and
// pass 2 arguments num1 and num2.
// Call it with the numbers 5 and 1 and console.log the result.

// PS: Do you know that instead of numbers you can create variables that store
// those numbers and pass them as an arguments to your function? Try it out!








/*
    If-Else Statements
    ==================

    What if we want our program to make a decision about which function it
    should run? In this case we can use conditions.
    If you have a TV you can watch it in the evening. If not, you might do
    something else.  It's the same with code. You can give an 'if' condition to a machine to
    make a decision about what part of the code to run.

    Structure:

    if (condition) {
        do this
    } else {
        do something else
    }
    Example:
    var number = 7;
    if (number > 7) {
        console.log('Our number is bigger than 7');
    } else {
        console.log('Our number is smaller than 7');
    }
*/

/*
    Comparison Operators
    ====================

    Earlier we introduced JavaScript's arithmetic operators.  Now comes time to
    introduce you to the next set. JavaScript's Comparison operators' are used
    to compare values(>, <, <=, =>, ==, !=). Most of them you know from math
    classes in school, some of them can be new for you, so '==' is checking
    equality, if two values are equal.

    '!=' - Checks if they are not equal.

    PS: Don't mix up '=' and '==' as they have different meanings.
*/

// TODO: So now we have 2 functions from the previous task - add and subtract.
// Let's tell the machine to decide what action to run depending on the arithmetical
// operator(+,-,/, * etc). If the operator is '+', we should use the add function, else we should use the
// - subtract function.
//
// Step 1 - Create a variable called operator and let it be equal to '-'.
// Step 2 - Create an if/else statement based on what operator we have.
//
// If we have an operator equal to '+', we call add function with any two numbers,
// else the subtract function with any 2 numbers.
//
// Don't forget to console.log it to see the result.





















/*
    if - else if - else
    ===================

    Hmm, but what if we have 4 arithmetical operations in our calculator? Well,
    we can use an if - else if - else structure.

    Example:

    var number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else if (number < 7) {
        console.log('Our number is smaller then 7');
    } else {
        console.log('Our number is equal to 7');
    }
*/


// TODO: Let's create 2 more functions and name them divide and multiply. After
// that let's extend our 'if else' check that we already created by checking if
// it is equal to '/' - call 'divide' function, if it is '*' call multiply
// function, else console.log - "Sorry, we don't know this operator".











///////////////////////////////////////////////////////////////////////////
//Congratulations! You have finished Part 1 of JavaScript Basics!        //
// Stand up, stretch your legs, and celebrate your achievement.          //
//The next step will be following the instructions in the level2.js file.//
///////////////////////////////////////////////////////////////////////////
