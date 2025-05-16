// Check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const isLoginPage = window.location.pathname.includes('login.php');
    const isRegisterPage = window.location.pathname.includes('register.php');
    const isIndexPage = window.location.pathname.endsWith('index.php') || window.location.pathname.endsWith('/');
    
    // If user is not logged in and trying to access protected pages
    if (!currentUser && !isLoginPage && !isRegisterPage && !isIndexPage) {
        window.location.href = 'login.php';
        return;
    }
    
    // If user is logged in and trying to access login or register page
    if (currentUser && (isLoginPage || isRegisterPage)) {
        window.location.href = 'dashboard.php';
        return;
    }

    // Update UI based on auth state
    updateUIForAuthState(currentUser);
}

// Update UI elements based on authentication state
function updateUIForAuthState(currentUser) {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn && currentUser) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // If we're on the dashboard, update the username
    const userNameElement = document.getElementById('userName');
    if (userNameElement && currentUser) {
        const user = JSON.parse(currentUser);
        userNameElement.textContent = user.fullName || user.email.split('@')[0];
    }
}

// Handle login form submission
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Find user
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Store current user in localStorage
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Show success message
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.className = 'mt-4 text-center text-green-600';
                loginMessage.classList.remove('hidden');
                
                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = 'dashboard.php';
                }, 1500);
            } else {
                // Show error message
                loginMessage.textContent = 'Invalid email or password. Please try again.';
                loginMessage.className = 'mt-4 text-center text-red-600';
                loginMessage.classList.remove('hidden');
            }
        });
    }
}

// Handle registration form submission
function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validate passwords match
            if (password !== confirmPassword) {
                registerMessage.textContent = 'Passwords do not match. Please try again.';
                registerMessage.className = 'mt-4 text-center text-red-600';
                registerMessage.classList.remove('hidden');
                return;
            }
            
            // Get existing users
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if user already exists
            if (users.some(u => u.email === email)) {
                registerMessage.textContent = 'Email already registered. Please use a different email.';
                registerMessage.className = 'mt-4 text-center text-red-600';
                registerMessage.classList.remove('hidden');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                fullName,
                email,
                password,
                createdAt: new Date().toISOString()
            };
            
            // Add to users array
            users.push(newUser);
            
            // Save to localStorage
            localStorage.setItem('users', JSON.stringify(users));
            
            // Show success message
            registerMessage.textContent = 'Registration successful! Redirecting to login...';
            registerMessage.className = 'mt-4 text-center text-green-600';
            registerMessage.classList.remove('hidden');
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = 'login.php';
            }, 1500);
        });
    }
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.php';
}

// Initialize auth-related functionality
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setupLoginForm();
    setupRegisterForm();
});