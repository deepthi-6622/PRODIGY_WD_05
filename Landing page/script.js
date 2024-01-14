document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#2c3e50';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});
