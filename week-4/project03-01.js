/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Marshall Huckins
      Date: 09/06/24  

      Filename: project03-01.js
*/

// Declare variable menuItems with HTML elements in menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// Create for loop
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Create calcTotal function to calculate total cost of selected menu items
function calcTotal() {
  // Declare orderTotal Variable
  let orderTotal = 0;

  // Create loop that tests whether a menu item has been checked, if checked add to total
  for (let i = 0; i < menuItems.length; i++) {
    if(menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
    
    // format the billTotal in currency format
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
  return "$" + value.toFixed(2);
 }