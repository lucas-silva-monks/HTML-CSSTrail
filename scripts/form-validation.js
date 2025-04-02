document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const inputs = document.querySelectorAll(".input");
  const toast = document.getElementById("toast");

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");

  //Validação individual dos inputs e o listening
  inputs.forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
  });

  function validateInput(input) {
    if (input.value.trim() === "") {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  }

  //Validação do forms e o listening de submit
  form.addEventListener("submit", validateForm);

  function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    inputs.forEach((input) => {
      validateInput(input);
      if (input.hasAttribute("aria-invalid")) {
        isValid = false;
      }
    });

    if (isValid) {
      const contactData = {
        input1: input1.value,
        input2: input2.value,
        input3: input3.value,
        input4: input4.value,
      };

      submitForm(contactData);
    } else {
      showToast("Please fill in all fields correctly.", "error");
    }
  }

  //Função da mensagem toast
  function showToast(message, status) {
    toast.textContent = message;
    toast.classList.add("show", status);

    setTimeout(() => {
      toast.classList.remove("show", status);
    }, 3000);
  }

  //Função de limpezad do form
  function clearForm() {
    inputs.forEach((input) => {
      input.value = "";
      input.removeAttribute("aria-invalid");
    });
  }

  //Função assíncrona que faz o submit do form
  async function submitForm(data) {
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showToast("Form submitted successfully!", "success");
        clearForm();
      } else {
        throw new Error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Error submitting form. Please try again.", "error");
    }
  }
});
