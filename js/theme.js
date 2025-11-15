// Theme Management Module

// Sun icon path (for light mode)
const sunIconPath = 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z';

// Moon icon path (for dark mode)
const moonIconPath = 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z';

/**
 * Updates the theme icon and text based on current theme
 * @param {boolean} isDark - Whether dark mode is currently active
 */
function updateThemeIcon(isDark) {
    const iconPath = document.getElementById('theme-icon-path');
    const themeText = document.getElementById('theme-text');
    
    if (iconPath && themeText) {
        if (isDark) {
            iconPath.setAttribute('d', sunIconPath);
            themeText.textContent = 'Light Mode';
        } else {
            iconPath.setAttribute('d', moonIconPath);
            themeText.textContent = 'Dark Mode';
        }
    }
}

/**
 * Toggles between light and dark theme
 */
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcon(false);
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon(true);
    }
}

// Initialize theme on page load
(function initTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    } else {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    }
})();

