# js-f1rmfp

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-f1rmfp)

July.15.2021

Comparison Operators

== is equal to

=== is exactly equal to

!= is not equal to

!== is strictly not equal to

> greater than

< less than

>= greater than or equal to

<= less than or equal to

Logical operators

&& means AND
|| means OR
! means NOT

Function Declaration: function myFunction(){}

Function Expression: const myFunction = function(){}

Call Function: myFunction()

A function that is a property of an object is called a method.

**************************************************************

We can access specific parts of the DOM with some built-in JavaScript methods on the document object.

document.getElementById('myID') finds an element with the ID of 'myID'

document.getElementsByTagName('p') finds the paragraphs

document.getElementsByClassName('hey') finds all elements with a class of 'hey'

If you want to be more general, you can use the following:

document.querySelector('input[type=submit]') finds the first matching input[type=submit]

document.querySelectorAll('.hey') also finds all elements with a class of 'hey' (note that this one requires the dot)

https://developer.mozilla.org/en-US/docs/Web/API/Document  << list of stuf for document object
------------------------------

Terminology:

Define: to create a function
Parameter: a variable (placeholder) for the arguments when defining a function
Argument: a value provided to a function
Pass: to provide arguments to a function
Call: ask JavaScript to evaluate a function
Return: pass back a value

EX:

const add = function(a, b) {
  return a + b;
}

add(2, 4); //6

So first we define a function called "add" that takes the parameters a and b 
and returns their sum. Then we call the function and pass it the values 2 and 4 
as arguments. Inside the function, a refers to the value 2 and b refers to the 
value 4. The function returns the value 6.

Syntax
The syntax for creating an object literal looks like this:

const myObject = {
    propertyOneName: propertyOneValue,
    propertyTwoName: propertyOneValue,
    propertyThreeName: propertyOneValue,
};

---------------------------------------------

3 ways to declare variables:

Var - set a variable
Let - let statement (let age = 300)
Const - set a constant (example = true or = false) can also
be used to declare a function

var and let can be updated, const cannot

Wes uses Const by default, updates to let if later on the code
needs more fluidity - let is used for edge cases

*the semicolon (;) ends a javascript statement

example: 

var firstName = 'Enzo';

There are also function call statements 

ex:

Console.log(firstName);

Codeblocks contain statements and are opened and closed
with {code goes here} they are bound by the brackets and do not
need to be closed with semicolons ;

ASI: auto-matic semicolon insertion = advanced technique
know how javascript runs to make decision on when to skip ; 

Use Case: 'use strict';   <--This sets your .JS to only excute
if things are done perfectly. Helps with bugs but is harder

July.16.2021

SNOB N US - nmemonic device for remembering types of values

Strings - text in quotes
Number - with or without decimals
Objects - special case, technically everything is an object
Boolean - true or false

Null - set to nothing

Undefined - also set to nothing 
Symbol - unique ID like a stream key

More on strings:

Three ways to string 'single quote', "double quote", and `back tick`

Wes prefers single quote and back tic - in sentences, single
quotes often rep apostrophes, this can triger errors in JS
 
\ is used to fix apostrophe problems in strings ex:

const sentence = 'she\'s so cool';

concatination = using the plus sign to add new strings or values

Benefit of back tics`` = insert variable within a string using ${}

ex: const hello = `my name is ${name} what up`

^ called interpelation

const html = `

<div>
	<h2>${name}<h2>
	<p>${hello}<p>
<div>

`;  

^ example use of backtics

More on numbers:

To avoid bugs dont use math in strings, work with pure numbers

Some popular use cases:

Math.round() - rounds decimal
Math.floor() - rounds to lower
Math.ceil() - rounds to higher
Math.random() - random number from 1 - 10

* side note % percent sign is called the modulo operator
- it can help provide the difference in an equations
- ex: function calculates 20 / 3 % finds diff of 2

**The Modulo comes up in coding assessments 

const smarties = 20;
const kids = 3;

