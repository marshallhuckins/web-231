"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Marshall Huckins
      Date: 10/12/24  

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const regex1 = /[A-Z]/;
  const regex2 = /\d/;
  const regex3 = /[!\$#%]/;

  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");
  
  if (pwd.length < 8) {
    feedback.innerHTML = "Your password must be at least 8 characters.";
  } else if (!regex1.test(pwd)) {
    feedback.innerHTML = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    feedback.innerHTML = "Your password must include a number.";
  } else if (!regex3.test(pwd)) {
    feedback.innerHTML = "Your password must include one of the following: !$#%";
  } else {
    signupForm.submit();
  }
}
);