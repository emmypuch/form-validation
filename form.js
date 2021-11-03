const form = document.querySelector("form");
emailField = form.querySelector(".email");
emailInput = emailField.querySelector("input");
passwordField = form.querySelector(".password");
passwordInput = passwordField.querySelector("input");

form.onsubmit = (e) => {
  //   e.preventdefault();
  emailInput.value === ""
    ? emailField.classList.add("shake", "error")
    : checkEmail();
  passwordInput.value === ""
    ? passwordField.classList.add("shake", "error")
    : checkPass();

  setTimeout(() => {
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 500);

  emailInput.onKeyup = () => {
    checkEmail();
  };
  passwordInput.onKeyup = () => {
    checkPass();
  };

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
      emailField.classList.add("error");
      emailField.classList.remove("valid");

      let errorText = emailField.querySelector(".error-text");

      emailInput.value != ""
        ? (errorText.innerText = "Enter a valid email address")
        : (errorText.innerText = "Email can not be blank");
    } else {
      emailField.classList.remove("valid");
      emailField.classList.add("error");
    }
  }

  function checkPass() {
    if (passwordInput.value === "") {
      passwordField.classList.add("error");
      passwordField.classList.remove("valid");
    } else {
      passwordField.classList.remove("error");
      passwordField.classList.add("valid");
    }
  }

  if (
    !emailField.classList.contains("error") &&
    !passwordField.classList.contains("error")
  ) {
    window.location.href = form.getAttribute("action");
  }
};