const eachKidGets = Math.floor(smarties / //<<Rounds output

const dadGets = smarties % kids;   //< finds remaider


* Dont store money in dollars and cents in JS - computers
can only rep numbers as integers / whole numbers
-Wes works around this by storing value of money in total cents

*Look up floating point math - computers can only store numbers
in intergers, they need methods to work with decimals

NaN = not a number

More on objects (VIDEO 9):
Groups together variables inside an object
-order doesnt matter in an object, use an array to order

One common way to create an object is with {} curly brackets

Inside of objects are PROPERTIES and VALUES

example:

const person {

	first: 'Enzo'
	last: 'Carletti'
	age: '100'

}

More on Null or Undefined:

null is a value of nothing but underfined is a variable with nothing
set to it (you forgot to add a value somewhere). 

You cannot use const with an undefined variable. 

More on booleans:

Like a light switch - on or off

Most used with Let and if statements 
Also used as a gate: ex age greater than 19 to access a site

flag variables- set to true or false when an event is flagged.

=== will check that the value and type are equalS

== may cause bugs as it will let strings equal numbers

Booleans are important for flow control - programming logic

Functions pt.1 VIDEO 12

functions group together statements
-  arguments are data passed into function
- statements perform the work
- can return a value

funtions are different from methods
the data passed to a function is called an argument

Functions can be grouped together like a silo'd project
ex a car will have grouped functions for stearing, breaking,
fuel injection, and bluetooth, etc

While each group of functions controls a specific component, all
come together to make the car work

There are thousands of available functions within JS
You can also create your own functions

Wes: The real power of JS comes from defining your own functions

VIA MDN Docs, you can quickly see what the thousands of available 
functions in the browser accept. Most take values AND objects

ex: func (1,2)
    func ({Name: 'Joe'})	
	

Some variables stored within functions will not be accessable
to run in the console - this refers to the scope of a variable

Funtions are defined than given paramaters (author what it does)
Paramaters are placeholders for arguments(values) that will  
later be placed into your function as it runs

For the numerology app I'll build, functions will rep the formulas
while paramaters hold the place of arguments (numbers) the user
will input 

Capture values - it's a way to move values where you need them

July.17.2021
Not good to reach for data outside of a function

Parameters within a function are scoped within that function
therefore, you can use the same title of a paramater in seperate
functions and incounter no problems

JS functions are values in themselves - functions can be
passed into other functions, 

They can be handled like other kinds of data.

You can declare functions with:
*The function keyword ex: function myProgram(paramaters){}

*anonomyous function - keyword (paramaters)

*function expression - store a function as a value in a variable

*arrow functions (a type of anonomous function) - shortens basic
programs by just returning a variable instead of declaring that
variable then asking for a return.

Ex: const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

^ this is called an implicit return - this equation is so simple
JS only requires one line of code to infer its use

* IIFE functions = Immediately Invoked Function Expression
 
paranthesis() will always run 1st in JS - wrapping a function in
() and placing a (); at the end of a function will have it run

* Methods - a function that lives inside of an object

ex console is an object and .log is a function

you create a property in your function and set it to a function
functception!

* callback functions - when someone clicks run a program
when x amount of time passes run program

- In JS functions and be moved around like any other piece of data
this is not the case for all languages
	- functions are first class citizens 

Implicit return --> use the return keyword to call a return
exp;icit returm --> infer return without keyword

July.18.2021

On debugging VID 16:

*helpful console methods
-console.error - sets UI to error for bad inputs
-console.warn - warning UI
-console.table - tables your function data
-console.count - counts the amount of times a function is run
-console.group - wraps function variables so that each time the
program is looped the arguments are stored together in a tidy
group

* callstack or stacktrace
-When incorrect JS code runs, the console will raise an issue and
outline the corresponding lines of code that are bugged. 
ex: reference error: doesnt exist is not defined 

	at greet   (debugging.js  :47)
[name of function] [title of doc] [line of code]

it outlines how and where functions are bugging out if you read
it line by line

*grabbing elements
on a website in the inspector, use cursor to select and element
on the page the type $0 in the console - it will tell you everything
about that element 

From there $1 will give you the second last element you selected

$ (a page element) - will find the 1st element on the page with
your chosen element

$$ (a page element) - will find all the elements youve chosen

- does not work on Jquery pages

* debugger;
- is a statement
- pauses JS from running introduces breakpoint
- turns the console into a debuggin tool

*network tab
shows a breakdown of what documents are part of the site and
what runs when/how long it took. Shows raw data behing everything

*break on attribute
-select an element in Dev tools - instead of reading through JS
you simply add a break point to the element causing problems

*SCOPE
- answers, where are my variables available to me?

GLOBAL SCOPE - a variable created out in the open

- not inside any function or method, etc
- these kinds of variables will be able to be called anywhere
ex const firstName = 'Enzo'
-in a browser the global scope is attacked to the keyword window
typing window into the console and opening the arrow menu will
display you all the globally available functions ex blur()

making global variables is not a best practice -

BLOCKED SCOPE - {} variables declared within curly brackets
{} are gates, they keep the variables in the block

side note: always use const by default, let to reassign, dont use
var unless its for a specific usecase

var variables are not block scoped, they are function scoped

lexically scoped is JS: it cares about where things are defined
not where they are run

*Hoisting

allows you to access functions and variables before they've been
created

JS the compiler will take all your function declarations and move them
to the top of the file - this hoists the code upwards so that
undeclared variables run

Wes's approach:
Define functions, then use them
or put functions in a module then import as they are needed in a file
Wes doesn't use hoisting often

- hoisting can be useful if you're working with a team 

They can read the declaration and understand what it does,
then go to the functions and read how the file does it

VARIABLE HOISTING

var age;    < - variable set, var as a keyword is function scoped and can over come block scope
console.log(age);   < -- call
age = 10;           < -- hoisted argument

not useful unless troubleshooting

*closures
JS can create functions inside functs - it can reach out to the
parent function and find the parameters needed through memory

- can be used to create private variables

July.20.2021

DOM - Document object model VID 20

in the browser console you can access info with terms like
navigator, document, window, innerWidth

*SELECTING ELEMENTS
watch where your .js file is loaded into a document
best practice is to put the script tag below your last <body/> tag

document.addEventListener('DOMcontentLoaded', init);

^one work around is to wrap your JS in an init function then
close the document with the above code

this causes the browser to load content first then run the 
programs 

JS and CSS selectors are the same 

document.querySelector('element to select like p div quote');

document.queryselectorAll ();

selector and selectorAll are the most popular methods of grabbing
elements

There are also various older methods you can find by typing
getElement to bring down a list of options ex

getElementByID('IdName') <-- no #sign needed

July.22.2021

*The Dom Pt.2 VID 22

const heading = document.querySelector('h2');

console.dir(heading);

^ the above creates a varible, heading and the console.dir 
allows for the h2 tags to be viewed as an object.
This lists all the available properties to select giving easy 
access to object properties (legacy and new, edgecase, etc)

- within this list are helpful object properties to manipulate
the DOM (document object model)

-getters: select a property on the page
-setters: update a property on the page 

MDN web docs is a great resource to understand elements
nodes, objects, selectors, methods, and more
+
https://developer.mozilla.org/en-US/

-if you encounter something that you dont know in code,
start here.

ADDING & REMOVING CLASSES

const pic = document.querySelector('.nice');

^dec  ^given   ^method              ^select class
var   name

console.log(pic.classlist);

^open dev tools to view DOM tooken list
will return an array of all the classes attached to the selected

-Opening the _proto_ list will show you a variety of methods
that can be used 

For the above code ex:
-
pic.classlist.add('open');  < will add a class of open to selected

- a usefull case for this would be to create a CSS style
attached to a specific class then use JS to create fun effects

* example: toggle shapes, animations, text styles etc

helpful selector:

objectName.addEventListener('click' , toggleRound)
				^there are many different events
				this one looks for a users click

WORKING WITH ClASS & ATTRIBUTES

const pic = document.queryselector('.nice');

					^selects class on html side

pic.       classList.add    ('cool');

^keyword   ^ Method ^function ^argument - adding a class of cool 

console.log(pic.classList)

 ^checks if a class of cool has been added beside class nice

- attributes are anything that's provided to an element as additional
info ex: class, source, alt text, etc

- There are also custom attributes and data attributes

1 ex: 

pic.alt = 'cute pup'

pic.     width =     200;

^keyword ^attribute  ^changes width to 200 px

Setters: functions that set new info onto an element
Getters: functions that get data to review correctness or callback 

-For custome attributes:

<img data-name="wes" src="image.erc"/>

DOM PT 3 CREATING HTML ELEVEMENTS WITH JS
 
Main way: 

Document.createElement()

(view full capabilities on MDN docs by mozilla)

-an example:

const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a paragraph';

myParagraph.classList.add('Special');

console.log(myParagraph);

- a good practice as a new dev is to look up unfamiliar methods
in MDN mozilla docs or stack overflow

example: document.body.appendChild();

^ place this into google search to reseach what it can do on the 
DOM

-everytime you append child the DOM repeats whats on the page

- using .appendChild(); to frequently in succession can cause
load times to go up

- one popular method to insert new elements is with:

Element.insertAdjacentElement(position, element);

^supported on all browsers and allows for the specific placement
of elements

const list = document.createElement('ul');

const li = document.createElement('li');

li.textcontent = 'three';

list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

^the above code will insert a bullet point with the string, three
onto the document page

HTML FROM STRINGS & XSS

- vid 26 : xss - cross site scipting without proper setup you leave yourself open
to hackers injecting JS to your users. 

-MySpace let users run their own code to inject, but malicious
folks could add alerts, or other things to mess with folks

-reference security video later in the series

side note: instal emmet plugin to create short cut code

1) declare the elements you'd like to inject into the DOM
ex: width, class, src, etc

