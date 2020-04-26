---
layout: step
number: 18
level: 3
title: HTML & CSS
permalink: step18/
---

WooHoo, you got so far on your first day! Great!

Lets talk about HTML, CSS, and how we can interact with them
in JavaScript.

### Hypertext Markup Language (HTML)

As you noticed, HTML is divided into elements that look like this:

```html
<header></header>
<p></p>
<img />
```

We call these `tags`. Each element on the page has an opening and closing
tag. (NOTE: Some tags are self-closing like `<img />`, this means we don't
need a matching end tag.)

The outermost tag in every HTML file is `<html>`.

Inside the `<html>` tag you will find a `<head>` and a `<body>` tag.

In `<head>` we keep meta information, the page title and links to CSS files.
The `<body>` section contains our actual content.

For a full list of HTML tags, you can refer to [this listing](http://htmldog.com/references/html/tags/).

HTML tags may contain attributes:
`<div class="settings"></div>`

This `div` tag has an attribute named `class` that has a value: `settings`.


### Cascading Style Sheets (CSS)

CSS describes how HTML elements look.

CSS files consist of `declaration blocks`. Each declaration block is
composed of a selector and a set of visual style rules. A declaration looks
like this:

```css
[selector] {
    style-name: value;
    style-name: value;
    style-name: value;
}
```

Selectors specify which elements the visual styles are applied to.

The most basic selectors refer to elements by their tag-name. They look
like this:

```css
body {
    background-color: white;
}
```

Selectors can also refer to elements by their class attribute like this:

```css
.settings {
    margin: 0;
}
```
or IDs, like this:
```css
#logo {
    text-align: center;
}
```

The list of css properties is huge, you can read about it more 
[here](https://www.w3.org/TR/CSS21/propidx.html) if you're interested.

_Don't worry, you don't need to remember all of this immediately!_

Phew, lots of new things. Let's come back to JavaScript and see how we can
interact with HTML.