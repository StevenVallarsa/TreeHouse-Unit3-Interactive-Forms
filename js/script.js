/* * *
 *  Allow only letters for first character of words, then letters,
 *  periods and hyphens for other characters. Case insensitive.
 * * */
const nameField = document.getElementById("name");
const nameValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

/* * *
 * USERNAME:
 *  Allow only letters for first character, then letters, numbers,
 *  dots, hyphens and underscores. Case insensitive.
 * AT SYMBOL (@)
 * DOMAIN:
 *  Letter or number for first character, then letters, numbers, dots, and hyphens.
 * DOT (.)
 * TOP-LEVEL DOMAIN:
 *  Only letters.
 * * */
const emailField = document.getElementById("mail");
const emailValidation = /^[a-z][-.\w]*@[a-z0-9][-.\a-z0-9]+\.[a-z]+$/i;

/* * *
 *
 * * */
const titleMenu = document.getElementById("title");
const otherTitle = document.getElementById("other-title");
otherTitle.style.display = "none";
const optionTitle = document.createElement("option");
optionTitle.textContent = "Select Your Job Role";
optionTitle.setAttribute("disabled", true);
optionTitle.setAttribute("selected", true);
optionTitle.setAttribute("hidden", false);
titleMenu.setAttribute("onchange", "otherSelection()");
const popUpTitle = titleMenu.prepend(optionTitle);

function otherSelection() {
  if (titleMenu.value === "other") {
    otherTitle.style.display = "";
  } else {
    otherTitle.style.display = "none";
  }
}

const form = document.querySelector("form");

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
