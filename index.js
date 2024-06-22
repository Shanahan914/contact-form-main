document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.getElementsByClassName("form-input-text");
  const allInputs = document.getElementsByTagName("input");
  const msg = document.getElementById("msg-area");
  const submitBtn = document.getElementById("form-submit-btn");
  const radios = document.getElementsByName("query-type");
  const consentBox = document.getElementById("consent");
  const email = document.getElementById("input-email");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const missingEmail = document.getElementById("error-email");
  const invalidEmail = document.getElementById("error-email-valid");
  const consentError = document.getElementById("error-consent");
  const queryError = document.getElementById("error-query");

  submitBtn.addEventListener("click", function (e) {
    let validFields = 0;
    e.preventDefault();

    // checks for no answer in first name, last name or email
    for (i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        inputs[i].nextElementSibling.style.display = "block";
        inputs[i].classList.add("red-border");
      } else {
        validFields++;
        inputs[i].classList.remove("red-border");
        inputs[i].nextElementSibling.style.display = "none";
      }
    }
    // validates email
    if (!email.value) {
      email.classList.add("red-border");
      missingEmail.style.display = "block";
    } else if (!email.value.match(emailRegex)) {
      missingEmail.style.display = "none";
      email.classList.add("red-border");

      invalidEmail.style.display = "block";
    } else {
      validFields++;
      email.classList.remove("red-border");
      missingEmail.style.display = "none";
      invalidEmail.style.display = "none";
    }
    // validates message
    if (!msg.value) {
      msg.nextElementSibling.style.display = "block";
      msg.classList.add("red-border");
    } else {
      validFields++;
      msg.classList.remove("red-border");
      msg.nextElementSibling.style.display = "none";
    }
    //   validates query type
    if (!radios[0].checked && !radios[1].checked) {
      queryError.style.display = "block";
    } else {
      validFields++;
      queryError.style.display = "none";
    }
    // validates consent
    if (!consentBox.checked) {
      consentError.style.display = "block";
    } else {
      validFields++;
      consentError.style.display = "none";
    }

    // if all fields are valid
    if (validFields == allInputs.length) {
      successMsg = document.getElementsByClassName("success-message");
      successMsg[0].showModal();
    }
  });
});
