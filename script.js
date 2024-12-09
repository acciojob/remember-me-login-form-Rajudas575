//your JS code here. If required.
window.onload = function () {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        
        if (savedUsername && savedPassword) {
            // If saved details exist, show the 'Login as existing user' button
            document.getElementById('existing').style.display = 'block';
        }
    };

    // Handle the form submission
    document.getElementById('loginForm').onsubmit = function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            // Save details in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove details from localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    };

    // Handle the existing user login
    document.getElementById('existing').onclick = function () {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    };