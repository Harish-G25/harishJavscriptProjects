// Select form elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Select error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirmpassword-error');

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error messages
    nameError.style.visibility = 'hidden';
    emailError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
    confirmPasswordError.style.visibility = 'hidden';

    // Perform validation
    let isValid = true;

    // Validate Name (should not be empty)
    if (nameInput.value.trim() === '') {
        nameError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate Email (simple email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate Password (at least 8 characters)
    if (passwordInput.value.length < 8) {
        passwordError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate Confirm Password (must match password)
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.style.visibility = 'visible';
        isValid = false;
    }

    // If all fields are valid, you can submit the form
    if (isValid) {
        form.submit();
    }
});
