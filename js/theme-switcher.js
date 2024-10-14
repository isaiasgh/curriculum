const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const darkMode = localStorage.getItem('dark-mode');

if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '🌞 Modo Claro';
}

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.textContent = '🌞 Modo Claro';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleButton.textContent = '🌙 Modo Oscuro';
    }
});