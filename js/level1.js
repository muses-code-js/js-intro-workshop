// Level 1

/*
    Comments
    ========

    Let's start with comments. Comments are notes that people can read and
    computers will ignore.

    They will help us up to guide you through the JavaScript introduction
    journey.
*/

/*
    Multi-line comments look like this.
*/

// Single line comments look like this.


/*
    Let's start with getting your code on the screen.

    There are a few ways you can do it and we will look into few of them:

    * alert('Hello girls!');
    ** this line of code will pop-up a small window in your browser with text
    'Hello girls!' in it, but you need to refresh opened page first.

    * console.log('Hello World!');
    ** this line of code will print 'Hello World!' to the browser's console.

    P.S: To see browser's console you can do right click in the window of you
    browser(Chrome, Firefox etc) and select 'Inspect' or 'Inspect element'
    after that a console will appear on the bottom/right side of the page.
 */


// TODO: Now try to create an alert with any phrase you like.





// TODO: After alert works for you, comment it out(put '//' on the line where
// your code is and save changes) after refresh the page - it should not pop-up
// anymore.

// TODO: What you say about trying console.log your message to browser? Send
// any message you like.





/*
    Variables
    =========

    Variable is a place to store information. To create (also called declare) a
    variable use a keyword 'var', as follows:

    var variableName;

    So, we created a variable named variableName, but it has no information or
    value inside. It is empty. To give our variable a value (initialize it)
    use the '=' sign:

    variableName = 'Hello world!';

    We also can create and give value to variable in one step, as follows:

    var newVariable = 1;

    As you noticed we can give different types of values to our variables -
    strings, numbers, booleans etc.

    String - is a set of characters, word or phrase that we wrap into quotes,
      see 'hello world!' in previous task.
    Numbers - either integers or floats(decimals).
    Boolean - it represents logical values - True or False
 */

// TODO: Now create two empty variables named numberOne and numberTwo




/*
    You also can use your variables to represent information that it has inside.

    Example:

    var hello = 'Hello World';
    alert(hello);

    It will pop-up an alert box with string 'Hello World!'
 */

// TODO: Create 2 variables, 1 with your name and 2nd with your age and display
// them with alert pop-up box





// TODO: Don't forget to comment out alerts if you don't want them to pop-up
// every time.


/*
    Arithmetic Operators
    ====================

    There are a bunch of different operators in programming. We will look
    through arithmetical operators now. JavaScript incudes several standard
    arithmetical operators (+, -, /, *) that you can use to do math with your
    numbers.

    Example:

    var sumOfNumbers = 1 + 3;
    alert(sumOfNumbers);

    It will pop-up alert box with number 4

    (You can see a full list of )
 */

// TODO: Create 3 variables:
//
// * 1st variable named ten with value 10 inside,
// * 2nd variable named three with value 3
// * And finally 3rd variable named multipleOfNumbers that will be equal to
// 1st variable multiplied by the 2nd variable. And in the end display the
// value of multipleOfNumbers.





/*
    Functions
    =========

    A function is a reusable piece of code. Some action that you
    want to do. It takes some input (arguments), do some manipulation
    on it and returns the output. Use the keyword 'return' to define the return
    value.

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
// Step 1 - Name it 'add' and pass in two argumnets (num1 and num2)
// - to pass multiple arguments into function we seperate them with comma.
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
    If you have TV you can watch it in the evening, if not - you might do
    something else.  Same with code, you can give 'if' condition to machine to
    make a decision what part of code to run.

    Structure:

    if (condition) {
        do this
    } else {
        do something else
    }
    Example:
    var number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else {
        console.log('Our number is smaller then 7');
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

    '!=' - checks if they are not equal.

    PS: Don't mix up '=' and '==' as they have different meaning.
*/

// TODO: So now we have 2 functions from previous task - add and subtract.
// Let's tell machine to decide what action to run depending on arithmetical
// operator(+,-,/, * etc). If operator is '+' we should use add function, else
// - subtract function.
//
// Step 1 - create a variable called operator and let it be equal to '-'
// Step 2 - create if/else statement based on what operator we have,
//
// if we have operator equal to '+' we call add function with any two numbers,
// else subtract function with any 2 numbers.
//
// Don't forget to console.log it to see the result





















/*
    if - else if - else
    ===================

    Hm, but what if we have 4 arithmetical operations in our calculator? Well,
    we can use if - else if - else structure.

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











////////////////////////////////////////////////////////////////////////
//Congratulations! You have finished Part 1 of JavaScript Basics!     //
// Stand up, stretch your legs, celebrate your achievement.           //
//Next step will be following up the instructions in level2.js file.  //
////////////////////////////////////////////////////////////////////////
