document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  // Clear previous error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("successMsg").textContent = "";

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Validate Password
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Validate Confirm Password
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";
    document.getElementById("registrationForm").reset();
  }
});
