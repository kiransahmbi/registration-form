var form = document.querySelectorAll("#RegistrationForm");
var formElement = document.querySelector("#RegistrationForm");
var postalCode = document.querySelector("#postalCode");
var password = document.querySelector("#password");
var passwordC = document.querySelector("#passwordC");
var email = document.querySelector("#email");

var registerBtn = document.querySelector("#registerBtn");
var registrationComplete = document.querySelector("#registrationComplete");
var banner = document.querySelector("#banner");
var registrationHeader = document.querySelector("#registrationHeader");
var registrationSubtext = document.querySelector("#registrationSubtext");

var passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}/;
var emailPattern = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.[a-z]{2,6})/;

registerBtn.addEventListener("click", () => {
  var validForm = true;

  //Postal Code Format
  if (postalCode.validity.patternMismatch) {
    postalCode.setCustomValidity("Please use a0a0a0 format.");
  }
  else {
    postalCode.setCustomValidity('');
  }

  //Password requirements (6 characters, 1 digit, 1 upper case)
  if (!passwordPattern.test(password.value)) {
    password.setCustomValidity("Please use atleast 6 characters, 1 digit, and 1 upper-case letter.");
  }
  else {
      password.setCustomValidity('');
  }

  //Check matching passwords
  if (password.value !== passwordC.value) {
    passwordC.setCustomValidity("Passwords do not match.");
  }
  else {
    passwordC.setCustomValidity('');
  }

  //Email pattern check
  if (!emailPattern.test(email.value)) {
    email.setCustomValidity("Please enter a valid email.");
  }
  else {
    email.setCustomValidity('');
  }

  //Is Form properly completed?
  form.forEach(element => {
    if (!element.checkValidity()) {
      validForm = false;
    }
  });

  //Initate completion
  if (validForm) {
    formElement.style.display = "none";
    registrationComplete.style.display = "block";
    banner.src = "check-mark.png"
    registrationHeader.innerHTML = "Registered";
    registrationSubtext.style.display = "none";
  }
});

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
});