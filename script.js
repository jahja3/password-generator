// script.js

function generatePassword() {
    const length = document.getElementById('length').value;
    const passwordType = document.querySelector('input[name="passwordType"]:checked').value;
    let characters = '';
    let password = '';

    if (length < 3 || length > 7) {
        alert('Password length must be between 3 and 7 characters.');
        return;
    }

    if (passwordType === 'letters') {
        characters = 'abcdefghijklmnopqrstuvwxyz';
    } else if (passwordType === 'numbers') {
        characters = '0123456789';
    } else if (passwordType === 'mix') {
        characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').textContent = password;
}
