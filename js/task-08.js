const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  //console.log(formElements);

  if (email === "" || password === "") {
    alert("All inputs must be filled");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  formEl.reset();
}
