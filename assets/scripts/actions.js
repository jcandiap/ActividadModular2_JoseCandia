function setBootstrapTheme(themeName) {
  const htmlElement = document.documentElement;

  if (themeName === 'dark' || themeName === 'light') {
    htmlElement.setAttribute('data-bs-theme', themeName);
  } else {
    console.error('Invalid theme name specified. Use "light" or "dark".');
  }
}

function updateThemeIcons(themeName) {
    const icon = themeName === 'dark' ? '☀️' : '🌙';
    const themeButtons = document.querySelectorAll('.themeModeButton');
    themeButtons.forEach(button => {
        button.textContent = icon;
        button.classList.toggle('btn-outline-dark');
        button.classList.toggle('btn-outline-light');
    });
}

function saveThemePreference(themeName) {
    localStorage.setItem('theme', themeName);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setBootstrapTheme(savedTheme);
        updateThemeIcons(savedTheme);
    }
}

loadThemePreference();

const themeButtons = document.querySelectorAll('.themeModeButton');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setBootstrapTheme(newTheme);
        updateThemeIcons(newTheme);
        saveThemePreference(newTheme);
    });
});

$('#download-resume').on('click', function() {
    const resumeUrl = '/assets/files/resume.pdf';
    window.open(resumeUrl, '_blank');
});

$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    let theme = document.documentElement.getAttribute('data-bs-theme');

    if( 
        name === '' || 
        email === '' || 
        message === '' || 
        String(message).trim() === '' || 
        String(name).trim() === '' || 
        String(email).trim() === '' ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            theme: theme,
            text: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Enviado',
        theme: theme,
        text: 'Tu mensaje ha sido enviado correctamente',
        showConfirmButton: false,
        timer: 2000
    });

    this.reset();
});