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

    let showError = (element, error) => {
      element.classList.add('red-border')
      error.style.display = 'block';
    };

    let hideError = (element, error) =>{
      element.classList.remove('red-border')
      error.style.display = 'none';
    }

    // checks for no answer in first name, last name or email
    for (i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
          showError(inputs[i],inputs[i].nextElementSibling)
      } else {
        validFields++;
        hideError(inputs[i],inputs[i].nextElementSibling)
      }
    }
    // validates email
    if (!email.value) {
      hideError(email, invalidEmail)
      showError(email, missingEmail)
    } else if (!email.value.match(emailRegex)) {
      hideError(email, missingEmail)
      showError(email, invalidEmail)
    } else {
      validFields++;
      hideError(email, missingEmail)
      hideError(email, invalidEmail)
    }
    // validates message
    if (!msg.value) {
      showError(msg,msg.nextElementSibling)
    } else {
      validFields++;
      hideError(msg,msg.nextElementSibling)
    }
    //  validates query type
    if (![...radios].some(radio => radio.checked)) {
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
