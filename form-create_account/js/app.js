document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const fields = [
        { id: 'profile-image', errorId: 'profile-image-error', message: 'Profile image is required.' },
        { id: 'name', errorId: 'name-error', message: 'Name is required.' },
        { id: 'username', errorId: 'username-error', message: 'Username is required.' },
        { id: 'email', errorId: 'email-error', message: 'Email is required.' },
        { id: 'password', errorId: 'password-error', message: 'Password is required.' },
        { id: 'password-confirmation', errorId: 'password-confirmation-error', message: 'Password confirmation is required.' }
    ];

    fields.forEach(function(field) {
        const input = document.getElementById(field.id);
        const errorMessage = document.getElementById(field.errorId);

        if (!input.value.trim()) {
            errorMessage.textContent = field.message;
            errorMessage.style.display = 'block';
            valid = false;
        } else {
            errorMessage.style.display = 'none';
        }
    });

    const recaptchaResponse = grecaptcha.getResponse();
    const recaptchaError = document.getElementById('recaptcha-error');

    if (!recaptchaResponse) {
        recaptchaError.textContent = 'Please complete the reCAPTCHA.';
        recaptchaError.style.display = 'block';
        valid = false;
    } else {
        recaptchaError.style.display = 'none';
    }

    if (valid) {
        this.submit();
    }
});
