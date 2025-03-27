document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const inputs = document.querySelectorAll(".input");
  const toast = document.getElementById("toast");

  function validateInput(input) {
    if (input.value.trim() === "") {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  }

  function clearForm() {
    inputs.forEach((input) => {
      input.value = "";
      input.removeAttribute("aria-invalid");
    });
  }

  function validateForm(event) {
    let isValid = true;

    inputs.forEach((input) => {
      validateInput(input);
      if (input.hasAttribute("aria-invalid")) {
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
    } else {
      event.preventDefault();
      showToast("Form submitted successfully!");
      clearForm();
    }
  }

  function showToast(message) {
    toast.textContent = message;
    document.body.appendChild(toast);
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
  });

  form.addEventListener("submit", validateForm);
});
