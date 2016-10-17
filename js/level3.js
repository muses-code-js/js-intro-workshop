// Level 3

/*
   WooHoo, you got so far on your first day! Great! But we still have more things for you.
   First of all, go to index.html file and replace our script from level2.js to current
   file - level3.js.
   PS: if you want few js files to be used simply add more scripts with those files.
 */

/*
    Here we will talk a bit more about HTML, CSS and how JS can interact with them.
    So HTML - stands for Hyper Text Markup Language. It is a structure of the elements
    on the page.

    HTML:
    As you noticed it is divided on elements that looks like that:
    <header></header>, <p></p> etc - it is tags, each element on the page has opening
    and closing tag (NOTE: some tags are self-closing like <img>). Whole html file is wrapped
    in tag <html>, which contains of <head> and <body> tags. In <head> we keep different
    meta information, title and link to css files. <body> contains our actual content.
    Tags has a set of names which you can find here http://htmldog.com/references/html/tags/

    Any tag also can have different attributes (<div class="settings"></div> - tag div
    has a attribute class, that has name = 'settings').

    CSS:
    Stands for Cascading Style Sheets. CSS describes how HTML elements are to be
    displayed on screen. As you can see in css file when we need to target any element
    we can simply refer to the tag itself (footer{color: white;}), or to any attribute (class
    via '.settings', id via '#logo' etc). The list of css properties is huge, you can check
    on it here https://www.w3.org/TR/CSS21/propidx.html but don't worry, you don't need to
    remember it all.
    PS: difference between id and class is that tag with specific 'id' should be unique on
    the page, but many tags can have same class within the same page. Use 'id' only if
    you really need it!!
 */

/*
    Phew, lot's of new things. But let's come back to javaScript and see how we can interact
    with html.
 */


/*
    Accessing page objects.
    DOM - Stands for Document Object Model. It defines the logical structure of documents
    and the way a document is accessed and manipulated. So let's get things from the page
    and play around.
    To find and get nods(page elements) we can use querySelector one of the functions of
    JavaScript (in old browsers it might not work, in this case getElementById,
    getElementsByTagsName etc should be used).
    Let's get our twitter from the page.
    Example:
    var ourTwitter = document.querySelector('.twitter');
    //we can store it in variable so we can use it after
 */

//TODO: Now it's your turn - get the h1 tag from the page and store it into variable named
//ourTitle. console.log it and see what you will get.










/*
  Getting a set of elements
  We also can get all elements with the same tag. So in the footer we have <ul>(unordered list)
  with 3 <li>(lists) inside. Let's get all of them
  Example:
  var mediaLinks = document.querySelectorAll('li'); //will get all <li> from the page
 */


//TODO: get all <li> elements from the page in variable named mediaLinks




//TODO: now console.log mediaLinks.length




//TODO: do you still remember arrays that we had in previous sections? Using this knowledge
//iterate through whole meadiaLinks items and print them out.









/*
    Ok, so far so good. But what if we need only content of our 'h1' tag? We have
    another property for it - .innerHTML
    Example:
    ourTwitter.innerHTML;
    //we will get text '@NodeGirlsSydney'
 */


//TODO: get the content of 'h1' element and console.log it










/*
  Change content
    we can change the content of the tags using the same .innerHTML property
    Example:
    ourTwitter.innerHTML = '@ButenkoMe';
    console.log(ourTwitter.innerHTML);
    //guess what we will see on the page and in console?
 */


//TODO: change content of the 'h1' with anything you like





/*
  Changing properties.
  We also can change and set attributes to our elements.
  Example:
  var ourTwitter = document.querySelector('.twitter');
  ourTwitter.id = "surprise";
 */


//TODO: replace the value of 'src' attribute for our img tag with "img/kittens.jpeg"





/*
  Accessing and changing styles
    So, let's do some css changes. We can do it with help of '.style' property and
    giving the css property just like we do in css file, the only change here is is - if is css
    property name has '-' in the name (like font-size etc) then dash will be deleted and
    next word starts with capital (fontSize) - this way of naming is called the CamelCase :)
    Example:
    var ourTwitter = document.querySelector('.twitter');
    ourTwitter.style.backgroundColor = 'white';
 */


//TODO: get any element on the page and change some styles for it







/*
  Creating new nodes (elements)
    The document object also provides ways to create nodes from scratch:
    document.createElement(tagName); --> create the element
    document.createTextNode(text); --> what text it should contain
    document.appendChild(); --> append it to the document
    Example:
    var pageNode = document.querySelector('body')[0];
    var newParagraph = document.createElement('p');
    var paragraphText = document.createTextNode('Squee!');
    newParagraph.appendChild(paragraphText);
    pageNode.appendChild(newParagraph);
 */


//TODO: Well, do you still have kittens on your screen? I like both logo and kittens.
//Let's create a new image with source logo and put it into header.
//PS: you also can give styles to the new node that you create.


















////////////////////////////////////////////////////////////////////////
//Congratulations! You have finished Part 3 of JavaScript Basics!     //
// Stand up, stretch your legs, celebrate your achievement.           //
// I believe you deserve on some sweets today!                        //
////////////////////////////////////////////////////////////////////////


