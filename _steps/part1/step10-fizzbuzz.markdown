---
layout: step
number: 10
part: 1
title: "Exercise: FizzBuzz"
permalink: step10/

---
Time has come for a classic exercise. Yaay! :tada:

Count from 1 to 50 and print the numbers out:

* If a number is a multiple of three, print 'Fizz'.
* If it's a multiple of 5, print 'Buzz'.
* If it's a multiple of 3 and 5, print 'FizzBuzz'.
* For everything else, print the number itself.

Note: You may wish to use arithmetic [operator remainder (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()):

```javascript
for( var i = 0; i < 50; i ++){
    if(i % 15 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
```
{: .solution }