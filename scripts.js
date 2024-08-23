document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.textContent = '☰'; // Hamburger icon
    document.querySelector('header').appendChild(navToggle);
    
    const navMenu = document.querySelector('header nav');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
