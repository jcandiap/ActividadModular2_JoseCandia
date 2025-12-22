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

const themeButtons = document.querySelectorAll('.themeModeButton');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setBootstrapTheme(newTheme);
        updateThemeIcons(newTheme);
    });
});