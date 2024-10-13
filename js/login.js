import { users } from './userMock.js';

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const alertBox = document.getElementById('alert');

    sessionStorage.setItem('isAuthenticated', '');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alertBox.style.display = 'block';
            alertBox.textContent = 'Пожалуйста, заполните все поля';
            return;
        }

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem('isAuthenticated', true);
            // Redirect to posts page
            window.location.href = 'posts.html';
        } else {
            alert('User not found');
        }
    });
});
