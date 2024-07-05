document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (email === '' || password === '') {
        errorMessage.innerHTML = `
            <p>Unable to login.</p>
            <p>If you haven't created an account, we recommend signing up with social authentication below.</p>
            <p>If you haven't received your confirmation email yet, <a href="#">click here</a> to resend it.</p>
            <p><a href="#">Contact us</a> if you continue having trouble.</p>
        `;
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
     
    }
});