2) write code:
(the myFragment is only and ex it can be anything)
const myFragment = document.createRange().
 createContextualFragment(yourHtmlStringFunction);

console.log(myFragment);

^ at this point nothing is added to the page but your code 
should run as viewable elements in the console

3) document.body.appendChild(myFragment);

^will pull the variables declared in step 1 into the DOM

23.07.2021

TRAVERSING AND REMOVING NODES

- Elements contain less selectable items than nodes
nodes offer a complete line by line breakdown of selectable 
items on the page

examples of traversal properties:

.children
.firstElementChild
.lastElementChild
.previousElementSibling
.nextElementSibling
.parentElement
.childnodes
.parentnodes
.nextSibling

^ breakdown of each on MDN docs by Mozilla

.remove();   < - initiates the removal of a selected element

- after its removed, JS memory can restore the removed element
as long as there's reference to it in the code

EVENT LISTENERS VID 29+ 

Keycode.info - gives you a list of events when you click on site

1) you need to "get" the element you wish to add an event listenr

const button = document.querySelector('.butts');
^selects button element

button.addEventListener('click', function() {
	console.log('it got clicked')
});

^sets an anon function


button   < this keyword gets something from the DOM

.addEventListener('click',  < this listens for a specific action 

function() {
	console.log('it got clicked')   < this does something
});						u need done

-Options 2 - declare function outside of listener

function handleClick() {
	console.log('it got clicked'); < creates function
}

button.addEventListener('click', handleClick);

^Gets Element	^listens for click  ^runs function needed

- binding and unbinding means taking a function and connecting
it to an element with an event listener or other

- you can remove (unbind) with .removeEventListener();
-anonymous functions can not be removed with this method

-listening on multiple items:

const buyButtons = document.querySelectorAll('classOfElement');   <queryselector all is the key difference here+

function buyItem() {
	console.log('They bought it');
}

buttons.forEach(function('classOfElement'){
	classOfElement.addEventListener('click', buyItem);
});

EVENTS TARGETS BUBBLING PROPAGATION AND CAPTURE VID 30

- event object hides/contains specific information after
your event listener has registered an action
	-callbacks are also reffered to as handlers
	-console.log can help you find the specific event you
	 want to target
	-in this video, wes goes for event.target to help capture
	 which of the ten buttons was clicked
	-using the class elements(like data-set price) combined with
	 event listeners, you can capture data on website interaction
	 or get granulr on what's selected 
	- event.target is differnect from event.currentTarget
	- it is possible to click on multiple things at the same time
	this is propogation

- propopagation allows for the browser and the OS to register
events. the action works its way up the chain in case other
programs are also watching for this

-to prevent this use the .stopPropagation method

-w3 schools has more info on how and why the DOM registers events
bascially the listener works down from the html tag to your element
then propogates its way back up


- in event.whatever, take note that the name event is irrelenvant
it can be e, a name you choose, but whatever you type between the ()
for your event function is a placeholder infered by the browswer

PREVENT DEFAULT AND FORM EVENTS VID 31

-preserving a console log requires you to clikc the geat and select
preserve log in the menu in the browser console

event.preventDefault(); < - look on MDM webdocs -useful 

ACCESSABILITY

- buttons and links

- buttons happen within an application
- links send folks to another page - a link that goes nowhere is not a link

- things that are not keybpard accessable shuold not have links
on them
-adding attribute of role = "buttom" or place the item that requires 
a link in a <button> element

