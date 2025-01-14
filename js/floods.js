document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Alert banner close function
function closeAlert() {
    const banner = document.getElementById('alertBanner');
    const navbar = document.querySelector('.navbar');
    
    banner.style.animation = 'slideUp 0.5s ease-out forwards';
    
    setTimeout(() => {
        banner.style.display = 'none';
        navbar.style.top = '0';
        document.querySelector('.flood-hero').style.marginTop = '0';
    }, 400);
}
