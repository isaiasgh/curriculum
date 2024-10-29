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
        switchDarkImage ("img-dev", "backend-developer-darkMode.webp");
        switchDarkImage ("espol-logo", "espol-logo-darkMode.webp");
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleButton.textContent = '🌙 Modo Oscuro';
        switchDefaultImage ("img-dev", "backend-developer.webp");
        switchDefaultImage ("espol-logo", "espol-logo.webp");
    }
});

function switchDarkImage (className, imgName) {
    let img = document.getElementsByClassName(className);
    img[0].setAttribute ("src", "./assets/images/" + imgName);
}

function switchDefaultImage (className, imgName) {
    let img = document.getElementsByClassName(className);
    img[0].setAttribute ("src", "./assets/images/" + imgName);
}