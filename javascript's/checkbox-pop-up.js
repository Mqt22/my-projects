document.addEventListener('DOMContentLoaded', () => {
  const getStartedBtn = document.querySelector('.pricing-box button');
  const popup = document.getElementById('checkoutPopup');
  const closeBtn = document.getElementById('closePopup');

  if (popup) popup.style.display = 'none';

  if (getStartedBtn && popup) {
    getStartedBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
      document.body.classList.add('checkout-blur'); // Blur background
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.classList.remove('checkout-blur'); // Remove blur
    });
  }
});
