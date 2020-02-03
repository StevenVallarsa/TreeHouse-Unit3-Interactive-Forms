/* * *
 * Regex Validation
 * * */

const nameField = document.getElementById("name");
const nameValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

const emailField = document.getElementById("mail");
const emailValidation = /^[a-z][-.\w]*@[a-z0-9][-.\a-z0-9]*\.[a-z]+$/i;

const otherTitle = document.getElementById("other-title");
const otherTitleValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

/* * *
 * Autofocus Name Field
 * * */

nameField.setAttribute("autofocus", true);

/* * *
 * Pop Up Job Menu -- Will show input box when "Other" selected from menu
 * * */

const titleMenu = document.getElementById("title");
titleMenu.setAttribute("onchange", "otherSelection()");
otherTitle.style.display = "none";

const optionTitle = document.createElement("option");
optionTitle.textContent = "Select Your Job Role";
optionTitle.setAttribute("disabled", true);
optionTitle.setAttribute("selected", true);
optionTitle.setAttribute("hidden", false);

titleMenu.prepend(optionTitle);

function otherSelection() {
  if (titleMenu.value === "other") {
    otherTitle.style.display = "block";
  } else {
    otherTitle.style.display = "none";
  }
}

const tShirtMenu = document.getElementById("colors-js-puns");
tShirtMenu.style.display = "none"; // hide t-shirt color menu on start

const tShirtDesign = document.getElementById("design");

tShirtDesign.addEventListener("change", e => {
  tShirtMenu.style.display = "block";
  if (e.target.value === "js puns") {
    shirt = "JS Puns";
  } else {
    shirt = "JS shirt";
  }

  for (let i = 0; i < tshirtOptions.length; i++) {
    if (tshirtOptions[i].textContent.includes(shirt)) {
      tshirtOptions[i].disabled = false;
      tShirtColor.selectedIndex = 3;
    } else {
      tshirtOptions[i].disabled = true;
      tShirtColor.selectedIndex = 0;
    }
  }
});

const tshirtFirstChild = tShirtDesign.firstElementChild;
tshirtFirstChild.setAttribute("disabled", true);
tshirtFirstChild.setAttribute("selected", true);
tshirtFirstChild.setAttribute("hidden", false);

const tShirtColor = document.getElementById("color");

// const tShirtColorName = document.createElement("option");
// tShirtColorName.textContent = "Select Your T-Shirt";
// tShirtColorName.setAttribute("disabled", true);
// tShirtColorName.setAttribute("selected", true);
// tShirtColorName.setAttribute("hidden", false);
// tShirtColor.prepend(tShirtColorName);

// console.log(tShirtColorName);

const tshirtOptions = document.querySelectorAll("#color option");

/* * *
 * Checkbox Listener
 * * */

const checkboxes = document.querySelectorAll(".activities input");

document.querySelector(".activities").addEventListener("change", e => {
  const clicked = e.target.checked;
  const clickedType = e.target.getAttribute("data-day-and-time");

  for (let i = 0; i < checkboxes.length; i++) {
    // 4
    let checkboxType = checkboxes[i].getAttribute("data-day-and-time"); //5
    if (checkboxType === clickedType && clicked !== checkboxes[i].checked) {
      checkboxes[i].disabled = true;
      let a = checkboxes[i].parentNode;
      a.style.color = "Gray";
    } else if (
      checkboxType === clickedType &&
      clicked === checkboxes[i].checked
    ) {
      checkboxes[i].disabled = false;
      let a = checkboxes[i].parentNode;
      a.style.color = "black";
    }
  }
});

const payment = document.getElementById("payment");
document.getElementById("credit-card").style.display = "none";
document.getElementById("paypal").style.display = "none";
document.getElementById("bitcoin").style.display = "none";

payment.addEventListener("change", e => {
  for (let i = 1; i < paymentOption.length; i++) {
    console.log(e.target.value + " " + paymentOption[i].value);
    if (e.target.value === paymentOption[i].value) {
      paymentOption[i].style.display = "block";
    } else {
      paymentOption[i].style.display = "none";
    }
  }
});

/* * *
 * Event Listener for form validation
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
  if (titleMenu.value === "other") {
    testFields(otherTitleValidation, otherTitle);
  }
  // if (titleMenu.value === "Select Your Job Role") {
  //   titleMenu.style.color = "red";
  // }

  // t-shirt checker
  console.log(tShirtDesign.style.color);
  if (tShirtDesign.value === "Select Theme") {
    tShirtDesign.style.borderColor = "red";
  } else {
    tShirtDesign.style.borderColor = "";
  }

  // checkbox checker
  let count = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      count++;
    }
  }
  const legend = document.querySelector(".activities legend");
  if (count === 0) {
    legend.style.color = "red";
  } else {
    legend.style.color = "black";
  }
});

function testFields(regex, element) {
  if (!regex.test(element.value)) {
    element.style.backgroundColor = "pink";
  } else {
    element.style.backgroundColor = "lightgreen";
  }
}
