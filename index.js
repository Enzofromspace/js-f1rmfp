// Import stylesheets
import './style.css';



// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
function keyword creates function
the name of the funcion is calculate bill
the body of the function is the js written
between the curly brackets {}
*/
function calculateBill(billAmount, taxRate) {
  console.log('running the bill');
  const total = billAmount * (1 + taxRate);
  return total;
} 

//The syntax below calls(runs) the function

const myTotal = calculateBill(100, 0.13);

console.log(myTotal);
//ways to make a function:
//with the function keyword:
// with the keyword and not the variable before declaring a 
// function, your function can be hoisted (looked at 1st
// as code executes)
/*
function doctorize(firstname) {
  return(`Dr. ${firstname}`);
}
*/

//with an anonymous function (usfull for callbacks)
//function (firstname) {
//  return(`Dr. ${firstname}`);
//}

//With a function expression
/*
const doctorize = function(firstname) {
  return(`Dr. ${firstname}`);
}
*/

/*
Arrow functions don't have their own scope with the .this keyword

New to javascript, they are technically an arrow function
All arrow functions are technically anonymous functions
The below is an arrow function with an emplicit return.
With the example below you can remove the first inches
since there is only one paramater (inches)

const inchToCM = (inches) => inches * 2.54;;+

const add = (a, b = 3) => a + b;
^ this example can't remove () because there are 2 pamaters
*/


/*
IIFE = Immediately Invoked Function Expression

(function(){
  console.log('running the Anon function');
  return 'you are cool';
});

^ the above code will immediately run
- before modules and scoping were popular, this allowed
for varibales to be locked without leaking into other function calls
*/

/*
Methods are a function that lives inside of an object
for example the keyword console is a method with many
usable .objects to run. full list on MDN docs

const character = {
  name: 'Zordo Cazarrati',   < notice the commma not ;
  sayHi: function(){          < function keyword not used because the DOM will just infer its a function as shorthand
    console.log('Hey Zordo');
    return 'Hey Zordo';
  }
}
*/

/*
Callback functions

Click Callback
const button = document.querySelector('.clickMe');
button.addEventListener('click'. function(){
  console.log('works');
});

^ a function that gets called into another function
and then is called by the browser at a later point in time
in this case, when a button with class of .click is clicked
*/
