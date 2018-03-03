---
layout: step
number: 12
part: 2
title: html
permalink: step12/

#keywords:
#  - term:
#    define: 

---



#### Hypertext Markup Language (HTML)

As you noticed, HTML is divided into elements that look like this:

```html
<header></header>
<p></p>
```
etc

We call these "tags". Each element on the page has an opening and closing
tag. (NOTE: Some tags are self-closing like `<img>`.)

The outermost tag in every HTML file is `<html>`.

Inside the `<html>` tag you will find a `<head>` and `<body>` tag.

`<head>` we keep meta information, the page title and links to css files.
`<body>` contains our actual content.

For a full list of HTML tags, you can refer to this listing:
http://htmldog.com/references/html/tags/

HTML tags may contain attributes:

```html
<div class="settings"></div>
```

This div has an attribute named class that has a value: 'settings'.

#### Accessing Elements

##### Document Object Model (DOM)

The DOM is the javascript representation of the active HTML file. The DOM
is available under a special global variable called 'document'. We can get
specific nodes (page elements) with the DOM method: 'querySelector'.

Let's get our twitter link from the page.

```javascript

var ourTwitter = document.querySelector('.twitter');
// We can store page elements in variables, just like any other value!
```

##### Getting Similar Elements

We also can get all elements with the same tag. In our footer, we have an
unordered list (`<ul>`), with three list items (`<li>`) inside. Let's get all
of them.

```javascript

// Will get all <li> from the page
var mediaLinks = document.querySelectorAll('li');
```


Ok, so far so good. But what if we want only the text from our 'h1' tag?
Page elements have another property for this: '.textContent'

```javascript
ourTwitter.textContent;
// We will get text 'Twitter: @NodeGirlsSydney @NodeGirlsMelb'
```

#### Editing Page Content

We can change the content of the tags using the same .textContent property.

```javascript
ourTwitter.textContent = '@ButenkoMe';
console.log(ourTwitter.textContent);
// guess what we will see on the page and in the console?
```

#### Editing Attributes

We can also change and set attributes on our elements.

```javascript
var ourTwitter = document.querySelector('.twitter');
ourTwitter.id = "surprise";
```

#### Creating New Nodes (Elements)

The document object also provides ways to create nodes from scratch:

document.createElement(tagName); --> create the element
document.createTextNode(text); --> what text it should contain
document.appendChild(node); --> append it to the document

```javascript
var pageNode = document.querySelector('body');
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);
pageNode.appendChild(newParagraph);
```


----
#### TASKS TO DO

1. Now it's your turn — get the h1 tag from the page and store it into amvariable named ourTitle. console.log it and see what you get!
2. 
* Get all `<li>` elements from the page in a variable named mediaLinks.
* Now console.log mediaLinks.length
* iterate through each mediaLinks item and console.log it. (Remember loops)
3. 
* Get the content of 'h1' element and console.log it.
* Make up a new title! Change the content of our 'h1' to anything you like.

4. Update the value of the 'src' attribute of our img tag to "img/kittens.jpeg"
5. Well, do you still have kittens on your screen? I like both logo and
kittens. Let's create a new image that sources our original logo file, and
put it into a header.

P.S. You also can give styles to the new node that you create.