---
layout: step
number: 1
part: 0
title: Making a webpage
permalink: step1/

keywords:
#  - term: package.json
#    define: A `package.json` is the file used to store information about a Node.js project, such as its name and its dependencies. Read more [here](https://docs.npmjs.com/files/package.json).

---

<!-- https://developer.mozilla.org/en-US/docs/Web/HTML -->

We are going to be learning about JavaScript by using it in web pages.  This is the most common use of JavaScript.

To do that we will create a very simple webpage and use it to load up our Javascript in the browser.

So what actually is a web page?

It's just a text file with two different types of content in it.

1. text content, ie the actual words that will be displayed
2. HTML tags, which tell the browser how the content is supposed to be displayed.

It's easier to demonstrate than explain, so lets create one.

1. **Create a folder for this workshop.**

    Make a folder somewhere on your computer and name it `js-intro-workshop` or whatever makes sense for you.  This folder can be on your desktop, or in My Documents, or where ever you want.  Just so long as you know where it is and it is somewhere that makes sense for you.  This folder is going to hold all the files that we create today.

2. **Open that folder in Brackets.**

    Open Brackets.  Go to  `File` `->` `Open Folder`, browse to the folder that you created and click open.  You'll see the name of your folder on the left.

3. **Create a new file called `index.html`**

    Right click on the dark grey area just under the name of your folder and select `New File`. When prompted for the path, type `index.html` and press enter.  You'll see this new file `index.html` appear both in the tree-view and also opened in a new editor tab.

4. **Add some HTML**

    Type or paste the following content into `index.html` and save it.

    ```html
    <html>
      <head>
        <title>My first webpage</title>
      </head>
      <body>
        <h1>Muses Code JS</h1>
        <p>Hi there!</p>
      </body>
    </html>
    ```

Ok so now we have a very simple webpage.  How do we see that in our web browser?  Just simply click the `Live Preview` icon (Like Harry Potter scar) on the right side and a browser window will open immediately.


![You will see this page](../assets/intro-html.png){:class="img-responsive"}

---
## So what's HTML?

**HTML** stands for HyperText Markup Language, and it is the language that webpages are written in.  It's the stuff in a webpage that you don't see displayed which the browser uses to know how it is supposed to show everything else.

Unlike a programming language, a markup language isn't a series of instructions but instead it is a way of describing something. In the case of HTML it describes how content should be displayed in a web browser.

HTML is made up of what we call **tags**.  Tags are how we tell the browser what type of content something is in a page.

Lets look at the example above, specically the line:

```html
<h1>Muses Code JS</h1>
```

The content here is the text `Muses Code JS` and it is *"marked-up"* with the `h1` tag.  By *marked-up* we mean that this piece of text is preceeded by an opening tag `<h1>` and following by the corresponding closing tag `</h1>`is a `Header` tag.

There are around 120 tags defined in the current version of HTML (version 5) but many of those are for very specific cases.

Lets look at the tags we used in the example above:

* `<html>` - The root element that contains any other tags
* `<head>` - Tells the browser additional information about the webpage
* `<title>` - Sets the description on the tabs in the browser window to help you navigate between different pages
* `<body>` - All of your content has to be contained within this tag.
* `<h1>` - Level 1 heading.  There are six levels of headings, `<h1>` through to `<h6>`.
* `<p>` - a paragraph
