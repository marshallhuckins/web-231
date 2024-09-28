/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Marshall Huckins
      Date: 08/29/24  

      Filename: project02-04.js
 */

// Declare prices of items
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Add event listener to run calcTotal function when each item is clicked
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

// Create function to calculate total
function calcTotal() {
    // Initialize cost with 0 price
    let cost = 0;

    // Retrieve the status of checkboxes for each item
    let buyChicken = document.getElementById("chicken").checked;
    let buyHalibut = document.getElementById("halibut").checked;
    let buyBurger = document.getElementById("burger").checked;
    let buySalmon = document.getElementById("salmon").checked;
    let buySalad = document.getElementById("salad").checked;

    // Update the cost based on the selected items
    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibut ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;

    // Update the displayed cost
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    // Declare the tax variable
    const tax = cost * SALES_TAX;

    // Update the displayed tax
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    // Declare totalCost Variable
    const totalCost = cost + tax

    // Display the total bill
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
