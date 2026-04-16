
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.querySelector('.theme-toggle');

    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        btn.textContent = '☾';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.textContent = '☀';
    }
}