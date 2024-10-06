"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Marshall Huckins
      Date: 10/06/24  

      Filename: project06-03.js
*/

// Declare useShip to reference element id useShip
var useShip = document.getElementById("useShip");

// Add event listener to useShip to run copyShippingToBilling() when clicked
useShip.addEventListener('click', copyShippingToBilling);

// Create copyShippingToBilling() function
function copyShippingToBilling() {

  // Create if statement that tests whether useShip is checked
  if (useShip.checked == true) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").value = document.getElementById("stateShip").value;
  }
}

// Declare formElements variable
var formElements = document.querySelectorAll("input[type='text']");

// Declare the fieldCount variable
var fieldCount = formElements.length;

// Declare the errorBox
var errorBox = document.getElementById("errorBox");

// Create an iterating for loop through each element
for (let i = 0; i < fieldCount; i++) {
  // Add click event listener to call error
  formElements[i].addEventListener('click', showValidationError);
}

// Create showValidationError function
function showValidationError(evt) {
  
  // Prevent the browser from applying the native browser tools
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}