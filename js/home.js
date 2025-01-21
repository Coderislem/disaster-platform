// home.js - cleaned version without map code
// Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animation observers
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Apply to all disaster cards
    document.querySelectorAll('.disaster-card').forEach(card => {
        animateOnScroll.observe(card);
    });

    initSlider(); // Initialize the slider

    const worldMap = new WorldDisasterMap();
    worldMap.initialize();
});

// Add animation classes when elements come into view
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.disaster-card, .impact-chart')
        .forEach(el => observer.observe(el));
};

// Initialize animations
observeElements();

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const progressBars = document.querySelector('.slide-progress');
    let currentSlide = 0;
    const duration = 5000; // 5 seconds per slide

    // Initialize slider
    function initializeSlider() {
        progressBars.innerHTML = '';
        
        // Create progress bars
        slides.forEach((_, index) => {
            const bar = document.createElement('div');
            bar.className = 'progress-bar';
            if (index === 0) bar.classList.add('active');
            progressBars.appendChild(bar);
        });

        // Show first slide
        showSlide(0);
    }

    // Show specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
        
        document.querySelectorAll('.progress-bar').forEach((bar, i) => {
            bar.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }

    // Next slide
    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    // Initialize slider
    initializeSlider();

    // Add click handlers for progress bars
    document.querySelectorAll('.progress-bar').forEach((bar, index) => {
        bar.addEventListener('click', () => showSlide(index));
    });

    // Start automatic slideshow
    let slideInterval = setInterval(nextSlide, duration);

    // Pause on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, duration);
    });
}

// Alert banner functionality
function closeAlert() {
    const banner = document.getElementById('alertBanner');
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    banner.style.animation = 'slideUp 0.5s ease-out forwards';
    
    setTimeout(() => {
        banner.style.display = 'none';
        navbar.style.top = '0';
        hero.style.marginTop = '0';
        navbar.style.transition = 'top 0.3s ease';
        hero.style.transition = 'margin-top 0.3s ease';
    }, 400);
}
