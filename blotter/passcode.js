document.addEventListener('DOMContentLoaded', () => {
  const passHidden = document.getElementById('passcode-hidden');
  const passVisible = document.getElementById('passcode-visible');
  const toggleBtn = document.querySelector('.toggle-visibility');
  const form = document.getElementById('login-form');
  const errorMsg = document.getElementById('error-msg');
  const correctPasscode = 'brgadminonly';

  // Toggle visibility
  toggleBtn.addEventListener('click', () => {
    if (passVisible.hidden) {
      // Show visible text, hide password dots
      passVisible.value = passHidden.value;
      passHidden.hidden = true;
      passVisible.hidden = false;
      passVisible.focus();
      toggleBtn.title = 'Hide passcode';
      toggleBtn.setAttribute('aria-label', 'Hide passcode');
    } else {
      // Show password dots, hide visible text
      passHidden.value = passVisible.value;
      passVisible.hidden = true;
      passHidden.hidden = false;
      passHidden.focus();
      toggleBtn.title = 'Show passcode';
      toggleBtn.setAttribute('aria-label', 'Show passcode');
    }
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.style.display = 'none';

    // Use whichever input is visible
    const enteredPass = passVisible.hidden ? passHidden.value.trim() : passVisible.value.trim();

    if (enteredPass === '') {
      errorMsg.textContent = 'Passcode is required.';
      errorMsg.style.display = 'block';
      (passVisible.hidden ? passHidden : passVisible).focus();
      return;
    }

    if (enteredPass.toLowerCase() === correctPasscode) {
      alert('Access granted. Welcome to Blotter System.');
      passHidden.value = '';
      passVisible.value = '';
      errorMsg.style.display = 'none';
    } else {
      errorMsg.textContent = 'Incorrect passcode. Please try again.';
      errorMsg.style.display = 'block';
      (passVisible.hidden ? passHidden : passVisible).focus();
    }
  });
});
