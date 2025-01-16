document.addEventListener('DOMContentLoaded', () => {
    // Yearly Earthquake Statistics
    const yearlyStatsCtx = document.getElementById('yearlyStats').getContext('2d');
    new Chart(yearlyStatsCtx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Major Earthquakes (Magnitude 6+)',
                data: [117, 135, 129, 142, 125],
                borderColor: 'rgba(121, 85, 72, 0.8)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Annual Major Earthquakes'
                }
            }
        }
    });

    // Magnitude Distribution
    const impactStatsCtx = document.getElementById('impactStats').getContext('2d');
    new Chart(impactStatsCtx, {
        type: 'radar',
        data: {
            labels: ['<4.0', '4.0-4.9', '5.0-5.9', '6.0-6.9', '7.0+'],
            datasets: [{
                label: 'Frequency',
                data: [1000, 500, 100, 20, 5],
                backgroundColor: 'rgba(121, 85, 72, 0.2)',
                borderColor: 'rgba(121, 85, 72, 0.8)',
                pointBackgroundColor: 'rgba(121, 85, 72, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Earthquake Magnitude Distribution'
                }
            }
        }
    });
}); 