-keycode.info gives you info about the exact events you may want
to target on a page

26.07.2021

CLICK OUTSIDE MODAL

-kind of tough

- modals are a sort of pop up that displays in front and deactivates
the other content on the page prompting the user for an action   

- modals are hidden by default:
*it can be set to hidden in css
*it can be set to an opacity of 0
*pointer event of none (in css)

-adding a class to the modal with custom stying can reactivate it
raise opacity, reset to pointer-events: all

CSS and JS work together to make this effect work

Modal are part of UX

- build code to: watch for the click to launch modal
- add CSS class to reveal modal once it is clicked
- listen for clicks within the modal
- remove the modal once you've clicked outside of its parimeter

example code to remove in vid 34

SCROLL EVENT AND INTERSECTION OBSERVER

- usually used for terms and conditions scroll to accept

- newer browser featuer is IntersectionObserver() - MDM DOCS THIS TO GET SCROLL WATCHING
*can set root, threshold, and more

- requires you to set a payload element to watch

-scroll event can trigger a button to be diasabled and enabled
with JS/CSS

once your action is completed use the .unobserve() method -MDM DOCS

TABS 

- USing Tabs makes a site more accesable 

- role and aria-label in html help this functionality work
	the markup can be delved into on MDM docs

ex: <div role = "tablist" aria label="programming languages">
	
	<button role="tab" aria-selected="true" id="js">
		Javscript	
	<button/>
	<button role="tab" aria-selected="false" id="ruby">
		Ruby	
	<button/>
	<button role="tab" aria-selected="false" id="PHP">
		PHP	
	<button/>
    <div/>

^ see wes docs for full code

the above sets a selector button for accompanying divs in a container
when selected, the co-ordinating div will be set to active and 
display text/highlight while the others are hidden

with CSS - button[aria-selected="true"] {CSS}

can provide a framework to set styling with js on click/select

-aria-labelledby=js < how to connect the div to the button

example of wes psuedo code framework: you declare the function then
comment to explain to yourself what are the steps to happen on click
then create the code

function handleTabClick(event){
// hide all tab panels
	tabPanels.forEach(panel) => {
		panel.hidden = true;
	};
// mark all tabs as unselected
// mark the clicked tab as selected
// find the associated tabPanel ID and show it
};

^ this breaks the logic down into steps to code + makes it easier
for others to understand your code

-always be careful with spelling!

BEDMAS

- JS math functions (and some others) explicity run in bedmas

brackets, exponets, division, multiplicaiton, addition, subtraction

all of programmig is logic and flow control

FLOW CONTROL IFS, FUNCTION RETURNS, TRUTHY & FAlSY

basic if 

if (contiditon is true  ex 10 > 2){
	*condition is true so run something*
}

as soon as it confirms truth itll stop running

- to run multiple things that are true you need seperate if statements

- you can add more conditions with else if in the same function
but beware of flow. The order of what things are true will affect
your program

-regex: regular expression - a way to match characters in text
look up on mdm docs

synax matters here - look to MDM docs on using = == or ===

!== means does not equal

>= great or equal

||  this means or

&& this means and

-an empty string is not true and is not false

js coerces (trys to find a boolean true or false) for empty ""

Truthy values
1 (and any number or negative number)
"0" - strings or a space 


Falsy Values
0
undefined
null
NAN

COERCION TERNARIERS AND CONDITONAL ABUSE

- a ! on the otherside of the boolean will return the opposite

if(!aDeclaratedVariable);

ternariers:

const word = count === 1 ? 'item' : 'items';

^dec  ^name       ^if state          & else ^

INTERVALS AND TIMERES

- run something after five seconds use a timer

- run something every five seconds use an interval 
(gonna be useful for Twitch bot messages)

MDM docs:

setTimeout(callback, milliseconds); <- takes two arguments

setInterval(callback, milliseconds);


---Set interval does not run right away

- only runs after the amount of time you've set in the seconds 
argument

- function setImmediateInterval(funcToRun, milliseconds){

	funcToRun();

	return setInterval(funcToRun, milliseconds);

}


  setImmediateInterval(anIntervalFunction, 5000);  

^the above is a work around,

-basically, calling the setImmediateInterval callback with your
paramaters will cause JS to run it right away then every amount
of milliseconds you've set it to

- clearing an interval is also tricky:

example

function destroy(){
	document.body.innerHTML = '<p></p>'  < a func that will take down page
}

const bombTimer = setTimeout(destroy, 5000);   < a func that will run destroy after 5 seconds (5000 ms)

window.addEventListener('click', function(){
	console.log('your click saved the page'); < checks if click registered, must be connected to a func that stops the destryo timer

clearTimeout(bombTimer); <- Stops the destroy func from running in the bombTimer variable

} );

OBJECTS PT1

-a fundamental building block of JS
- technically EVERYTHING IS AN OBJECT
- groups together properties and values (keys and values)
-stores related data, functionality, custom types
- order of the properties does not matter (JS may not maintain order of enterted properties)

property: value <--(can be anything, even other objects)

can't overwrite a const, you can only update properties of it

mutable: changable  

immutable: unchangable


methods are functions that live inside of an object

REFErENCE VS VALUE OBJ PT 2

-two totally seperate objects can have the same content within
and have it not register the same within JS

- when objects are copied by reference (a var that points to 
another created variable) you are not creating a copy. It's
a new object and will overwrite the OG

-the workaround to copy a var is called a spread

* const copyOfVar1 = {...Var1};
the ... is the spread code injection

* const copyOfVar1 = object.assign({}, Var1);  <--older way to create a spread/copy

- creating a spread only goes 1 lvl deep, paramaters within
an object will not register ex:

const person1 = {

	clothing: {
	shirts: 3
	pants: 10    <-- too deep
	}

}

