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