---
layout: step
number: 19
level: 3
title: Javascript in the Browser
permalink: step19/
---

### Document Object Model (DOM)

The DOM is the JavaScript representation of the active HTML file. The DOM
is available under a special global variable called `document`. We can get
specific _nodes_ (HTML elements in our page) with the DOM method: `.querySelector`.

Let's get our Twitter link from the page.

```javascript
const ourTwitter = document.querySelector(".twitter");
```

We can store page elements in variables, just like any other value!
However, note that a page element is an object, which is a "reference
type" just like arrays (see Level 2 Step 15). That means you can the change
attributes and properties of the element, but not the variable itself.
You will see this in action in this section.

##### Challenge:
Now it's your turn — get the `h1` tag from the page and store it into a
variable named ourTitle. Console.log it and see what you get!

<details><summary>Answer</summary>
<code>
const ourTitle = document.querySelector("h1");
</code>
</details>

### Getting Similar Elements

We also can get all elements with the same tag. In our footer, we have an
unordered list `<ul>`, with three list items `<li>` inside. Let's get all
of them as an array of page elements. When we want to get multiple elements
we use the method `.querySelectorAll`, which gives us a list of matches.

```javascript
// Will get all <li> from the page
const mediaLinks = document.querySelectorAll('li');
```

##### Challenge: 
Get all `<li>` elements from the page in a variable named mediaLinks. 
Console.log the length of the array.

Do you remember loops from Level 2? Using this knowledge, iterate
through each mediaLinks item and console.log it.

<details><summary>Answer</summary>
<code>
const mediaLinks = document.querySelectorAll('li');
<br/>
console.log(mediaLinks.length)
<br/>
for(let i = 0; i < mediaLinks.length; i++){
    <br/>
    console.log(mediaLinks[i]);
    <br/>
}
</code>
</details>


### Element Properties

Ok, so far so good! But what if we want only the text from our `h1` tag?
Page elements have another property for this: `.textContent`.

```javascript
ourTwitter.textContent;
// We will get the text 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'
```

##### Challenge: 
Get the text content of our `h1` element and console.log it.

<details><summary>Answer</summary>
<code>
const ourTitle = document.querySelector("h1");
<br/>
console.log(ourTitle.textContent);
</code>
</details>

### Editing Page Content

We can change the content of the tags using the same `.textContent` property.

```javascript
ourTwitter.textContent = '@ButenkoMe';
console.log(ourTwitter.textContent);
// Guess what we will see on the page and in the console?
```

##### Challenge: 
Make up a new title! Change the content of our `h1` to anything you
want.

<details><summary>Answer</summary>
<code>
const ourTitle = document.querySelector("h1");
<br/>
ourTitle.textContent = "This is my title not yours!"
<br/>
console.log(ourTitle.textContent);
</code>
</details>


### Editing Attributes

We can also change and set attributes on our elements.

```javascript
const ourTwitter = document.querySelector('.twitter');
ourTwitter.id = "surprise";
```

##### Challenge: 
Update the value of the `src` attribute of our `img` tag to
`"assets/kittens.jpeg"`.

<details><summary>Answer</summary>
<code>
const imgTag = document.querySelector("img");
<br/>
imgTag.src = "assets/kittens.jpeg";
</code>
</details>


### Editing Styles

Let's change some styles. Page elements have a `.style` property. We can
assign styles to the style property using the same names as in CSS files.

(If a CSS property name has `-` in the name — like `font-size` — then the
hyphen will be deleted and the next word starts with a capital instead —
`fontSize`. This pattern of naming is called _camelCase_.)

```javascript
const ourTwitter = document.querySelector('.twitter');
ourTwitter.style.backgroundColor = 'white';
```

##### Challenge: 
Get any element on the page and change some styles for it.

<details><summary>Answer</summary>
<code>
const chromeLink = document.querySelector("a");
<br/>
chromeLink.style.color = "#FFCC00"
</code>
</details>

### Creating New Nodes (Elements)

The document object also provides ways to create nodes from scratch:

```javascript
document.createElement('div'); // create a new element called 'div'
document.createTextNode('foobar'); // create a new text containing 'foobar'
existingNode.appendChild(newNode); // add newNode to the end of existingNode
```

Here are some practical examples:
```javascript
const pageNode = document.querySelector('body');
const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);
pageNode.appendChild(newParagraph);
```

##### Challenge: 
Do you still have kittens on your screen? I like both logo and kittens.
Let's create a new image with our original logo file as the source, and
put it into our header.
You can also give styles to the new node that you create.

<details><summary>Answer</summary>
<code>
const pageNode = document.querySelector('body');
<br/>
const newImage = document.createElement('img');
<br/>
newImage.src = "assets/logo_muses_color.svg";
<br/>
pageNode.appendChild(newImage)
</code>
</details>