-spreads are refereed to as shallow copies

-deep clones of objects require use of a utility library
a popular one is lodash (google it)

- using this will require loading the utility 

- the order matters - watch for overwriting - objects and arrays
in function can cause this bug

MAPS

 const myMap = new Map();

works with:

.set()
.has()
.delete()

- objects can get clunky and big, maps help change data and
order is garanteed 

ex:

const prizes = new Map();

prizes.set(100,'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

console.log('you win a ${prizes.get(Variable)}');

- use a map to maintain order
- no literal with maps gotta create em fresh
- can pass an array where first item is key second is value

-functions inside of objecst (called methods) dont work in maps

-JSON doesnt work with maps

ARRAYS

Method	Description
concat()	Joins two or more arrays, and returns a copy of the joined arrays
indexOf()	Search the array for an element and returns its position
join()	Joins all elements of an array into a string
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array

Bookmark the cheatsheet below:

https://gist.github.com/ourmaninamsterdam/1be9a5590c9cf4a0ab42#file-arrayzing-md

- an array has no keyword trigger - placed in const let or var
- an object that holds data and has methods

Array.isArray(enterTheNameOfArray)

console.log(enterTheNameOfArray.lenth); < provides length og an array

-arrays are zero based, the array begins at 0 as the first item,
1 as the second, etc

-open the prototype of an array to view the many methods of working
with an array. MDM docs

*react devs dont like to have the original array mutated(changed)

.slice(); < takes a section of the array without damaging OG data

- good to check if a method is mutable or imutable in MDM docs

-  to use a mutable method but not change OG, use the spread...
to create a copy then call the method

.push(); < adds an item to back of array, but mutates the array

.unshift(); < adds to the front of array ''

.slice() and .splice() can be easy mixed as both grab a subset
but one is mutable and the other is not

- .slice() is the preferred as it is immutable

.findIndex(); used similar to a loop to scan an array

.flat();

Array Methods PT1

array methods MDM is a good overview online

- static methods & prototypal methods make up array work

Array.of();
creates an array from the arguments passed to it - not common
just as simple to create an array literal

Array.from();

ex 
function createRange(start, end){
const range = Array.from({length: end - start}, 
	function{item, index)
	return 'index'
});
}

-other useful methods for arrays:

.entries()
.keys()
.values
.forEach()

ARRAY METHS PT2

.join() turns the array into a string that seperates each item with
a comma. join can take a string argument to add a word or number

split ex
const foodString = "burg, pizza, bun, egg"; < is string method

console.log(foodstring.split(',')); < finds comma in string and makes it an array

-calling split with no argument will turn it into a big array of
each letter in the string b u r g p i z z a etc...

.pop(); < just takes something off the end of an array

.push() < add something to the end of an array

.shift() < remove from front

.unshift() < add to front  

.includes() < checks if the paramater passed to it is in the array

ARRAY PT 3 

callbacks take functions as an argument

.find(); < can loop to search an array for data

highorder functions return other functions

.filter();
- returns a new array based on your inputs

to get an array from keys and values use the Object.values() or
Objects.key()

.sort()
- requires a callback function if you are sorting numbers or nested
elements. Sorts alphebetically by defaulty

- most dev work can entail using these array methods to sort,
spice, join, and tailor data dumps into useable tools/views


06.08.2021

VID 49

Many ways to loop in JS

- most common is to loop on an array to review or fetch data

Looping methods-

nameOfFunction.forEach(paramater, index, array); 

-doesn't return values - results aren't stored by default

.forEach();

Other looping methods:

.map();
.Filter();
.Reduce();

About Map:

-map is like a machine that takes in data and splits out whats coded

- think of a machine that mechanically adds parts to a robot

- map takes in ten items and returns ten with whatever modifications
you've made

ex:

const fullName = ['E', 'B','F'].map(name => `${name} Carletti`);
	console.log(fullName);

you'll get:

0: "E last"
1: "B last"
2: "F last"

the one liner examines the string values, then takes scans for the arguments
and => adds (interperlates) your variable in the backticks

-you can daisy chain .maps() together to create a complex output

-.map can be used for a variety of data including data from APIs 

const cleanApiData = apiInfoGrab.map(function(paramater){
	set consts to your needed info 
});


** misc epoch.now --> website to convert millisec timestamps to date/time

- date.fns < look into this on how to set dates - date functions

.filter();

^reforms the array to trim to needed items
can use conditional logic and loops to filter for results

.find();
^ gives a specific result based on your conditions

olderPeople.filter(person => person.age > 40);

^object    ^method  ^param        array   ^condition  <<<the above is an implicit return, can be made longer with if else etc

 these higher order functions are advanced

the concept might not take hold till you find an instance where
you are repeating your filters oftern. 

higher order functions do not mutate data

they can accept and run other functions as arguments

LOOPING AND ITERATING - REDUCE

.reduce(accumulator, currentvalue);

^ distills data differently than filter and others

const inventory = [
	{type: 'shirt', price: 4000},	
	{type: 'pants', price: 4532},	
	{type: 'socks', price: 234},	
	{type: 'shirt', price: 2343},	
	{type: 'pants', price: 2343},	
	{type: 'socks', price: 543},	
	{type: 'pants', price: 123},	
];

function inventoryReducer(accumulator, item) {
	//increment type by 1
	accumulator.[item.type] = accumulator.[item.type] + 1 || 1;
	//return the totals, so the next loop can use it
	return totals;
};

const inventoryCounts = inventory.reduce(inventoryReducer, {});

console.log(inventoryCounts);


regular expressions (reg ex) are important to know to use filters and 
reduce properly
a good site to check this is called regexr.com 
----------------------

VID 54

For

- called like:

for (){
}

requires an intial expression, a condition, and an increment expressino
-good for running code multtiple times

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

