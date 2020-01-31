/* * *
 * NAME FIELD VALIDATION
 *  Allow only letters for first character of words, then letters,
 *  periods and hyphens for other characters. Case insensitive.
 * * */

const nameField = document.getElementById("name");
const nameValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

/* * *
 * EMAIL FIELD VALIDATION
 * Username:
 *  Allow only letters for first character, then letters, numbers,
 *  dots, hyphens and underscores. Case insensitive.
 * AT SYMBOL (@)
 * DOMAIN:
 *  Letter or number for first character, then letters, numbers, dots, and hyphens.
 * DOT (.)
 * TOP-LEVEL DOMAIN: Only letters.
 * * */

const emailField = document.getElementById("mail");
const emailValidation = /^[a-z][-.\w]*@[a-z0-9][-.\a-z0-9]+\.[a-z]+$/i;

/* * *
 * Pop Up Job Menu -- Will show input box when "Other" selected from menu
 * * */

const titleMenu = document.getElementById("title");
titleMenu.setAttribute("onchange", "otherSelection()");

const otherTitle = document.getElementById("other-title");
otherTitle.style.display = "none";

const optionTitle = document.createElement("option");
optionTitle.textContent = "Select Your Job Role";
optionTitle.setAttribute("disabled", true);
optionTitle.setAttribute("selected", true);
optionTitle.setAttribute("hidden", false);

const popUpTitle = titleMenu.prepend(optionTitle);

function otherSelection() {
  if (titleMenu.value === "other") {
    otherTitle.style.display = "";
  } else {
    otherTitle.style.display = "none";
  }
}

const tshirtDesign = document.getElementById("design");
tshirtDesign.setAttribute("onchange", "selectStyle()");

const tshirtFirstChild = tshirtDesign.firstElementChild;
tshirtFirstChild.setAttribute("disabled", true);
tshirtFirstChild.setAttribute("selected", true);
tshirtFirstChild.setAttribute("hidden", false);

const tshirtOptions = document.querySelectorAll("#color option");

function selectStyle() {
  for (let i = 0; i < tshirtOptions.length; i++) {
    if (
      tshirtOptions[i].textContent.includes("JS shirt") &&
      event.target.value === "heart js"
    ) {
      tshirtOptions[i].disabled = true;
      console.log("hidden");
    } else {
      console.log("NO");
    }
  }
}

/* * *
 * Event Listner for form validation
 * * */

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  testFields(nameValidation, nameField);
  testFields(emailValidation, emailField);
  if (titleMenu.value === "Select Your Job Role") {
    titleMenu.style.borderColor = "red";
  } else {
    titleMenu.style.borderColor = "";
  }
});

function testFields(regex, element) {
  if (!regex.test(element.value)) {
    element.style.backgroundColor = "pink";
  } else {
    element.style.backgroundColor = "lightgreen";
  }
}
