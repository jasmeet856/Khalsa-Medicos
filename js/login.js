/**
 * Khalsa Medicos - Demo Authentication & Session Management (Pure Frontend)
 */

const USER_SESSION_KEY = 'khalsa_medicos_user';

// Get current user session
function getCurrentUser() {
  try {
    const data = localStorage.getItem(USER_SESSION_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error reading user session', e);
    return null;
  }
}

// Save user session
function saveUserSession(userData) {
  try {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(userData));
  } catch (e) {
    console.error('Error saving user session', e);
  }
}

// Clear user session
function logoutUser() {
  localStorage.removeItem(USER_SESSION_KEY);
  window.location.reload();
}

// Toggle password visibility
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    `;
    btn.setAttribute('title', 'Hide password');
  } else {
    input.type = 'password';
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    `;
    btn.setAttribute('title', 'Show password');
  }
}

// Quick fill demo credentials
function fillDemoCredentials(email, password) {
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  if (emailInput && passwordInput) {
    emailInput.value = email;
    passwordInput.value = password;

    // Clear previous errors
    clearFormErrors();

    if (typeof showToast === 'function') {
      showToast('Demo credentials loaded into form', 'success');
    }
  }
}

// Clear error messages
function clearFormErrors() {
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  if (emailError) emailError.style.display = 'none';
  if (passwordError) passwordError.style.display = 'none';
}

// Render active session view if already logged in
function checkLoggedInState() {
  const user = getCurrentUser();
  const formWrap = document.getElementById('loginFormContainer');
  const loggedInWrap = document.getElementById('loggedInContainer');

  if (!formWrap || !loggedInWrap) return;

  if (user) {
    formWrap.style.display = 'none';
    loggedInWrap.style.display = 'block';

    const userNameEl = document.getElementById('displayUserName');
    const userEmailEl = document.getElementById('displayUserEmail');
    const userRoleEl = document.getElementById('displayUserRole');

    if (userNameEl) userNameEl.textContent = user.name;
    if (userEmailEl) userEmailEl.textContent = user.email;
    if (userRoleEl) userRoleEl.textContent = user.role || 'Verified Customer';
  } else {
    formWrap.style.display = 'block';
    loggedInWrap.style.display = 'none';
  }
}

// Handle login form submission
function handleLoginSubmit(e) {
  e.preventDefault();
  clearFormErrors();

  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  const email = emailInput ? emailInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value : '';

  let isValid = true;

  // Basic email pattern regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    if (emailError) {
      emailError.textContent = 'Please enter a valid email address (e.g., user@example.com).';
      emailError.style.display = 'block';
    }
    isValid = false;
  }

  // Password validation (min 6 characters for demo)
  if (!password || password.length < 6) {
    if (passwordError) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      passwordError.style.display = 'block';
    }
    isValid = false;
  }

  if (!isValid) return;

  // Simulate authentication for frontend-only demo
  const isPharmacist = email.toLowerCase().includes('pharmacist') || email.toLowerCase().includes('admin');
  const displayName = isPharmacist ? 'Harpreet Singh (Chief Pharmacist)' : (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) || 'Patient');

  const userSession = {
    email: email,
    name: displayName,
    role: isPharmacist ? 'Registered Pharmacist (Lic. #PB-28491)' : 'Registered Patient / Customer',
    loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    loginDate: new Date().toLocaleDateString()
  };

  saveUserSession(userSession);

  const successAlert = document.getElementById('loginSuccessAlert');
  if (successAlert) {
    successAlert.innerHTML = `
      <strong>Welcome back, ${displayName}!</strong><br/>
      <span style="font-size: 0.85rem;">Frontend demo login simulated successfully. Your session has been stored locally.</span>
    `;
    successAlert.style.display = 'block';
  }

  setTimeout(() => {
    checkLoggedInState();
    if (typeof showToast === 'function') {
      showToast(`Logged in as ${displayName}`, 'success');
    }
  }, 750);
}

document.addEventListener('DOMContentLoaded', () => {
  checkLoggedInState();

  const form = document.getElementById('pharmacyLoginForm');
  if (form) {
    form.addEventListener('submit', handleLoginSubmit);
  }
});
