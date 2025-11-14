// ===== CONTACT FORM VALIDATION & SUBMISSION =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");

  // Create feedback alert dynamically
  const alertBox = document.createElement("div");
  alertBox.classList.add("mt-3");
  form.appendChild(alertBox);

  // Simple email format check
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Handle form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset alert
    alertBox.innerHTML = "";
    alertBox.className = "mt-3";

    // Validation
    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      subject.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      showAlert("Please fill in all fields.", "danger");
      return;
    }

    if (!isValidEmail(email.value)) {
      showAlert("Please enter a valid email address.", "warning");
      return;
    }

    // Simulated sending (you can replace this part with API / backend)
    showAlert("Sending message...", "info");

    setTimeout(() => {
      // Simulate successful send
      showAlert("✅ Your message has been sent successfully!", "success");

      // Reset form
      form.reset();
    }, 1500);
  });

  // Helper function for showing alert messages
  function showAlert(message, type) {
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }
});

 