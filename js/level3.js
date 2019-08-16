// Level 3

/*
    Introduction
    ============

    WooHoo, you got so far on your first day! Great!

    But we still have more things for you. First of all, open index.html, and
    replace our script from level2.js to our current file — level3.js.

    TIP: If you want to use multiple js files simultaneously, simply add more
    script tags.
*/

/*
    Lets talk a little more about HTML, CSS, and how we can interact with them
    in JavaScript.


    Hypertext Markup Language (HTML)
    --------------------------------
    As you noticed, HTML is divided into elements that look like this:

    <header></header>
    <p></p>
    <img />

    We call these "tags". Each element on the page has an opening and closing
    tag. (NOTE: Some tags are self-closing like <img />, this means we don't
    need a matching end tag.)

    The outermost tag in every HTML file is <html>.

    Inside the <html> tag you will find a <head> and a <body> tag.

    In <head> we keep meta information, the page title and links to css files.
    <body> contains our actual content.

    For a full list of HTML tags, you can refer to this listing:
    http://htmldog.com/references/html/tags/

    HTML tags may contain attributes:
    <div class="settings"></div>

    This div has an attribute named 'class' that has a value: 'settings'.


    Cascading Style Sheets (CSS)
    ----------------------------
    CSS describes how HTML elements look.

    CSS files consist of 'declaration blocks'. Each declaration block is
    composed of a selector and a set of visual style rules. A declaration looks
    like this:

    [selector] {
      style-name: value;
      style-name: value;
      style-name: value;
    }

    Selectors specify which elements the visual styles are applied to.

    The most basic selectors refer to elements by their tag-name. They look
    like this:

    body {
      background-color: white;
    }

    Selectors can also refer to elements by their class attribute like this:

    .settings {
      margin: 0;
    }

    or IDs, like this:

    #logo {
      text-align: center;
    }

    The list of css properties is huge, you can read more here, if you're
    interested:
    https://www.w3.org/TR/CSS21/propidx.html

    Don't worry, you don't need to remember all of this immediately!
*/


/*
    Phew, lots of new things. Let's come back to JavaScript and see how we can
    interact with HTML.
*/


/*
    Accessing Elements
    ==================

    Document Object Model (DOM)
    ---------------------------
    The DOM is the JavaScript representation of the active HTML file. The DOM
    is available under a special global variable called 'document'. We can get
    specific nodes (page elements) with the DOM method: '.querySelector'.

    Let's get our twitter link from the page.

    Example:

    const ourTwitter = document.querySelector('.twitter');

    // We can store page elements in variables, just like any other value!
    // However, note that a page element is an object, which is a "reference
    // type" just like arrays (see level 2). That means you can change
    // attributes and properties of the element, but not the variable itself.
    // You will see this in action in this section.
*/

// TODO: Now it's your turn — get the h1 tag from the page and store it into a
//       variable named ourTitle.
//       console.log it and see what you get!






/*
    Getting Similar Elements
    ========================

    We also can get all elements with the same tag. In our footer, we have an
    unordered list (<ul>), with three list items (<li>) inside. Let's get all
    of them as an array of page elements. When we want to get multiple elements
    we use the method '.querySelectorAll', which gives us a list of matches.

    Example:

    // Will get all <li> from the page
    const mediaLinks = document.querySelectorAll('li');
*/

// TODO: Get all <li> elements from the page in a variable named mediaLinks.






// TODO: Now console.log mediaLinks.length






// TODO: Do you remember loops from level 2? Using this knowledge, iterate
//       through each mediaLinks item and console.log it.






/*
    Element Properties
    ==================

    Ok, so far so good. But what if we want only the text from our 'h1' tag?
    Page elements have another property for this: '.textContent'

    Example:

    ourTwitter.textContent;
    // We will get the text 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'
*/

// TODO: Get the content of our 'h1' element and console.log it.






/*
    Editing Page Content
    ====================

    We can change the content of the tags using the same '.textContent' property.

    Example:

    ourTwitter.textContent = '@ButenkoMe';
    console.log(ourTwitter.textContent);
    // Guess what we will see on the page and in the console?
*/

// TODO: Make up a new title! Change the content of our 'h1' to anything you
//       want.






/*
    Editing Attributes
    ==================

    We can also change and set attributes on our elements.

    Example:

    const ourTwitter = document.querySelector('.twitter');
    ourTwitter.id = "surprise";
*/

// TODO: Update the value of the 'src' attribute of our 'img' tag to
//       "img/kittens.jpeg"






/*
    Editing Styles
    ==============

    Let's change some styles. Page elements have a '.style' property. We can
    assign styles to the style property using the same names as in CSS files.

    (If a CSS property name has '-' in the name — like font-size — then the
    hyphen will be deleted and the next word starts with a capital instead —
    fontSize.  This pattern of naming is called CamelCase.)

    Example:

    const ourTwitter = document.querySelector('.twitter');
    ourTwitter.style.backgroundColor = 'white';
*/

// TODO: Get any element on the page and change some styles for it.






/*
    Creating New Nodes (Elements)
    =============================

    The document object also provides ways to create nodes from scratch:

    document.createElement('div'); // create a new element called 'div'
    document.createTextNode('foobar'); // create a new text containing 'foobar'
    existingNode.appendChild(newNode); // add newNode to the end of existingNode

    Example:

    const pageNode = document.querySelector('body');
    const newParagraph = document.createElement('p');
    const paragraphText = document.createTextNode('Squee!');
    newParagraph.appendChild(paragraphText);
    pageNode.appendChild(newParagraph);
*/

// TODO: Do you still have kittens on your screen? I like both logo and kittens.
//       Let's create a new image with our original logo file as the source, and
//       put it into our header.
//
// P.S. You can also give styles to the new node that you create.






////////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Level 3 of JavaScript Basics!       //
// Stand up, stretch your legs, and celebrate your achievement.           //
// I believe you deserve some sweets today!                               //
////////////////////////////////////////////////////////////////////////////
