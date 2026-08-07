// Hash BCrypt de la contraseña "AuditSecure2026!"
const STORED_USER = "audit_admin";
const STORED_HASH = "$2a$12$e8.8NlPshEw5f76Y.pY6mO6dC4W/6R2N7bH/.b6/8GZ5r4n3p1l7K";

let attemptCount = 0;
const MAX_ATTEMPTS = 5;

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Control de intentos para prevenir ataques de fuerza bruta
    if (attemptCount >= MAX_ATTEMPTS) {
        showError("Demasiados intentos fallidos. Acceso bloqueado temporalmente.");
        return;
    }

    // Validación básica de credenciales con hashing seguro
    if (usernameInput === STORED_USER) {
        // Comparación asíncrona usando BCrypt
        const isMatch = dcodeIO.bcrypt.compareSync(passwordInput, STORED_HASH);

        if (isMatch) {
            // Generar token simulado de sesión
            const sessionToken = crypto.randomUUID();
            sessionStorage.setItem("audit_session", sessionToken);
            
            // Redireccionar al panel principal del sistema
            alert("Acceso concedido. Redirigiendo al panel de auditoría...");
            // window.location.href = "dashboard.html";
            return;
        }
    }

    attemptCount++;
    showError(`Usuario o contraseña incorrectos. Intentos restantes: ${MAX_ATTEMPTS - attemptCount}`);
});

function showError(msg) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = msg;
    errorDiv.style.display = 'block';
}