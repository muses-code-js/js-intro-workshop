---
layout: step
number: 12
part: 2
title: CSS
permalink: step12/

---
Now it's time to work on HTML and do really fun stuff!

We've covered some basic concepts about HTML earlier. If you still feel confused about it,
feel free to grab a mentor and ask your questions.

For building a website, we basically use 3 main technologies: HTML, CSS and JAVASCRIPT.

Briefly, HTML is what content and what HTML tags your website includes, CSS is how your website looks like, JavaScript is how the interactions work in your website.

HTML should reinforce the semantics of the information in webpages while CSS should be used to define its presentation or look.

Here is an example of how a piece of a webpage looks like with CSS and without CSS.

#### HTML with CSS

![HTML with CSS](../assets/html-with-css.png){:class="img-responsive"}

#### HTML without CSS
![HTML without CSS](../assets/html-without-css.png){:class="img-responsive"}

---


They exactly have the same HTML but they look different. Because the first one has CSS to be styled while the second one hasn't.

The source of this piece is [here](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_layout_float). Feel free to play with it and see how all these bits work together.

## So what's CSS then?

CSS describes how HTML elements look. CSS files are comprised of `declaration blocks`. Each declaration block is
composed of a selector and a set of visual style rules. A declaration looks
like this:

```css
[selector] {
	style-name: value;
	style-name: value;
	style-name: value;
}
```

Let's have a look at our HTML file (index.html) that we created in Part 0.

```html
<html>
      <head>
        <title class="website-title">My first webpage</title>
      </head>
      <body>
        <h1 id="muses-codejs-title">Muses Code JS</h1>
        <p>Hi there!</p>
      </body>
</html>
```

Selectors specify which elements the visual styles are applied to.
The most basic selectors refer to elements by their tag-name. They look
like this:

```html
body{
	background-color: white;
}
```

This CSS code block sets the background color of the body to white.

As you might have realised, we have some different keywords in our HTML: `class` and `id`.

Selectors can also refer to elements by their class attribute like this:

```css
.website-title {
	font-size: 25px;
}
```

or IDs, like this:

```css
#muses-codejs-title {
	text-align: center;
}
```

NOTE: To select an element by its class, we use `.`, to select by its id we use `#`.

The list of css properties is huge, you can read more [here](https://www.w3.org/TR/CSS21/propidx.html), if you're interested.

Don't worry, you don't need to remember all of this immediately!

Phew, lots of new things. Let's come back to javaScript and see how we can
interact with HTML.
