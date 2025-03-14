document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    let isDarkTheme = localStorage.getItem('theme') === 'dark';

    function applyTheme() {
        document.body.classList.toggle('dark-theme', isDarkTheme);
        themeToggle.textContent = isDarkTheme ? '☀️ Светлая тема' : '🌙 Тёмная тема';
    }

    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        applyTheme();
    }

    themeToggle.addEventListener('click', toggleTheme);
    applyTheme(); // Инициализация темы

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});