For of

-newer addition to the language
-used to loop over iterables(something that has a length)
-helps sequence data/promises

- called like

for (const letter of name){
	console.log(letter);
}

For in

- used for looping over keys in an object
- scans into the prototype level of data 

While loop

-can be used for infinite loops, watch out to not crash
- not too popular

ex:

let cool = true;
let i = 0
while (cool === true){
	console.log('You Are Cool')
 	i++; 
	if (i > 100){
	  cool = false;  
	}
}


07.08.2021

*MISC: if looking up a variable and not a property the name of
the variable must be wrapped in [] 

- you can store methods inside of an object to keep together
- these methods can be looked up on that object with a variable
or event listener that is populated from an external input


THE NEW KEYWORD VID 60
-------------------------

-involed in object oriented programming

- where do all the methods come from? 

when you create a string, date, object, array, number etc you
are creating an object 

these objects come off the higher order function, the constructor

const myNumber = new Number(100)

myNumber.    << in the console will open a list of accesable
		methods

- using literal syntax is like using arrow functions, they
eliminate the need to add extra code as JS interpelates the
use case 

ex:

const newArray = new Array('wes', 'kait');

	===

const names = ['wes', 'kait'];    <---literal syntax [] shorter


-things like dates DO NOT have a literal synax

nodes can have text, then evolve to elements, and as you EXTEND
it inherits all attributes

function Pizza(){
	console.log('making a pizza');
};

const pepperoniPizza = new Pizza();  < creates pizza object
console.log(pepperoniPizza.Constructor); < will reveal what 	
					 function made it

-when you use the new keyword on a function, it creates a 
new instance object of that function instead of whatever has
been returned

THE THIS KEYWORD

The instance of an object that a function is bound 

-whenever an element is made (eg button) is constructed by the 
button function that naturally exists in the browser

- the this keyword will take a snapshot of the instance reference
-it looks at what is bounded to what

- the this keyword is always scoped to a function
-- causes problems when used with an arrow function 


-- everytime you create a func within a func, the this keyword
will only look 1 layer up. if nothing above it wil target the 
window

- misc - paul irish dev blog has good posts ans snipputs

*- state is a dataset that reflects the current state of your
web app. An object or array of data will recreate your app
where the user last was

-in some cases you will need a custom event to
send data anywhere it needs to go

.dispatchEvent() MDM docs this
ex:
list.dispatchEvent(new CustomEvent('nameOfEvent'));

JSON.stringify() will help with the local storage
method

event delegation: listen for clicks/events on this
that we know will happen in the JS file but
might not have happened yet or are lost in refresh

- combine event listner with a function and if
statments on your required delegation like a 
checked box or deleted item

**
A modal (also called a modal window or lightbox)s a web page
element that displays in front of and deactovates all other 
page content. To return to the main content the user must engage
with the modal by completeing an action or by closing it

When working with modals, it's important to add/remove event listeners
withing the functions that operate in their respective states. If
an event listener is outside the open modal functions, it can trigger 
errors. furthermore, the scope of the function will insure that you're
listeners are only running if needed, when they're needed, on the 
right element 

- when selecting elements with query selector() its important to know
the scope of the keyword you're using by referencing in MDM docs

for ex: .nextSibling and .nextElementSibling both return a different
element even though the syntax is similar

.bind() < -- helpful when used with the   keyword

the binding of methods used in a program means that they are saved
in a way that the program will bring them up in the instance they are
needed

.this and bind() will most commononly be used when using prototypes
for a web app build

11.08.2021

Having a function with the new keyword will return an object that is
an instance of that object
 
         
function Pizza(toppings = [], customer){
this.toppings = toppings
this.customer = customer
this.eat = function(){ whatever loop you want};
};

