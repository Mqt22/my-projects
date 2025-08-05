document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('Confirmpassword');
  const span1 = document.getElementById('span-1');
  const span2 = document.getElementById('span-2');

  function validatePasswordLength() {
    if (password.value.length !== 8) {
      span1.style.color = 'red';
    } else {
      span1.style.color = 'white';
    }
  }

  function validatePasswordMatch() {
    if (confirmPassword.value !== password.value || confirmPassword.value.length !== 8) {
      span2.style.color = 'red';
    } else {
      span2.style.color = 'white';
    }
  }

  password.addEventListener('input', () => {
    validatePasswordLength();
    validatePasswordMatch();
  });

  confirmPassword.addEventListener('input', () => {
    validatePasswordMatch();
  });

  // Eye icon toggle
  const toggles = document.querySelectorAll('.toggle-password');
  toggles.forEach(icon => {
    icon.addEventListener('click', () => {
      const target = document.querySelector(icon.getAttribute('toggle'));
      const type = target.getAttribute('type') === 'password' ? 'text' : 'password';
      target.setAttribute('type', type);
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    });
  });
});
