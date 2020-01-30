/* * *
 *  Variables to attach event listeners to
 * * */

const nameField = document.getElementById("name");
// Validation first letter caps for each word.
// Allow periods and hyphens for other characters.
const nameValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

const emailField = document.getElementById("mail");
// Validation for first character of username being a letter
// with other characters being letters, numbers, dots, hyphens and underscores.
//
const emailValidation = /^[a-z][-.\w]*@[a-z0-9][-.\w]+\.[a-z]+$/i;

const titleMenu = document.getElementById("title");
const form = document.querySelector("form");

// create variables to set the event listners on
// Regex for fields
// job role popup menu options
// checkbox connection to activities
// payment options

form.addEventListener("submit", e => {
  e.preventDefault();
  testFields(nameValidation, nameField);
  testFields(emailValidation, emailField);
});

function testFields(regex, element) {
  if (!regex.test(element.value)) {
    element.style.backgroundColor = "pink";
  } else {
    element.style.backgroundColor = "lightgreen";
  }
}
