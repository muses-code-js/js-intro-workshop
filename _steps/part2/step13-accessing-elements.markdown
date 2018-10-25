---
layout: step
number: 13
part: 2
title: Accessing Elements
permalink: step13/

---

### Document Object Model (DOM)

The DOM is the javascript representation of the active HTML file. The DOM
is available under a special global variable called `document`. We can get
specific nodes (page elements) with the DOM method: `querySelector`.

Let's get our twitter link from the page (at the bottom). You can try by opening your development console and simple copy and the paste the code below.

```javascript
var ourTwitter = document.querySelector('.fa-twitter');
console.log(ourTwitter);
// We can store page elements in variables, just like any other value!
// The result on the console is : <i class="fa fa-twitter" aria-hidden="true"></i>
```

`'fa-twitter'` is the class of our Twitter icon. We need to know what the class name of the Twitter icon so that we can in the querySelector method as an argument. To get the class name, open your development console and click the arrow icon at the top-right and
click the Twitter icon(the bird) at the very bottom. You will see the `<i class="fa fa-twitter" aria-hidden="true"></i>`. `'i'` tag represents an icon.

Another example would be getting the title of our website.

```javascript
var siteTitle = document.querySelector('.site-title');
console.log(siteTitle);
```

### Getting Similar Elements

We also can get all elements with the same tag. For example, if you want to see all the icons that we have in our website, you can see the list of them by `querySelectorAll` method:

```javascript
// Will get all <i> from the page
var mediaLinks = document.querySelectorAll('i');
console.log(mediaLinks);
```

Okay, so far so good. But what if we want only the text of our title rather than an HTML element?
Page elements have another property for this: '.textContent'.

```javascript
var siteTitle = document.querySelector('.site-title');
console.log(siteTitle.textContent);
// We will get text : Muses Code JS - Intro to Javascript'
```

### Editing Page Content

We can change the content of the tags using the same .textContent property.

```javascript
siteTitle.textContent = 'JavaScript is awesome!';
console.log(siteTitle.textContent);
// guess what we will see on the page and in the console?
```

### Creating New Nodes (Elements)

The DOM also provides ways to create new elements from scratch.

document.createElement(tagName); --> create the element
document.createTextNode(text); --> what text it should contain
document.appendChild(node); --> append it to the document

```javascript
var titleElement = document.querySelector('.site-title'); // Selecting our title element
var newIcon = document.createElement('i'); // Creating a new icon
newIcon.className = 'fa fa-heart'; // Assigning the class name to our new icon. (Don't worry about what 'fa fa-heart' means but it's just a class from an external library.)
titleElement.appendChild(newIcon); // And append this new icon to our title.
```

Did you see the heart on the page? :smiley:

You've done such an amazing job so far! Let's do one more practise and then you're done!

----
### Tasks

1. Get the h2 tag from the page and store it into a variable named postTitle. console.log it and see what you get!
2. Make up a new title! Change the content of our 'h2' to anything you like.
3. Select the 'Home' element in the navigation bar ans store it into a variable named homeNav. (Tip: Even though we urge you to find the class of the 'Home' element, If you can't find it, it is 'page-link')
4. Create a new icon using creating a new node method and use the class name 'fa fa-home'.
5. Append the new icon to your homeNav element.

```javascript
// Title
var postTitle = document.querySelector('h2');
postTitle.textContent = 'I became a developer in a day!';
// Icon
var homeNav = document.querySelector('.page-link');
var newIcon = document.createElement('i');
newIcon.className = 'fa fa-home';
homeNav.appendChild(newIcon);
```
{: .solution }
