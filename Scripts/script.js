function Submit() {
  let error = false;

  // Validate name
  let name = document.getElementById("name");
  if (name.value.length <= 0) {
    error = true;
    alert("Name is required");
    return;
  }

  // Validate email
  let email = document.getElementById("email");
  if (email.value.length <= 0) {
    error = true;
    alert("Email is required");
    return;
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    error = true;
    alert("Email is invalid");
    return;
  }

  // Validate message
  let message = document.getElementById("message");
  if (message.value.length <= 0) {
    error = true;
    alert("Message is required");
    return;
  }

  if (error === false) {
    alert("Feedback submitted successfully");
    window.location.href = "/Main/feedback.html";
  }
}
