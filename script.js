const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
function handleLogin()
{
    alert('Login page would open here! (This is just a demo)')
}

function handleSignUp() 
{
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match!");
        return;
    }

    if(form.checkValidity()) {
        // Here you can handle the form submission, e.g., send data to the server
        alert('Account created successfully! (This is just a demo)');
    }
    else {
        alert('Please fill out all required fields correctly.');
    }
}

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        this.style.borderColor = '#e74c3c';
        passwordInput.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#6b8e4e';
        passwordInput.style.borderColor = '#6b8e4e';
    }
});