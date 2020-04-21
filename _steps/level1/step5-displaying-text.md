---
layout: step
number: 5
level: 1
title: Displaying Text
permalink: step5/
---

Let's start with getting your code on the screen.

There are a few ways you can do it:

`alert('Hello World!');`

If you hit refresh in your browser, this line of code will pop-up a small window in your browser with the text 'Hello World!' in it.

`console.log('Hello World!');`

This line of code will print 'Hello World!' to the browser's console.

##### Tip: 
Edit your `script.js` file in your Code Editor and refresh the `index.html` page in your Web Browser to see your changes.

##### Tip: 
The shortcut to refresh a browser is 'CMD + R' on Mac and 'CTRL + R' on Windows.
To save changes to file, the shortcut is 'CMD + S' on Mac and 'CTRL + S' on Windows.

##### Challenge: 
Now it's your turn! Try to create an alert with any phrase you want. 

<details><summary>Answer</summary>
<code>alert('Hello World!');</code>
</details>

##### Challenge: 
Once the alert works for you, comment it out (put '//' on the line
where your code is and save the changes). After you refresh the page,
it should not pop-up anymore.

<details><summary>Answer</summary>
<code>// alert('Hello World!');</code>
</details>

##### Challenge: 
Shall we try to console.log a message to the browser? Send any message you want.

<details><summary>Answer</summary>
<code>console.log('Hello World!');</code>
</details>

##### Tip:
When declaring strings, you can use either `'` or `"`. They both work the same but
they are _not_ interchangable, so if you declare a string starting with `"` you'll
need to close it with the same. 

```javascript
console.log("hello world!") // this will work 
console.log('hello world!") // this won't work
```