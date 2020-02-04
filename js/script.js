/* * *
 * Regex Validation
 * * */

const nameField = document.getElementById("name");
const nameValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

const emailField = document.getElementById("mail");
const emailValidation = /^[a-z][-.\w]*@[a-z0-9][-.\a-z0-9]*\.[a-z]+$/i;

const otherTitle = document.getElementById("other-title");
const otherTitleValidation = /^[a-z][-.a-z]*( [a-z][-.a-z]*)*$/i;

const creditCardNumber = document.getElementById("cc-num");
const creditCardValidation = /[0-9]{13,16}/;

const zipNumber = document.getElementById("zip");
const zipValidation = /[0-9]{5}/;

const cvvNumber = document.getElementById("cvv");
const cvvValidation = /[0-9]{3}/;

/* * *
 * Autofocus Name Field
 * * */

nameField.setAttribute("autofocus", true);

/* * *
 * Job Menu
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

/* * *
 * T-Shrit Menu
 * * */

const tShirtMenu = document.getElementById("colors-js-puns");
tShirtMenu.style.display = "none"; // hide t-shirt color menu on load

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

const tshirtOptions = document.querySelectorAll("#color option");

/* * *
 * Setup Total Charge for Activities
 * * */

const activities = document.querySelector(".activities");
const totalDisplay = document.createElement("h3");
totalDisplay.textContent = "Your Current Total: $0";
totalDisplay.className = "yourTotal";
activities.appendChild(totalDisplay);

/* * *
 * Checkbox Listener
 * * */

const checkboxes = document.querySelectorAll(".activities input");
console.log(checkboxes);

document.querySelector(".activities").addEventListener("change", e => {
  let total = 0;
  const clicked = e.target.checked;
  const clickedType = e.target.getAttribute("data-day-and-time");

  // Check to makes sure conflicting activites are greyed out
  // and total of activies is calculated.
  for (let i = 0; i < checkboxes.length; i++) {
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
    if (checkboxes[i].checked === true) {
      total += parseInt(checkboxes[i].getAttribute("data-cost"));
    }
  }
  const totalLine = document.querySelector(".yourTotal");
  totalLine.textContent = "Your Current Total: $" + total;
});

/* * *
 * Payment Menu
 * * */

const payment = document.getElementById("payment");
const paymentOptions = document.querySelectorAll("#payment ~ div");
for (let i = 0; i < paymentOptions.length; i++) {
  paymentOptions[i].style.display = "none";
}

payment.addEventListener("change", e => {
  for (let i = 0; i < paymentOptions.length; i++) {
    if (e.target.value === paymentOptions[i].className) {
      paymentOptions[i].style.display = "block";
    } else {
      paymentOptions[i].style.display = "none";
    }
  }
});

/* * *
 * Event Listener for Form Validation
 * * */

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  testFields(nameValidation, nameField);
  testFields(emailValidation, emailField);
  testFields(creditCardValidation, creditCardNumber);
  testFields(zipValidation, zipNumber);
  testFields(cvvValidation, cvvNumber);
  if (titleMenu.value === "Select Your Job Role") {
    titleMenu.style.borderColor = "red";
  } else {
    titleMenu.style.borderColor = "";
  }
  if (titleMenu.value === "other") {
    testFields(otherTitleValidation, otherTitle);
  }

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

  if (payment.value === "select method") {
    payment.style.borderColor = "red";
  } else {
    payment.style.borderColor = "";
  }
});

// Text field Regex checker
function testFields(regex, element) {
  if (!regex.test(element.value)) {
    element.style.backgroundColor = "pink";
  } else {
    element.style.backgroundColor = "lightgreen";
  }
}
