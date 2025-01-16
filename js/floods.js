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

    // Yearly Flood Statistics
    const yearlyStatsCtx = document.getElementById('yearlyStats').getContext('2d');
    new Chart(yearlyStatsCtx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Major Floods per Year',
                data: [12, 15, 18, 22, 25],
                borderColor: 'rgba(44, 62, 80, 0.8)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Annual Flood Occurrences'
                }
            }
        }
    });

    // Flood Impact Statistics
    const impactStatsCtx = document.getElementById('impactStats').getContext('2d');
    new Chart(impactStatsCtx, {
        type: 'bar',
        data: {
            labels: ['Property Damage', 'Infrastructure', 'Agriculture', 'Economic Loss'],
            datasets: [{
                label: 'Impact in Billion $',
                data: [45, 28, 15, 32],
                backgroundColor: [
                    'rgba(44, 62, 80, 0.7)',
                    'rgba(44, 62, 80, 0.6)',
                    'rgba(44, 62, 80, 0.5)',
                    'rgba(44, 62, 80, 0.4)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Flood Impact Analysis'
                }
            }
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
