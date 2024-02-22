// Simulated user database
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful! Redirecting to home page.');
        // In a real scenario, you would redirect to the home page here.
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Simulated check for existing username
    const userExists = users.some(u => u.username === username);

    if (!userExists) {
        // Add the new user to the database
        users.push({ username, password });

        alert('Sign up successful! Redirecting to home page.');
        // In a real scenario, you would redirect to the home page here.
        //window.location.href = 'home.html';
        window.location.href = 'bmi.html';
    } else {
        alert('Username already exists. Please choose a different username.');
    }
}

function toggleForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = formId === 'signupForm' ? 'block' : 'none';
}

// Button color change on hover
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');

loginButton.addEventListener('mouseenter', () => {
    loginButton.style.backgroundColor = '#0056b3';
});

loginButton.addEventListener('mouseleave', () => {
    loginButton.style.backgroundColor = '#007bff';
});

signupButton.addEventListener('mouseenter', () => {
    signupButton.style.backgroundColor = '#0056b3';
});

signupButton.addEventListener('mouseleave', () => {
    signupButton.style.backgroundColor = '#007bff';
});