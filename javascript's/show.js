  const toggle = document.getElementById("togglePassword");
  const passwordInput = document.querySelector('input[name="password"]');

  toggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggle.classList.remove("fa-eye");
      toggle.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggle.classList.remove("fa-eye-slash");
      toggle.classList.add("fa-eye");
    }
  });