const peppPizza = new Pizza ([pepperoni], 'Enzo's');
const canadianPizza = new Pizza ([pepperoni, mush, onion], 'Jeff's');

PROTOTYPAL INHERITANCE

creating a function within a function and using the new keyword can
create a clutter of instances - making a slower program

each pizza (in the above example) will create a new loop program 
seperate from the original. on a large site this will create a problem
- too many pizzas!

better to reuse the function as a prototype to avoid duplicates

Pizza.prototype.eat = function() {
if (this.slices > 0){	
	this.slices = this.slices - 1;
	console.log('CHOMP you now have ${this.slices} left');	
	} else {
	   console.log('Sorry! No slices left');
	 }

}

instance properties: exist within an object

^ the above prototype has a parent of the Pizza function
in every new keyword object created, the object will have access to
the eat prototype. Boom, one function less bog down 

polyfill: using javascript to update an older browsers abilty to use a
method
- some older browsers dont support newer methods, but polyfilling code
from stackoverflow or elsewhere can fix this problem 

USING EXTENDS 

One major benefit that classes have over constructor functions is that 
they can be extended. 

class Character {
  constructor() {
    this.health = 100;
    this.location = {
      x: 0,
      y: 0
    }
  }
  walk() {
    // ...code to make a character walk around
  }
  attack() {
    // ...code to make a character attack
  }
}

class SandwichArtist extends Character {
  constructor() {
    this.health = 200;
  }
  bake() {
    // ... code that gives our sandwich artist the ability to bake parmesan oregano bread
  }
}

By using extends, we can grab all of the properties and methods from our 
Character class, and layer on top of them new methods like a delicious 
sandwich. We can also modify existing properties (here we've given our 
sandwichArtist a health property of 200, since eating all those sandwiches makes them extra healthy)

extends does not provide us access to the this keyword right out of the box. 
We must include a special keyword called super() inside of our constructor. This command invokes something called the super constructor, and must be placed before any references to this inside the constructor:

class sandwichArtist extends Character {
  constructor() {
    super();      < ------included to avoid undefined errors
    this.health = 200;
  }
  bake() {
    // ... code that gives our sandwich artist the ability to bake parmesan oregano bread
  }
}
const archibald = new sandwichArtist();



BIND CALL AND APPLY

- bind() call() apply()
 will change the scope of what the this. keyword is equal
to inside of a function or method

when methods are called, they get the this. value is
by looking to the left of the dot

where is the function being called, not where it is defined

* The bind keyword updates where the this. keyword
is defined 

*call will do the same thing as bind but also call
a function immediately 

* apply will only accept an array of arguments

ref MDM docs for more

THE EVENT LOOP

JS is async and non blocking

JS is a single threaded lang - only one thing can run
at 1once

-ref youtube video:
what the heck is the event loop anyway | philip roberts
channel: JF Conf

PROMISE
a solution for getting stuck in callback async

Promise(function(resolve, reject){

})

promise will return a value in the console, then,
depending on the length of the task, will return
a resolve or rejected task

The logic to how the promise is resolved will live
in the body of that method

works in combination with .then()

can chain multiple promises with .then() 

Promise.all() < static method takes multiple promises

Promise.race() < returns first to finish

PROMISES AND ERROR HANDLING

when a promise fails 

you can use if statements to add reject clauses to 
your promise function

works with .catch()

.then runs when the promise is resolved, .catch
when the promise is rejected

when an error happens in a promise chain, the 
function will cease for the entire chain after
that point

to get around that, yo u need to use .all or .race

.allSettled, is a new method that when past an 
array can also mitigate the stop in the chain
on a rejected 

A promise chain =
const wait = (ms = 0) => {
	return new Promise(function (resolve){   <-Declare promise
	 setTimeout(resolve,ms);
});
}

const go = document.querySelector('.go');  <select html element

go.addEventListener('click', animate); <-run funct on click

function animate (e){  <-- open animate function

const el = e.currentTarget;
el.textContent = 'GO';
wait(200)              <----run promise
.then(() => {
	el.classList.add('circle');
	return wait(200);   <------time value in milliseconds
})
.then(() => {
	el.classList.add('red');
	return wait(200);
})

}                       <---close animate function

16.08.2021
ASYNC AWAIT (VID 70)

promises using .then, wait make for a long/confusing syntax

<script>
	function wait(ms = 0){
		return new Promise((resolve) => {
		 setTimeout(resolve, ms);
	})
}
<script/>
/*
to get around the promise syntax you need to use the keywords

async 
		<--Look em up in MDM like the rest lol
await

example with the wait function again

async function go() {                <--create async func
	console.log('Starting');
	await wait(2000);	  <-call wait attached to await
	console.log('Ending');
	await wait(5000)  <------more time in milliseconds
	console.log('Ending2');
}

go(); <--run the function on page load

***You can mark anytype of function as async

-function declaration: 	async function aFunc(){}
-arrow function: 	const arrowfn = async () => {}
-callback function:	
	window.addEventListener('click', async function(){
})

-methods
-method shorthand
-function property

*You cannot do a top level await

*Also, to get data from a promise you need to use the await 
keyword

An example:

const go = document.querySelector('.go');  
go.addEventListener('click', animate2);

async function animate2 (e){  <--declare async keyword call
const el = e.currentTarget;
el.textContent = 'GO';

await wait(200);             
	el.classList.add('circle');
await wait(200);  
	el.classList.add('red');
await wait(200);
})
}                      

^ much shorter then the promise version, runs the same

async function makeDinner(){
	const pizzaPromise1 = makePizza(['pepperoni']);
	const pizzaPromise1 = makePizza(['mushrooms']);
	const [array1, array2] = await Promise.all([pizzaPromise1, pizzaPromise2]); <---create a mother promise to run both sync'd
	console.log(array1, array2);
}

makeDinner();

ERROR HANDLING STRATS in ASYNC

try{}  <-used all the coded options in a function

.catch()  <- what runs when all the tasks in try have failed

works like a safety net, wrap the async function in this for
added debugging

wes mixes and mathches the async to run things and uses promises
to run try and catch

.catch() can be added to the call of an async function

-when you mark something as async it will immediately return a promise

-can make a safe function that wont crash your app if you uses
a higher order function

-if a function runs often and can error often, using a higher 
order function can save you lines of code

ASYNC AWAIT PROMPT UI VID 72 - watch for ref again

Pause at vid 73`

S-tier function for async wait:

function wait(ms = 0){
	return new promise(resolve => setTimeout(resolve, ms));
}

^ creates the function called wait that creates a promise
that can be attached to async funcs - it waits
for the amount of time for something to be resolved
-a value input, a timer, etc
- a utility function - plugged in as needed
-used with await keyword:

await wait()

AJAX and APIS

-async await and promises help work with APIs

JSON -javascript object notation allows for JS to be traded
between client and server as a string

--most of your work as a dev is to push and pull data, so
you'll turn many strings back into JS

AJAX

asyncronous
javacript
and
XML

AJAX is usually used to refer to working with data from an API

Endpoint: fancy word from the URL where data is pulled

function handleError(err) {
	console.log("didn't work")
	console.log(err)
}

const endpoint = "theURL.com";

const urlPromise = fetch(endpoint);

urlPromise.then(response => {		<--gets response
	return response.JSON();		< -- turns into JSON
	console.log(response);
}).then(data =>{
	console.log(data);
}).catch(handleError)

CORS and API
- query parameters begin with a ? in a URL seperated by & 

Cors: cross origin resource sharing

By default one site cannot send data to another - its a security
issue

Running JS from one site to another is suspect

- when you see a CORS error, it's often the solution to run
your JS on a local server

If CORS errors persist, the next workaround is through a proxy

localhost
^
| 
proxy
^ 
|
API URL

COR PROXY - on a site where there is low risk in the info being
sent, this is a workaround
---This is sends it send to a random person running a random
proxy server. only use this option for low-risk learning
apps

MORE API MISC NOTES

unexpected token in Json at position 0 
^usually means youre being returned something that is HTML
or somehint that is not JSON

fix for this is to check the network tab in dev tool 
to see what is being returned

check the APIs documentation to see possible returns/mistakes

CONVERSION CALC NOTES (VID 77)

const fromSelect = document.querySelector('[name="from_currency"]');     <--declares the selectables for use later but loads 1st
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEL = document.querySelector('[.to_amount]');        <--- selects the p class on HTML
const form = document.querySelector('.app form');  <-object to call html form
const currencies = {available in practice file - inclues key of contry code and value of string name of the currency}
const endpoint = 'www.currencyconversionAPI.com'; (real site avail in practice files)
const ratesByBase = {};  < - create object to store rates and save on API calls that are usually limited

function generateOptions(options){  								  <--creates the functionality to loop over the element and select currencies from the declared currency object above it
	return Object.entries(options)
	  .map(([currencyCode, currencyName]) =>   							< --- calls arrays and maps the data, destructers the array values into two referencables values Ccode, Cname
	return `<option value ="${currencyCode}">${currencyCode} - ${currencyName}</option>`		<-----
	)
	.join('');  										<--turns values into a dump of HTML elements
} 

async function fetchRates(base = 'USD'){			<--create function to call API asyncronisouly
	const res = await fetch(`${endpoint}?base=${base}`);     <--interpelate API data
	const rates - await res.json();
	return rates;
}

function convert(amount, from, to) {				<---create a function to take raw data and convert it using API call
    if(!ratesByBase[from]){								<--check if your ratesByBase opject has the data saved already
	const rates = await fetchRates(from);
	ratesByBase[from] = rates;				<---stores the data
 }
    const rate = ratesByBase[from].rates[to]		<----convert the users input
    const convertedAmount = rate * amount;		<---multiplies the api info by the amount inputed by use
    return convertedAmount;
}	

function formatCurrency(amount, currency){
	return Intl.NumberFormat('en-US',{
	style: 'currency',
	currency,
	}).format(amount);
}

async function handleInput(e){			<-- create handleInput function called below
	const rawAmount = await convert(        <-- waits/runs the convert function once the declared objects have been filled by user
	fromInput.value, 
	fromSelect.value, 
	toSelect.value
	);
	toEl.textContent = formatCurrency(rawAmount, toSelect.value);       <--- displays converted amount in the p element on html (declared above) - calls formatting to clean up number
}
		
const optionsHTML = generateOptions(currencies); <--- loads the app functionality on page open   
*/
/*populare the options declared above


fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML; 

 listen for user inputs on the form element




form.addEventListener('input', handleInput);


MODULES IN JS

https://wesbos.com/javascript-modules

// randomizer.js

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function getRandomDay() {
  const randomDay = Math.floor(Math.random() * days.length);

  return days[randomDay];
}

export default > tells any files that want to import our 

randomizer.js  > module that we want them to have access to our getRandomDay function.

Note that you can only have ONE export default per module.

Awesome! Now our function is ready to be used inside of our main application.

gives devs the ability to share functionality and data across multiple
files and projects

- modules have their own scope
- ex: sepereate your utilities.JS and handlers.JS

- becomes an important part of workflow or working with teams

-loading in multiple JS files could bog time page speed

-importing from modules

// <scri  p t src="./scripts.jc" type=:"module"></s cript>

^needs to run on server

*options:

-use VSC live server by ritwick day

-browser sync npm install -g browser-sync
 go to folder and type browser-sync

functions declared with the keyword export make it useful
as a module - can be imported to other files

export function nameOfFunc(name) {
	return `hello $(name)`
}

import { nameOfFunc } from './nameOfFile.js';

- as modules are scoped in their own files, variables/beclarations
need to be exported aswell to be used in other files

Named exports:

export { nameOfConst }

ALT
 
import { nameOfFunc, nameOfConst } from './nameOfFile.js';

ALT

export default nameOfConst

import nameOfConst, { nameOfFunc } from './nameOfFile.js';

when lost MDM docs

var promise = import("module-name") 

BUILDING WITH PARCEL

Bundlers like parcel minify your JS and other fiiles
runs on a dev server

Parcel, webpack, Pika, many options available

-open terminal
-requires a package.json file
-if none type npm init in terminal
- npm instal parcel-bundler --save-dev
- in the JSON file, locate scripts add:

"scripts":{
	"start": parcel index.html"
},

-then npm start
-if error, locate the last line in JSon file then:

,
"browserslist": 
["last 1 chrome versions"]

-if any glitches, find cache and dist. Delete them,
rerun npm start

-when ready to ship online add build to scripts:

"scripts":{
	"start": parcel index.html"
	"build": "parcel build index.html"	
},

-then npm run build

-can be issues with type=module in html index

USING OPEN SOURCE NPM PACKAGES
refer to vid 80

----------------------------------------------------------------------
--------------------------------------------------------------------
Gatsby
---------------------------------------------------------------------
Took a while to get running in ubuntu
-had to instal node at source location to instal node from a package

https://www.youtube.com/watch?v=K6QiSKy2zoM&ab_channel=ProgrammingKnowledge2

-npm worked in the working folder once installed on root directory
npx browserslist@latest --update-db

-front end is kept in gatsby folder
-back end is kept in sanity folder

- NPM is needed because in the gat/san folders, the framewords must
be installed via the npm package system in node

run npm install in both folders to get necessary dependencies



Uses the React frameword to streamline site functionality
super fast and efficient

-All gatsby files are ecmoscript modules
---Gatsby sees the default export as the elements to be rendered on a page

*//
