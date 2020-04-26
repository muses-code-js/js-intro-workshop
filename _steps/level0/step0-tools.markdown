---
layout: step
number: 0
level: 0
title: Tools of the Trade
permalink: step0/

keywords:
#  - term: package.json
#    define: A `package.json` is the file used to store information about a Node.js project, such as its name and its dependencies. Read more [here](https://docs.npmjs.com/files/package.json).

---

<script>
console.log('oh hey there!')
</script>

One of the really nice things about Javascript (and web design in general really) is how little you need to get started.  

There are many, many tools that you *can* learn, which can make things easier when you start to build bigger more complex applications - but you don't actually need them.

The only two things you really need are:

1. an editor
2. a web browser and its developer tools.

## Your Editor

The first thing you need is an *editor* to write your Javascript source code in.

Any program that can edit plain text files will work. Most operating systems have one installed by default, like NotePad on Windows or TextEdit on macOS.  You cannot use a word processor like Microsoft Word, Apple's Pages, or OpenOffice to write source code, because these programs include all sorts of information instead of just plain text.

While NotePad or TextEdit will do the job, you can download free and open-source editors which provide some additional features to make writing program source code a little more pleasant.  

If you are just getting started we recommend [VS Code](https://code.visualstudio.com/), a free code editor for Windows, macOS, and Linux.

For convenience, we will assume that you are using VS Code for the rest of this workshop.  The same principles apply to most editors although the specifics of menus will probably vary a little.

## Web Browser Developer Tools

Since you're viewing this webpage, we are going to assume you already have a web browser.  :smile:

All of the modern mainstream web browsers (Chrome, Firefox, Safari, Internet Explorer, Edge) include their own set of Developer Tools AKA Dev Tools.  

Dev Tools provide you a way to see what is going on behind the scenes in whatever web page you currently have open in the browser.

Browser Dev Tools are useful for:

1. Trying to figure out why your page isn't doing the thing you expect it to do (AKA debugging)
2. Checking out the code that makes up other people's web pages to learn how they did a particular thing.

Different browsers generally cover the same basic functionality with their Dev Tools, but they each do it in their own way with slightly different interfaces and with some features unique to themselves.  

#### Opening Dev Tools

Depending on your browser of choice, the way to open the Dev Tools will be a little different.  But there will generally be a menu item somewhere in addition to keyboard shortcuts.  

The Dev Tools open in a new panel that is attached ("docked") to your current browser tab.  This panel will usually have a set of tabs for different features and a couple of controls for closing it, switching between being docked horizontally or vertically, and detaching into a completely separate window.

##### Chrome

Click on the Menu icon, select More Tools, and then Developer Tools.  Or press `ctrl-shift-i`.

##### Firefox

Click on the Menu icon, select Web Developer, and then Toggle Tools.  Or press `ctrl-shift-i`.

##### Safari

Safari's Dev Tools are disabled by default. To enable them go to Safari's Preferences and enable it on the Advanced tab.

Then you will be able to access the Dev Tools using the Develop menu.

##### Internet Explorer & Microsoft Edge

Press the `F12` button on your keyboard while you are in Internet Explorer or Microsoft Edge. This might not work if your F keys are bound to other functions like volume or media control - in this case, you need to press `fn-F12`.

#### Check out the console

If you are feeling a little overwhelmed by the Dev Tools, don't worry.  We are only really going to use one Dev Tools feature today: the console.  

The console is used to display messages, including errors.  When debugging you will frequently make use of the console to display information to help you.

Open your Dev Tools on this page, and go to the Console tab.  

You should see the message `oh hey there!` which is from a little bit of JavaScript in this page.

You can also run JavaScript commands by typing them directly into the console.

Type the following into the console and press enter to see a lovely(or not) shade of green.

```JavaScript
document.body.style["background-color"] = '#86ff4a'
```

Neat.

Now refresh the page and you will see the original page again.

What you did with that command was modify the copy of the webpage that your browser had.  Refreshing the page causes the browser to get a fresh new copy of it.

It's important to note that any changes made to a page in the Dev Tools exist only in that tab in the browser.  They will not be saved back to the original webpage.
